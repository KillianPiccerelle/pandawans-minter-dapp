import { FC, useCallback, useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

import { LoginMethodsEnum } from '../../types/enums';
import { ActionButton } from '../../components/ActionButton';
import { shortenHash } from '../../utils/shortenHash';
import { useLoginInfo } from '../../hooks/auth/useLoginInfo';

interface LedgerAccountsListProps {
  getHWAccounts: (page?: number, pageSize?: number) => Promise<string[]>;
  resetLoginMethod: () => void;
  handleLogin: (
    type: LoginMethodsEnum,
    ledgerAccountsIndex?: number
  ) => () => void;
}

const ADDRESSES_PER_PAGE = 10;
const LEDGER_NOT_CONNECTED_CODE = 0x6e01;
const LEDGER_DISCONNECTED = 'DisconnectedDeviceDuringOperation';

export const LedgerAccountsList: FC<LedgerAccountsListProps> = ({
  getHWAccounts,
  resetLoginMethod,
  handleLogin,
}) => {
  const [accounts, setAccounts] = useState<string[]>();
  const [currentPage, setCurrentPage] = useState(0);
  const [listPending, setListPending] = useState(true);
  const [error, setError] = useState<string>();
  const [chosenAddress, setAddress] = useState<string>();

  const { loginToken } = useLoginInfo();

  const mounted = useRef(false);

  const router = useRouter();

  useEffect(() => {
    mounted.current = true;

    const fetch = async () => {
      try {
        mounted.current && setListPending(true);
        const accounts = await getHWAccounts(currentPage, ADDRESSES_PER_PAGE);
        if (accounts?.length > 0 && mounted.current) setAccounts(accounts);
      } catch (e: any) {
        if (
          (e.statusCode === LEDGER_NOT_CONNECTED_CODE ||
            e.name === LEDGER_DISCONNECTED) &&
          mounted.current
        ) {
          setError(
            'Not connected, please check the connection and make sure that you have the Elrond app opened on your Ledger device.'
          );
        }
      } finally {
        mounted.current && setListPending(false);
      }
    };
    fetch();
    return () => {
      mounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prevState) => prevState + 1);
  }, []);

  const handleRefresh = useCallback(() => {
    router.reload();
  }, [router]);

  const login = useCallback(
    (index, address) => () => {
      handleLogin(LoginMethodsEnum.ledger, index)();
      setAddress(address);
    },
    [handleLogin]
  );

  useEffect(() => {
    if (!listPending && !accounts && !error) {
      resetLoginMethod();
    }
  }, [accounts, error, listPending, resetLoginMethod]);

  if (listPending) {
    return (
      <div className="flex justify-center align-center mt-6 flex-col">
        <svg
          role="status"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-color2Base"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <div className="mt-3">Loading addresses, please wait...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center ml-auto mr-auto mt-6">
        <p>{error}</p>
        <ActionButton className="mt-4" onClick={handleRefresh}>
          Refresh
        </ActionButton>
      </div>
    );
  }

  if (!accounts) return null;

  if (chosenAddress)
    return (
      <div className="flex justify-center align-center mt-6 flex-col">
        <svg
          role="status"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-color2Base"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <div className="mt-3">Confirm on the Ledger device:</div>
        <div className="mt-3 break-words text-center">
          <div className="font-bold">Address:</div> {chosenAddress}
        </div>
        {loginToken && (
          <div className="mt-3">
            <div className="font-bold">Auth token:</div> {loginToken}
            {'{}'}
          </div>
        )}
      </div>
    );

  return (
    <div className="ml-auto mr-auto mt-6">
      <p className="font-semibold text-center mb-2">Choose address:</p>
      {accounts?.map((account: string, index: number) => (
        <div
          className="mb-0.5 cursor-pointer border border-solid border-transparent rounded-md hover:border hover:border-dotted hover:border-white hover:pl-2 ease-linear duration-20 p-2"
          key={account}
          onClick={login(index, account)}
        >
          <span className="inline-block text-center min-w-4">
            {index + currentPage * ADDRESSES_PER_PAGE}
          </span>
          :
          <span className="inline-block ml-4 text-center">
            {shortenHash(account, 11)}
          </span>
        </div>
      ))}
      <div className="flex justify-between mt-6 opc">
        <p
          className={`${
            currentPage === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
          } ${currentPage === 0 ? 'opacity-50' : 'opacity-100'}`}
          onClick={handlePrev}
        >
          Prev
        </p>
        <p className="cursor-pointer" onClick={handleNext}>
          Next
        </p>
      </div>
    </div>
  );
};

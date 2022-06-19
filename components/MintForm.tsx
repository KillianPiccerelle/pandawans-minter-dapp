import { useMintTransaction } from '../hooks/interaction/useMintTransaction';
import { useCallback, FC, useState } from 'react';
import { ActionButton } from './ActionButton';
import { ScTransactionCb } from '../hooks/interaction/useScTransaction';
import { useLoginInfo } from '../hooks/auth/useLoginInfo';
import { LoginMethodsEnum } from '../types/enums';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { TransactionPendingModal } from './core/TransactionPendingModal';

interface MintFormProps {
  leftToMintForUser: number;
  cb?: (params: ScTransactionCb) => void;
}

export const MintForm: FC<MintFormProps> = ({ leftToMintForUser, cb }) => {
  const [amount, setAmount] = useState(1);
  const { mint, pending, transaction, error } = useMintTransaction(cb);
  const { loginMethod } = useLoginInfo();

  const handleMint = useCallback(() => {
    mint(amount);
  }, [amount, mint]);

  const setAmountHandler = useCallback((value) => setAmount(value), []);

  const getAdditionalPendingMessage = () => {
    if (loginMethod === LoginMethodsEnum.walletconnect) {
      return 'Sign the transaction using Maiar mobile app. It will take some time to finish. You can always close this message. You will get the transaction hash when finished.';
    }
    if (loginMethod === LoginMethodsEnum.ledger) {
      return 'Sign the transaction using Ledger HW. It will take some time to finish. You can always close this message. You will get the transaction hash when finished.';
    }
    return 'It will take some time to finish. You can always close this message. You will get the transaction hash when finished.';
  };

  return (
    <>
      <div className="flex gap-5 items-center justify-start">
        <NumberInput
          maxW="100px"
          min={1}
          max={leftToMintForUser}
          value={amount}
          onChange={setAmountHandler}
        >
          <NumberInputField
            py={5}
            _focus={{ outline: 'none' }}
            disabled={leftToMintForUser <= 0}
            placeholder="Amount of tokens to mint..."
          />
          {leftToMintForUser <= 0 ? null : (
            <NumberInputStepper>
              <NumberIncrementStepper borderColor="pandawans.base.dark" />
              <NumberDecrementStepper />
            </NumberInputStepper>
          )}
        </NumberInput>
        <ActionButton
          onClick={handleMint}
          disabled={pending || leftToMintForUser <= 0}
        >
          {pending ? 'Pending...' : 'Mint'}
        </ActionButton>
      </div>
      <TransactionPendingModal
        isOpen={pending}
        successTxHash={transaction?.getHash().toString()}
        txError={error}
        additionalMessage={getAdditionalPendingMessage()}
      />
    </>
  );
};

// Login component wraps all auth services in one place
// You can always use only one of them if needed
import { useCallback, memo, useState } from 'react';

import { useLogin } from '../../hooks/auth/useLogin';
import { LoginMethodsEnum } from '../../types/enums';
import { MobileLoginQR } from './MobileLoginQR';
import { ActionButton } from '../ActionButton';
import { LedgerAccountsList } from './LedgerAccountsList';

export const LoginComponent = memo(() => {
  const { login, isLoggedIn, error, walletConnectUri, getHWAccounts } =
    useLogin();
  const [loginMethod, setLoginMethod] = useState<LoginMethodsEnum>();

  const handleLogin = useCallback(
    (type: LoginMethodsEnum, ledgerAccountsIndex?: number) => () => {
      setLoginMethod(type);
      login(type, ledgerAccountsIndex);
    },
    [login]
  );

  const handleLedgerAccountsList = useCallback(() => {
    setLoginMethod(LoginMethodsEnum.ledger);
  }, []);

  const resetLoginMethod = useCallback(() => {
    setLoginMethod(undefined);
  }, []);

  if (error) return <div className="text-center">{error}</div>;

  return (
    <>
      <div className="flex space-x-4 flex-col align-center">
        {!isLoggedIn && (
          <>
            <ActionButton
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.wallet)}
            >
              Elrond Web Wallet
            </ActionButton>
            <ActionButton
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.extension)}
            >
              Maiar Browser Extension
            </ActionButton>
            <ActionButton
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.walletconnect)}
            >
              Maiar Mobile App
            </ActionButton>
            <ActionButton isFullWidth onClick={handleLedgerAccountsList}>
              Ledger
            </ActionButton>
          </>
        )}
      </div>
      {loginMethod === LoginMethodsEnum.walletconnect && walletConnectUri && (
        <div className="mt-5">
          <MobileLoginQR walletConnectUri={walletConnectUri} />
        </div>
      )}
      {loginMethod === LoginMethodsEnum.ledger && (
        <LedgerAccountsList
          getHWAccounts={getHWAccounts}
          resetLoginMethod={resetLoginMethod}
          handleLogin={handleLogin}
        />
      )}
    </>
  );
});

LoginComponent.displayName = 'LoginComponent';

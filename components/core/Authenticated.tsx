import { Spinner } from 'flowbite-react';
import { FC, ReactElement } from 'react';

import { useLoggingIn } from '../../hooks/auth/useLoggingIn';

interface AuthenticatedProps {
  fallback?: ReactElement;
  noSpinner?: boolean;
}

export const Authenticated: FC<AuthenticatedProps> = ({
  children,
  fallback = null,
  noSpinner = false,
}) => {
  const { isLoggingIn, isLoggedIn } = useLoggingIn();

  if (isLoggingIn)
    return noSpinner ? null : (
      <div className="flex justify-center">
        <Spinner color="info" aria-label="Info spinner example" />
      </div>
    );

  if (!isLoggedIn) return fallback;

  return <>{children}</>;
};

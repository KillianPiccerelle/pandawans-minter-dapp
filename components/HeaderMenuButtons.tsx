import { useRouter } from 'next/router';
import { useCallback, FC } from 'react';
import { ActionButton } from './ActionButton';
import { SocialMediaIcons } from './SocialMediaIcons';
import { LoginModalButton } from './core/LoginModalButton';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMintClick = useCallback(() => {
    router.push('/mint');
  }, [router]);

  const handleAboutClick = useCallback(() => {
    router.push('/about');
  }, [router]);

  return (
    <div className="flex gap-5 items-center xsm:flex-col">
      {enabled.includes('about') && (
        <button
          className="text-white hover:outline-none"
          variant="link"
          color="pandawans.white"
          _focus={{ outline: 'none' }}
          mr={2}
          onClick={handleAboutClick}
        >
          About
        </button>
      )}

      <SocialMediaIcons />

      {enabled.includes('mint') && (
        <ActionButton onClick={handleMintClick}>Mint</ActionButton>
      )}
      {enabled.includes('auth') && <LoginModalButton />}
    </div>
  );
};

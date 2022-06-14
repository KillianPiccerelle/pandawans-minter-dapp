import { FC, useCallback } from 'react';

import CSS from 'csstype';

interface ActionButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: () => void;
  isFullWidth?: boolean;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button'; // TODO: à vérifier
}

export const ActionButton: FC<ActionButtonProps> = ({
  children,
  onClick,
  isFullWidth = false,
  disabled = false,
  ...props
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick?.();
    }
  }, [disabled, onClick]);

  const style: CSS.Properties = {
    transition: '',
  };

  return (
    <button
      className={`border-color2Darker border-2 bg-transparent py-2 px-6 rounded-xl font-normal text-white ${
        !disabled ? 'hover:bg-color2Darker' : {}
      } select-none ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${
        isFullWidth ? 'w-full' : 'w-auto'
      } ease-linear duration-300 ${!disabled ? 1 : 0.5}`}
      style={style}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

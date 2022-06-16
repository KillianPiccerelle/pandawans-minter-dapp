import { FC } from 'react';
import { Logo } from './Logo';

export const HeaderMenu: FC = ({ children }) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-2 py-9 ">
      <Logo />
      {children}
    </div>
  );
};

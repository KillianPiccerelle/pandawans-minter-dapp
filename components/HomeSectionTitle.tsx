import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <h2 className="font-black mb-16 text-center w-full text-7xl ">
      {title} <span className="w-5 h-5 inline-block bg-color3Base" />
    </h2>
  );
};

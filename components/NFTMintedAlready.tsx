import { Spinner } from 'flowbite-react';
import { FC } from 'react';

interface NFTMintedAlreadyProps {
  data?: string | number;
  dataLoading?: boolean;
}

export const NFTMintedAlready: FC<NFTMintedAlreadyProps> = ({
  data,
  dataLoading,
}) => {
  return (
    <div className="flex items-center justify-start">
      <p className="text-xl font-bold">You have minted: </p>

      {dataLoading ? (
        <Spinner color="info" aria-label="Info spinner example" />
      ) : (
        <p className="text-color2Base text-3xl font-black ml-3">{data}</p>
      )}

      <p className="text-xl font-body ml-3">in total</p>
    </div>
  );
};

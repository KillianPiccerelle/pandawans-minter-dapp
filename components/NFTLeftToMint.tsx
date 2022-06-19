import { Spinner } from 'flowbite-react';
import { FC } from 'react';
import { isDropActive } from '../config/nftSmartContract';

interface NFTLeftToMintProps {
  data?: string | number;
  dropData?: string | number;
  dataLoading?: boolean;
}

export const NFTLeftToMint: FC<NFTLeftToMintProps> = ({
  data,
  dropData,
  dataLoading,
}) => {
  return (
    <div className="flex items-center justify-start">
      <p className="text-xl font-bold">
        {isDropActive ? 'Current drop' : 'Total'} NFTs left to mint:{' '}
      </p>
      {dataLoading ? (
        <Spinner color="info" aria-label="Info spinner example" />
      ) : (
        <p className="text-color2Base text-3xl font-black ml-3">
          {isDropActive ? dropData : data}
        </p>
      )}
    </div>
  );
};

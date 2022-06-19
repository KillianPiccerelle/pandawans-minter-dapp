import { Spinner } from 'flowbite-react';
import { FC } from 'react';

interface NFTLeftToMintPerAddressProps {
  leftToMintForUser: number;
  dataLoading?: boolean;
}

export const NFTLeftToMintPerAddress: FC<NFTLeftToMintPerAddressProps> = ({
  leftToMintForUser,
  dataLoading,
}) => {
  return (
    <div className="flex items-center mb-6 justify-start">
      <p className="text-xl font-bold">You can mint:</p>
      {dataLoading ? (
        <Spinner color="info" aria-label="Info spinner example" />
      ) : (
        <p className="text-color2Base text-3xl font-black ml-3">
          {leftToMintForUser}
        </p>
      )}
      <p className="text-xl font-bold ml-3">NFTs</p>
    </div>
  );
};

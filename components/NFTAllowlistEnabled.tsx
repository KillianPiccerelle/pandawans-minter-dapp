import { Spinner } from 'flowbite-react';
import { FC } from 'react';
import { isAllowlistEnabled } from '../config/nftSmartContract';

interface NFTAllowlistEnabledProps {
  data?: string | number;
  dataLoading?: boolean;
}

export const NFTAllowlistEnabled: FC<NFTAllowlistEnabledProps> = ({
  data,
  dataLoading,
}) => {
  return (
    <>
      {isAllowlistEnabled && (
        <div className="flex items-center mt-2 mb-2 justify-start">
          <div>
            <span className="text-xl font-bold">
              Allowlist is enabled. You are{' '}
            </span>
            {dataLoading ? (
              <Spinner color="info" aria-label="Info spinner example" />
            ) : Number(data) !== 0 ? (
              <span className="text-color2Base font-bold text-xl">on</span>
            ) : (
              <span className=" text-color3Base text-bold text-xl">not on</span>
            )}{' '}
            <span className="text-xl font-bold">the list!</span>
          </div>
        </div>
      )}
    </>
  );
};

import { useCallback } from 'react';
import { Address } from '@elrondnetwork/erdjs';
import { useScQuery, SCQueryType } from '../hooks/interaction/useScQuery';
import { MintForm } from './MintForm';
import { Authenticated } from './core/Authenticated';
import { useAccount } from '../hooks/auth/useAccount';
import { LoginModalButton } from './core/LoginModalButton';
import {
  isDropActive,
  smartContractAddress,
  tokensLimitPerAddressTotal,
  tokensLimitPerAddressPerDrop,
  isAllowlistEnabled,
  isMintingStarted,
} from '../config/nftSmartContract';
import { networkConfig, chainType } from '../config/network';
import { NFTLeftToMint } from './NFTLeftToMint';
import { NFTAllowlistEnabled } from './NFTAllowlistEnabled';
import { NFTMintedAlready } from './NFTMintedAlready';
import { NFTLeftToMintPerAddress } from './NFTLeftToMintPerAddress';

// TODO: Prepare sc query hooks for all cases
// TODO: Prepare separate components for the segments here
// TODO: refactor it a bit

export const MintHero = () => {
  const { address } = useAccount();
  const {
    data,
    fetch: refreshData,
    isLoading: totalIsLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getTotalTokensLeft',
      args: [],
    },
  });

  const {
    data: dropData,
    fetch: refreshDropData,
    isLoading: dropIsLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getDropTokensLeft',
      args: [],
    },
    autoInit: isDropActive,
  });

  const {
    data: mintedData,
    fetch: refreshMintedData,
    isLoading: mintedDataLoading,
  } = useScQuery({
    type: SCQueryType.INT,
    payload: {
      scAddress: smartContractAddress,
      funcName: 'getMintedPerAddressTotal',
      args: address ? [Address.fromBech32(address)?.hex()] : [],
    },
    autoInit: Boolean(address),
  });

  const { data: mintedPerDropData, fetch: refreshMintedPerDropData } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getMintedPerAddressPerDrop',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address && isDropActive),
    });

  const { data: allowlistCheckData, isLoading: allowlistCheckLoading } =
    useScQuery({
      type: SCQueryType.INT,
      payload: {
        scAddress: smartContractAddress,
        funcName: 'getAllowlistAddressCheck',
        args: address ? [Address.fromBech32(address)?.hex()] : [],
      },
      autoInit: Boolean(address && isAllowlistEnabled),
    });

  const handleRefreshData = useCallback(() => {
    refreshData();
    refreshMintedData();
    refreshMintedPerDropData();
    refreshDropData();
  }, [
    refreshData,
    refreshMintedData,
    refreshMintedPerDropData,
    refreshDropData,
  ]);

  const getLeftToMintForUser = useCallback(() => {
    let leftPerDrop = 0;
    let leftInTotal = 0;

    if (isAllowlistEnabled && Number(allowlistCheckData) === 0) {
      return 0;
    }

    if (mintedPerDropData) {
      leftPerDrop = tokensLimitPerAddressPerDrop - Number(mintedPerDropData);
    }
    if (mintedData) {
      leftInTotal = tokensLimitPerAddressTotal - Number(mintedData);
    }
    if (!isDropActive || leftPerDrop > leftInTotal) {
      return leftInTotal;
    }
    return leftPerDrop;
  }, [allowlistCheckData, mintedData, mintedPerDropData]);

  return (
    <div className="w-full">
      <h1 className="text-5xl text-left font-black line-snug mb-5">
        ⚡ Mint some of them
      </h1>
      <h2 className="text-lg font-thin text-left">
        To be able to mint you have to be logged in to be able to mint. Remember
        that it will mint only on the devent. If you want to do that, you need
        to connect using one of the methods and the devnet address with some
        xEGLD funds.
      </h2>
      {isMintingStarted ? (
        <div className="mt-6">
          <NFTLeftToMint
            data={data}
            dropData={dropData}
            dataLoading={isDropActive ? dropIsLoading : totalIsLoading}
          />
          <div>
            <Authenticated
              fallback={
                <div className="mt-6 flex justify-center">
                  <LoginModalButton />
                </div>
              }
            >
              <NFTAllowlistEnabled
                data={allowlistCheckData}
                dataLoading={allowlistCheckLoading}
              />
              <NFTMintedAlready
                data={mintedData}
                dataLoading={mintedDataLoading}
              />
              <NFTLeftToMintPerAddress
                leftToMintForUser={getLeftToMintForUser()}
              />
              <MintForm
                cb={handleRefreshData}
                leftToMintForUser={getLeftToMintForUser()}
              />
              {mintedData && mintedData > 0 && (
                <div className="flex items-center m-6 justify-start">
                  <span className="text-xl font-bold">Check your NFTs:</span>
                  <a
                    className="ml-3 text-color2Base text-2xl font-black decoration-1"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href={`${networkConfig[chainType].explorerAddress}/accounts/${address}/nfts`}
                  >
                    here
                  </a>
                </div>
              )}
            </Authenticated>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-2xl font-bold m-10">
            Minting was not started yet.
          </p>
          <p className="text-2xl font-bold">Please be back soon!</p>
        </div>
      )}
    </div>
  );
};

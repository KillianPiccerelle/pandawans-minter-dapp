import { chainType, networkConfig } from '../config/network';
import {
  collectionTicker,
  smartContractAddress,
  collectionSize,
} from '../config/nftSmartContract';
import { shortenHash } from '../utils/shortenHash';
import { CollectionInfoBox } from './CollectionInfoBox';

export const Hero = () => {
  return (
    <div className="w-full">
      <h1 className="text-5xl text-left font-black leading-tight mb-5">
        Open source Dapp template for the{' '}
        <a
          className="text-color3Base"
          href="https://www.elven.tools"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Elven Tools
        </a>{' '}
        and{' '}
        <a
          className="text-color2Base"
          href="https://www.elrond.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Elrond
        </a>{' '}
        blockchain.
      </h1>
      <h2 className="text-lg font-extralight text-left ">
        The actual working example is connected to the Elven Tools smart
        contract deployed on the Elrond blockchain{' '}
        <span className="font-medium">devnet</span>! You can play with it. I
        will redeploy it from time to time to keep the minting active. You can
        also use the template on the mainnet with a couple of config changes.
        Check the Elven Tools website for docs.
      </h2>
      <div className="flex justify-start mt-10 gap-3 ">
        <CollectionInfoBox
          content={collectionTicker}
          label="Collection ticker. Click for details."
          href={`${networkConfig[chainType].explorerAddress}/collections/${collectionTicker}`}
        />
        <CollectionInfoBox
          content={shortenHash(smartContractAddress, 12)}
          label={`Minter smart contract. Click for details.`}
          href={`${networkConfig[chainType].explorerAddress}/accounts/${smartContractAddress}`}
        />
        <CollectionInfoBox content={collectionSize} label="Collection amount" />
      </div>
    </div>
  );
};

import { chainType, networkConfig } from '../config/network';
import {
  collectionTicker,
  smartContractAddress,
  collectionSize,
} from '../config/nftSmartContract';
import { shortenHash } from '../utils/shortenHash';

export const Hero = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center md:text-left font-black leading-tight mb-5">
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
      <h2 className="text-lg font-thin text-center md:text-left">
        The actual working example is connected to the Elven Tools smart
        contract deployed on the Elrond blockchain{' '}
        <span className="font-medium">devnet</span>! You can play with it. I
        will redeploy it from time to time to keep the minting active. You can
        also use the template on the mainnet with a couple of config changes.
        Check the Elven Tools website for docs.
      </h2>
      <div className="flex justify-center md:justify-start mt-10 gap-3 smm:flex-col">
        <div>
          <button
            data-tooltip-target="tooltip-default"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Default tooltip
          </button>
          <div
            id="tooltip-default"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
            data-popper-placement="top"
          >
            Tooltip content
            <div className="tooltip-arrow" data-popper-arrow=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

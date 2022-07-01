import {
  Modal,
  ModalContent,
  Spinner,
  ModalBody,
  useDisclosure,
  ModalOverlay,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FC } from 'react';
import { networkConfig, chainType } from '../../config/network';
import { useEffectOnlyOnUpdate } from '../../hooks/tools/useEffectOnlyOnUpdate';
import { shortenHash } from '../../utils/shortenHash';

interface TransactionPendingModalProps {
  isOpen: boolean;
  successTxHash?: string;
  txError?: string;
  additionalMessage?: string;
}

const CustomModalOverlay = () => {
  return <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />;
};

export const TransactionPendingModal: FC<TransactionPendingModalProps> = ({
  isOpen = false,
  successTxHash,
  txError,
  additionalMessage,
}) => {
  const { isOpen: opened, onOpen, onClose } = useDisclosure();

  useEffectOnlyOnUpdate(() => {
    if (isOpen || successTxHash || txError) {
      onOpen();
    }
  }, [isOpen, successTxHash, txError]);

  const txTitle = () => {
    // TODO: refactor and improve catching errors (from ledger and standard ones)
    if (txError === 'Ledger device: UNKNOWN_ERROR (0x6e07)') {
      return 'Contract data disabled in app options. Please enable it on your Ledger device.';
    }
    if (
      txError ===
      'Ledger device: Condition of use not satisfied (denied by the user?) (0x6985)'
    ) {
      return 'Transaction was rejected by user.';
    }
    if (
      txError ===
      'Request error on url [transactions]: [{"statusCode":400,"message":""}]'
    ) {
      return "The transaction can't be processed. Check if there are funds on chosen wallet address.";
    }
    if (txError) {
      return `Transaction status: ${txError}.`;
    }
    if (successTxHash) {
      return 'Transaction success. Check explorer for details.';
    }
    return 'Transaction pending.';
  };

  return (
    <Modal isOpen={opened} size="sm" onClose={onClose} isCentered>
      <CustomModalOverlay />
      <ModalContent
        bgColor="pandawans.dark.darker"
        px={6}
        pt={7}
        pb={10}
        position="relative"
      >
        <ModalCloseButton _focus={{ outline: 'none' }} />
        <ModalBody>
          <p className="text-center font-semibold text-xl">{txTitle()}</p>

          {!txError && (
            <div className="flex items-center justify-center mt-8">
              {successTxHash && (
                <a
                  className="border-color2Darker border-2 bg-transparent py-2 px-6 rounded-xl font-normal select-none text-white hover:bg-color2Darker"
                  href={`${networkConfig[chainType].explorerAddress}/transactions/${successTxHash}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {shortenHash(successTxHash)}
                </a>
              )}
              {!successTxHash && !txError && (
                <Spinner
                  thickness="3px"
                  speed="0.4s"
                  color="pandawans.color2.base"
                  size="xl"
                />
              )}
            </div>
          )}
          {additionalMessage && !successTxHash && !txError && (
            <p className="text-center mt-5 font-semibold text-base">
              {additionalMessage}
            </p>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

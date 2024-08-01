import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Modal,
} from '@nextui-org/react';
import React from 'react';
import { ModalPropsType } from './modal';
import { Button } from '@/app/components/button/Button';

const CustomModal: React.FC<ModalPropsType & ModalProps> = ({
  children,
  title,
  isOpen,
  closeButtonTitle,
  validateButtonTitle,
  onClose,
  classStyle,
  iconTitle,
  onValidateButton,
  showFooter,
  positon,
  hideCloseButton,
  modalClass,
  isDismissable,
}) => {
  return (
    <Modal
      className={classStyle}
      backdrop="blur"
      size="4xl"
      isOpen={isOpen}
      onClose={onClose}
      placement={positon}
      hideCloseButton={hideCloseButton}
      isKeyboardDismissDisabled={true}
      isDismissable={isDismissable}
      classNames={{
        body: 'py-6',
        backdrop: 'bg-[gray] border-none overflow-x-hidden shadow-none',
        base: 'border-none bg-transparent',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            {title && (
              <ModalHeader className="flex flex-col gap-1 ml-[2%] font-[900] text-2xl border-none">
                {title}
              </ModalHeader>
            )}
            <ModalBody className="">{children}</ModalBody>

            {showFooter ? (
              <ModalFooter>
                <Button onClick={onClose} className="w-[15%]">
                  {validateButtonTitle}
                </Button>
              </ModalFooter>
            ) : (
              ''
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;

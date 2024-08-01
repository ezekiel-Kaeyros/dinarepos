import React from 'react';
import CustomModal from './nextUiModal/Modal';
import { Button } from '@/app/components/button/Button';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

interface onBehalfModalProps {
  onClose: () => void;
  isOpen: boolean;
  Modaldes: string;
  modalBtn: string;
}

function OnBehalfModal({
  onClose,
  isOpen,
  Modaldes,
  modalBtn,
}: onBehalfModalProps) {
  return (
    <div>
      <CustomModal
        onClose={onClose}
        isOpen={isOpen}
        positon="center"
        hideCloseButton={true}
        isDismissable={false}
      >
        <span className="text-white font-extrabold text-lg text-center">
          {Modaldes}
        </span>
        <Button
          onClick={onClose}
          variant="primary"
          className="w-fit font-bold m-auto"
        >
          {modalBtn}
        </Button>
      </CustomModal>
    </div>
  );
}

export default OnBehalfModal;

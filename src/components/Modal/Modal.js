import * as React from 'react';
import Modal from '@mui/material/Modal';
import { useTranslation } from 'react-i18next';
import { ModalBody, ModalTitle,ModalSubTitle, ModalButtonGroup,ModalButtonCancel,ModalButtonAccept} from './Modal.styled';
import { PropTypes } from 'prop-types';

export const ModalContent = ({ title, subtitle, modalOpen, modalClose, modalItemDelete }) => {
  const { t } = useTranslation()

  const handleClose = () => {
    modalClose(false);
  };

  const handleDelete = () => {
    modalItemDelete()
    modalClose(false);

  }

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <ModalBody >
        <ModalTitle>
          {title}
        </ModalTitle>
        <ModalSubTitle>
          {subtitle}
        </ModalSubTitle>
        <ModalButtonGroup>
          <ModalButtonCancel onClick={handleClose}>
          {t("cancel")} 
          </ModalButtonCancel>
          <ModalButtonAccept onClick={handleDelete} >
          {t("delete")}
          </ModalButtonAccept>
        </ModalButtonGroup>
      </ModalBody>
    </Modal>
  );
}

ModalContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  modalClose: PropTypes.func.isRequired,
  modalItemDelete: PropTypes.func.isRequired,
}
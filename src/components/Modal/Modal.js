import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ModalBody } from './Modal.styled';
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
        <h2 id="parent-modal-title">{title}</h2>
        <p id="parent-modal-description">
          {subtitle}
        </p>
        <Button onClick={handleClose}> {t("cancel")} </Button>
        <Button onClick={handleDelete} > {t("delete")} </Button>
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
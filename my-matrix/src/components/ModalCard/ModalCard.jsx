import React from 'react';
import { Modal } from '@mui/material';

const ModalCard = ({ open, handleClose, children }) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    {children}
  </Modal>
);

export default ModalCard;

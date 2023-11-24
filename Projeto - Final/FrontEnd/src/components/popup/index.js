import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Popup = ({ message, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Mensagem"
    >
      <div>
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </Modal>
  );
};

export default Popup;
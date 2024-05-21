import React from 'react';
import './styles.css';

interface ModalProps {
  show: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, message, onConfirm, onCancel }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <div className="overlay" onClick={onCancel}></div>
      <div className="modal">
        <p>{message}</p>
        <button onClick={onConfirm}>Đồng ý</button>
        <button onClick={onCancel}>Hủy</button>
      </div>
    </>
  );
};

export default Modal;

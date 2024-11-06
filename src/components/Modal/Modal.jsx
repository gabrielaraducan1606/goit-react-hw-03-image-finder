import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {
  // Închiderea modalului la apăsarea tastei ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
// Închiderea modalului la click pe fundal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt="Large view" />
      </div>
    </div>
  );
};

export default Modal;

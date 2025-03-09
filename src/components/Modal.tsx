import styles from "../css_modules/modal.module.css";
import { useState } from "react";

interface ModalProps {
  imgSrc: string;
  imgAlt: string;
}
const Modal: React.FC<ModalProps> = ({ imgSrc, imgAlt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <img
        src={imgSrc}
        alt={imgAlt}
        onClick={openModal}
        className={styles.thumbnail}
      />
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <span className={styles.close}>&times;</span>
          <img
            className={styles.modalContent}
            src={imgSrc}
            alt={imgAlt}
            id="img01"
          />
          <div id="caption">{imgAlt}</div>
        </div>
      )}
    </>
  );
};
export default Modal;

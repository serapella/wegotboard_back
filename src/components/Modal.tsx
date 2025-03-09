import styles from "../css_modules/modal.module.css";

const Modal = () => {
  return (
    <div id="myModal" className={styles.modal}>
      <span className={styles.close}>&times;</span>
      <img className={styles.modalContent} id="img01" />
      <div id="caption">Description</div>
    </div>
  );
};
export default Modal;

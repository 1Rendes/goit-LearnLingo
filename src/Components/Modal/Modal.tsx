import css from "./Modal.module.css";
import icons from "../../assets/icons.svg";
import { ReactNode, useEffect } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

interface ModalProps {
  children: ReactNode;
  handleClose: (event: React.MouseEvent | React.KeyboardEvent) => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, handleClose, isOpen }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <ReactModal
      overlayClassName={css.backdrop}
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
    >
      <button onClick={handleClose} className={css.button}>
        <svg className={css.closeIcon} width={28} height={28}>
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;

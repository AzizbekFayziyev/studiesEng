import style from "./style.module.scss";

interface ModalType {
  text?: string;
  isOpen: boolean;
  confirm: () => void;
  cancel: () => void;
}

const Modal = ({ text, isOpen, confirm, cancel }: ModalType) => {
  if (!isOpen) {
    return;
  }

  return (
    <div className={style.modal}>
      <div className={style.content}>
        <div className={style.padding}>
          {text && <h5 className={style.text}>{text}</h5>}
          <p className={style.confirm_text}>вы уверены?</p>

          <div className={style.actions}>
            <button onClick={confirm} className={style.yes_btn}>
              <img src="/icons/yes.svg" alt="yes" /> да
            </button>
            <button onClick={cancel} className={style.no_btn}>
              <img src="/icons/no.svg" alt="no" /> нет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

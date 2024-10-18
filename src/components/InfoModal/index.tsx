import { ReactNode } from "react";
import style from "./style.module.scss";

interface InfoModalType {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const InfoModal = ({ children, open = false, onClose }: InfoModalType) => {
  if (open)
    return (
      <div className={style.main}>
        <div className={style.modal}>
          <button onClick={onClose} className={style.close}>
            <img width={10} src="/icons/x.svg" alt="x" />
          </button>
          {children}
        </div>
      </div>
    );
};

export default InfoModal;

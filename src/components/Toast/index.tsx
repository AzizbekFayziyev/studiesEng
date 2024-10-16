import { useEffect } from "react";
import style from "./style.module.scss";

interface ToastType {
  message: string;
  duration: number;
  onClose: () => void;
  type?: "success" | "error" | "default";
  desc?: string;
}

const Toast = ({
  message,
  duration,
  onClose,
  type = "default",
  desc,
}: ToastType) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`${style.toast} ${
        type == "success" ? style.success : style.error
      } ${type == 'default' && style.default}`}
    >
      <div className={style.content}>
        <div className={style.text}>
          {type !== "default" && (
            <img
              width={17}
              src={`/icons/${type == "success" ? "yes" : "no"}.svg`}
              alt="success"
            />
          )}
          <h5 className={`${style.title} ${desc && style.large}`}>{message}</h5>
        </div>

        <button onClick={onClose}>
          <img width={10} src="/icons/x.svg" alt="x" />
        </button>
      </div>

      {desc && <p className={style.info}>{desc}</p>}
    </div>
  );
};

export default Toast;

import { ReactNode } from "react";
import style from "./style.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isReverse?: boolean;
  noImg?: boolean;
  isSmall?: boolean;
}

const Button = ({
  children,
  onClick,
  isReverse = false,
  noImg = false,
  isSmall = false,
}: ButtonProps) => {
  return (
    <button className={`${style.btn} ${isSmall && style.small}`} onClick={onClick}>
      {!noImg && isReverse && (
        <img className={style.arrowLeft} src="/icons/arrow.svg" alt="arrow" />
      )}

      {children}

      {!noImg && !isReverse && (
        <img className={style.arrow} src="/icons/arrow.svg" alt="arrow" />
      )}
    </button>
  );
};

export default Button;

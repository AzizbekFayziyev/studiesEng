import { Link } from "react-router-dom";
import style from "./style.module.scss";

interface ListType {
  isActive?: boolean;
  isDisabled?: boolean;
  title: string;
  subtitle?: string;
  imgSrc: string;
  link?: string;
  isSmall?: boolean;
  isCompleted?: boolean;
}

const List = ({
  isActive = false,
  isDisabled = false,
  title,
  subtitle,
  imgSrc,
  isSmall,
  link = "/",
  isCompleted = false,
}: ListType) => {
  return (
    <li>
      <Link
        className={`${style.list} ${isActive && style.active} ${
          isDisabled && style.disabled
        } ${isCompleted && style.completed}`}
        to={link}
      >
        <img width={38} src={imgSrc} alt="list icon" />

        <div className={style.list_text}>
          {!isSmall ? <h4>{title}</h4> : <h5>{title}</h5>}
          {subtitle && <p>{subtitle}</p>}
        </div>

        {!isCompleted ? (
          <img
            className={style.list_arrow}
            src="/icons/arrow.svg"
            alt="arrow right"
          />
        ) : (
          <img className={style.completed_icon} src="/icons/yes.svg" alt="completed" />
        )}
      </Link>
    </li>
  );
};

export default List;

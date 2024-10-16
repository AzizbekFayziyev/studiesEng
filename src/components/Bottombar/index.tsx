import { useState } from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
  const [isMenuActive, setMenu] = useState(false);

  const toggleActiveMenu = () => {
    const marginB = document.querySelector(".marginB") as HTMLElement | null;

    if (isMenuActive) {
      setMenu(false);

      if (marginB) {
        marginB.style.marginBottom = "20px";
      }
    } else {
      setMenu(true);

      if (marginB) {
        marginB.style.marginBottom = "120px";
      }
    }
  };

  return (
    <>
      {isMenuActive ? (
        <nav className={style.bottom__nav}>
          <NavLink className={style.bottom__nav_link} to="/">
            <img src="/icons/menu/1.svg" alt="tests" />
            Тесты
          </NavLink>
          <NavLink className={style.bottom__nav_link} to="/tasks">
            <img src="/icons/menu/2.svg" alt="tasks" />
            Задания
          </NavLink>
          <NavLink className={style.bottom__nav_link} to="/leaderboard">
            <img src="/icons/menu/3.svg" alt="liderboard" />
            Таблица лидеров
          </NavLink>
          <NavLink className={style.bottom__nav_link} to="/friends">
            <img src="/icons/menu/4.svg" alt="friends" />
            Друзья
          </NavLink>
          <NavLink className={style.bottom__nav_link} to="/premium">
            <img width={35} src="/icons/corona.svg" alt="premium" />
            премиум
          </NavLink>

          <button onClick={toggleActiveMenu} className={style.close}>
            <img src="/icons/x.svg" alt="close" />
          </button>
        </nav>
      ) : (
        <button onClick={toggleActiveMenu} className={style.menu}>
          <img width={80} src="/icons/home.svg" alt="Menu" />
        </button>
      )}
    </>
  );
};

export default BottomBar;

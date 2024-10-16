import { useState } from "react";
import Appbar from "../../components/Appbar";
import BottomBar from "../../components/Bottombar";
import Button from "../../components/Button";
import { usersData } from "../../data";
import style from "./style.module.scss";
import Toast from "../../components/Toast";

const Friends = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <>
      <Appbar />

      <main className={`${style.main} marginT marginB`}>
        <img className={style.img} src="/icons/friends.svg" alt="friends" />

        <h1 className={style.title}>займите первое место</h1>

        <div className={style.subtitle}>
          <h4>рейтинг участников</h4>

          <img src="/icons/coin.svg" alt="coin" />
        </div>

        <ul className={style.users}>
          {usersData.slice(0, 3).map((user, id) => (
            <li key={id} className={style.user}>
              <div className={style.user_text}>
                <span>{id + 1}</span>

                <img width={12} src="/icons/menu/4.svg" alt="friend" />

                <img
                  className={style.user_avatar}
                  width={30}
                  src={user.avatar}
                  alt="user avatar"
                />

                <h5>{user.name}</h5>
              </div>

              <span className={style.user_score}>{user.score}</span>
            </li>
          ))}
        </ul>

        <div className={style.invite}>
          <Button>пригласить друга</Button>

          <button
            onClick={() => setToastOpen(true)}
            className={style.invite_copy}
          >
            <img src="/icons/copy.svg" alt="copy" />
          </button>
        </div>
      </main>

      <BottomBar />

      {toastOpen && (
        <Toast
          duration={3500}
          message="информация"
          type="default"
          desc="Ссылка скопирована в ваш буфер обмена!"
          onClose={() => setToastOpen(false)}
        />
      )}
    </>
  );
};

export default Friends;

import Appbar from "../../components/Appbar";
import BottomBar from "../../components/Bottombar";
import { usersData } from "../../data";
import style from "./style.module.scss";

const Leaderboard = () => {
  return (
    <>
      <Appbar />
      <main className={`${style.main} marginT marginB`}>
        <img className={style.img} src="/icons/menu/3.svg" alt="kubik" />

        <h1 className={style.title}>займите первое место</h1>

        <div className={style.subtitle}>
          <h4>рейтинг участников</h4>

          <img src="/icons/coin.svg" alt="coin" />
        </div>

        <ul className={style.users}>
          {usersData.map((user, id) => (
            <li key={id} className={style.user}>
              <div className={style.user_text}>
                <span>{id + 1}</span>
                {(id + 1 === 2 || id + 1 === 3) && (
                  <img width={21} src="/icons/medal.svg" alt="medal" />
                )}
                {(id + 1) == 1 && (
                  <img width={21} src="/icons/menu/3.svg" alt="medal" />
                )}

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
      </main>
      <BottomBar />
    </>
  );
};

export default Leaderboard;

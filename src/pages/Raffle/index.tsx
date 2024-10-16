import { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import Button from "../../components/Button";
import List from "../../components/List";
import { RiffleTasks, winnersData } from "../../data";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const Raffle = () => {
  const [status, setStatus] = useState<"coming" | "start" | "end">("coming");
  const navigate = useNavigate();

  useEffect(() => {
    const getStatus: any = localStorage.getItem("Rstatus");

    if (getStatus) setStatus(getStatus);
  }, []);

  return (
    <>
      <Appbar />

      <main className={`${style.main} marginT marginB`}>
        <h4 className={style.subtitle}>розыгрыш</h4>
        <h1 className={style.title}>«зимний слалом»</h1>

        <img
          className={style.raffle_img}
          src={`/images/${status == 'coming' ? "comingsoon" : "raffle"}.png`}
          alt="raffle"
        />

        {status == 'coming' && (
          <h5 onClick={() => setStatus('start')} className={`${style.infoText} ${style.textMarginB}`}>
            Скоро ... 
          </h5>
        )}

        <h5 className={style.infoText}>призы</h5>

        <div className={style.prizes}>
          <div className={style.main_card}>
            <img src="/icons/menu/3.svg" alt="kubik" />
            <p>1 место</p>
            <span>Iphone15 pro</span>
          </div>

          <div className={style.cards}>
            <div className={style.card}>
              <img src="/icons/medal.svg" alt="medal" />

              <div className={style.card_text}>
                <p>2 место</p>
                <span>airpods 3</span>
              </div>
            </div>

            <div className={style.card}>
              <img src="/icons/medal.svg" alt="medal" />

              <div className={style.card_text}>
                <p>3 место</p>
                <span>яндекс.станция</span>
              </div>
            </div>
          </div>
        </div>

        {status == 'end' && (
          <>
            <h5 className={style.infoText}>Победители</h5>

            <ul className={style.users}>
              {winnersData.map((user, id) => (
                <li key={id} className={style.user}>
                  <div className={style.user_text}>
                    <span>{id + 1}</span>
                    {(id + 1 === 2 || id + 1 === 3) && (
                      <img width={21} src="/icons/medal.svg" alt="medal" />
                    )}
                    {id + 1 == 1 && (
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

                  <span className={style.user_score}>{user.prize}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {status == 'start' && (
          <>
            <h5 className={style.infoText}>условия</h5>

            <ul className={style.lists}>
              {RiffleTasks.map((list, id) => (
                <List
                  key={id}
                  title={list.title}
                  imgSrc={list.img}
                  link={list.link}
                  isSmall={list.isSmall}
                />
              ))}
            </ul>

            <Button onClick={() => setStatus('end')}>проверить</Button>
          </>
        )}

        {status == 'coming' && (
          <button onClick={() => navigate(-1)} className={style.back}>
            <img src="/icons/next.svg" alt="back" />
          </button>
        )}
      </main>

      <div className={style.bg}>
        <img className={style.bg_1} src="/images/raffle-bg.png" alt="bg" />
        <img className={style.bg_2} src="/images/raffle-bg2.png" alt="bg" />
      </div>
    </>
  );
};

export default Raffle;

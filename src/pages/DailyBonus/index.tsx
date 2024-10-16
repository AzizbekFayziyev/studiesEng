import { useState } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const DailyBonus = () => {
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  return (
    <main className={style.main}>
      <h2 className="title">
        ежедневная <br /> награда
      </h2>

      <p className={style.subtitle}>
        Забирай монеты за ежедневный вход в игру без пропусков! Кнопку «Забрать»
        нужно нажимать ежедневно, иначе счетчик дней начнется заново! С каждым
        днем награда будет расти!
      </p>

      {isActive && (
        <h4 className={style.day}>
          подряд уже <span>25</span> дней <br /> так держать!
        </h4>
      )}

      {isActive ? (
        <button className={style.btn}>
          <img width={85} src="/icons/gifbox.svg" alt="gifbox" />
          <button onClick={() => setIsActive(false)} className={style.btn_text}>
            забрать <br />
            <div className={style.btn_count}>
              <img width={25} src="/icons/coin.svg" alt="coin" />
              <span>+50</span>
            </div>
          </button>

          <div className={style.btn_border}></div>
        </button>
      ) : (
        <button className={`${style.btn} ${style.btn_disabled}`}>
          23:59
          <div className={style.btn_border}></div>
        </button>
      )}

      {/* baclground */}
      {isActive && (
        <img className={style.bg} src="/images/dailyBg.png" alt="background" />
      )}
      {/* Next page */}
      {!isActive && (
        <img
        onClick={() => navigate('/tasks')}
          width={54}
          className={style.next}
          src="/icons/next.svg"
          alt="next arrow"
        />
      )}
    </main>
  );
};

export default DailyBonus;

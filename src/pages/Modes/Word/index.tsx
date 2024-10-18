import { Link, useNavigate } from "react-router-dom";
import Appbar from "../../../components/Appbar";
import BottomBar from "../../../components/Bottombar";
import style from "./style.module.scss";
import Badge from "../../../components/Badge";

const WordRuEn = () => {
  const navigate = useNavigate();
  return (
    <>
      <Appbar />

      <main className={`${style.main} marginT marginB`}>
        <h1 className={style.title}>слова</h1>
        <h4 className={style.subtitle}>Рус./Англ.</h4>

        <ul className={style.lists}>
          <li>
            <Link className={style.list} to="/mode/word-ru-en/travel">
              <div className={style.list_text}>
                <h4>Путешествия</h4>
                <p>изучите новые слова по теме «фрукты»</p>
              </div>

              <div className={style.list_badges}>
                <Badge type="premium" />

                <Badge
                  type="rate"
                  stars={["star2", "star", "star"]}
                  rate={15}
                />
              </div>

              <img className={style.arrow} src="/icons/arrow.svg" alt="arrow" />

              <button className={style.info}>
                <img width={23} src="/icons/info.svg" alt="info" />
              </button>
            </Link>
          </li>

          <li>
            <Link className={style.list} to="/mode/word-ru-en/fruits">
              <div className={style.list_text}>
                <h4>фрукты</h4>
                <p>изучите новые слова по теме «фрукты»</p>
              </div>

              <div className={style.list_badges}>
                <Badge type="coin" coin={15} />

                <Badge type="task" />

                <Badge type="question" question={20} />
              </div>

              <img className={style.arrow} src="/icons/arrow.svg" alt="arrow" />
            </Link>
          </li>

          <li>
            <Link className={style.list} to="/mode/word-ru-en/instruments">
              <div className={style.list_text}>
                <h4>Инструменты</h4>
                <p>изучите новые слова по теме «инструменты»</p>
              </div>

              <div className={style.list_badges}>
                <Badge type="free" />
                <Badge type="task" />
                <Badge type="question" question={12} />
              </div>

              <img className={style.arrow} src="/icons/arrow.svg" alt="arrow" />
            </Link>
          </li>

          <li>
            <Link
              className={`${style.list} ${style.disactive}`}
              to="/mode/word-ru-en/giroskop"
            >
              <div className={style.list_text}>
                <h4>гороскоп</h4>
                <p>изучите новые слова по теме «гороскоп»</p>
              </div>

              <div className={style.list_badges}>
                <Badge type="disabled" />
                <Badge type="question" question={32} />
              </div>

              <img className={style.arrow} src="/icons/arrow.svg" alt="arrow" />
            </Link>
          </li>

          <li>
            <Link className={style.list} to="/mode/word-ru-en/sport">
              <div className={style.list_text}>
                <h4>Спорт</h4>
                <p>изучите новые слова по теме «спорт»</p>
              </div>

              <div className={style.list_badges}>
                <Badge type="free" />
                <Badge type="task" />
                <Badge type="question" question={44} />
              </div>

              <img className={style.arrow} src="/icons/arrow.svg" alt="arrow" />
            </Link>
          </li>
        </ul>

        <img
          onClick={() => navigate(-1)}
          className={style.back}
          src="/icons/next.svg"
          alt="back"
        />
      </main>

      <BottomBar />
    </>
  );
};

export default WordRuEn;

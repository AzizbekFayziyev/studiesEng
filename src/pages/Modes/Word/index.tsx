import { Link, useNavigate } from "react-router-dom";
import Appbar from "../../../components/Appbar";
import BottomBar from "../../../components/Bottombar";
import style from "./style.module.scss";

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
                <div className={style.premium}>
                  <img width={11} src="/icons/corona.svg" alt="premium" />{" "}
                  премиум
                </div>

                <div className={style.rate}>
                  <div className={style.stars}>
                    <img width={15} src="/icons/star2.svg" alt="star" />
                    <img width={15} src="/icons/star.svg" alt="star" />
                    <img width={15} src="/icons/star.svg" alt="star" />
                  </div>

                  <div className={style.score}>
                    <img src="/icons/question.svg" width={14} alt="question" />
                    <p>
                      15/<span>100</span>
                    </p>
                  </div>
                </div>
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
                <div className={style.coins}>
                  <img src="/icons/coin.svg" width={14} alt="coin" /> 15
                </div>

                <div className={style.task}>задание</div>

                <div className={style.question}>
                  <img src="/icons/question.svg" width={14} alt="question" />
                  20
                </div>
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
                <div className={style.free}>бесплатно</div>
                <div className={style.task}>задание</div>
                <div className={style.question}>
                  <img src="/icons/question.svg" width={14} alt="question" />
                  12
                </div>
              </div>

              <img className={style.arrow} src="/icons/arrow.svg" alt="arrow" />
            </Link>
          </li>

          <li>
            <Link className={`${style.list} ${style.disactive}`} to="/mode/word-ru-en/giroskop">
              <div className={style.list_text}>
                <h4>гороскоп</h4>
                <p>изучите новые слова по теме «гороскоп»</p>
              </div>

              <div className={style.list_badges}>
                <div className={style.disabled}>недоступно</div>
                <div className={style.question}>
                  <img src="/icons/question.svg" width={14} alt="question" />
                  32
                </div>
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
                <div className={style.free}>бесплатно</div>
                <div className={style.task}>задание</div>
                <div className={style.question}>
                  <img src="/icons/question.svg" width={14} alt="question" />
                  44
                </div>
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

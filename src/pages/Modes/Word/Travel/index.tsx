import { Link } from "react-router-dom";
import Appbar from "../../../../components/Appbar";
import StatBar from "../../../../components/StatBar";
import style from "./style.module.scss";
import { useState } from "react";

const Travel = () => {
  const [showVariant, setShowVariant] = useState(false);

  const variants = [
    {
      title: "transport",
      isCorrect: true,
    },
    {
      title: "Vehicle",
    },
    {
      title: "Transit",
    },
    {
      title: "вариант ответа, адаптивно вписанного на двух строчках",
      multiline: true,
    },
  ];

  return (
    <>
      <Appbar />

      <main className={`${style.main} marginT marginB`}>
        <h1 className="title">путешествия</h1>

        <div className={style.question}>
          <h3>
            Как сказать по-английски <span>«Транспорт»?</span>
          </h3>

          <div className={style.coin}>
            <img width={23} src="/icons/coin.svg" alt="coin" /> 15
          </div>
        </div>

        <ul className={style.lists}>
          {variants.map((list, id) => (
            <li
              onClick={() => setShowVariant(true)}
              key={id}
              className={`${style.list} ${list.multiline && style.small} ${
                showVariant && list.isCorrect && style.true
              } ${showVariant && !list.isCorrect && style.false}`}
            >
              <span>Вариант {id + 1}</span>
              <h4>{list.title}</h4>

              {!showVariant && (
                <img width={17} src="/icons/mic.svg" alt="sound" />
              )}

              {showVariant && list.isCorrect && (
                <img width={31} src="/icons/yes.svg" alt="true" />
              )}
              {showVariant && !list.isCorrect && (
                <img width={26} src="/icons/no.svg" alt="false" />
              )}

              {showVariant && list.isCorrect && (
                <div className={style.info}>
                  <img width={23} src="/icons/info.svg" alt="info" />
                  
                  <div>
                    вариант ответа, адаптивно вписанного на двух строчках
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Link to="/price" className={style.next}>
          <img src="/icons/next.svg" alt="next" />
        </Link>

        <StatBar />
      </main>
    </>
  );
};

export default Travel;

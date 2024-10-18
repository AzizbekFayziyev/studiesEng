import { Link } from "react-router-dom";
import Appbar from "../../../../components/Appbar";
import StatBar from "../../../../components/StatBar";
import style from "./style.module.scss";
import { useState } from "react";
import Badge from "../../../../components/Badge";
import Button from "../../../../components/Button";
import InfoModal from "../../../../components/InfoModal";

const Travel = () => {
  const [isCorrectVariant, setCorrectVariant] = useState(false);
  const [start, setStart] = useState(false);
  const [modal, setModal] = useState(false);

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

  const onCheckVariant = (isCorrect: boolean) => {
    setModal(true);

    if (isCorrect) {
      setCorrectVariant(true);
    } else {
      setCorrectVariant(false);
    }
  };

  return (
    <>
      <Appbar />

      <p className={style.time}>
        <img width={17} src="/icons/time.svg" alt="time" /> 03:40
      </p>

      <main className={`${style.main} marginT marginB`}>
        {start ? (
          <>
            <h1 className="title">путешествия</h1>

            <div className={style.question}>
              <h3>
                Как сказать по-английски <span>«Транспорт»?</span>
              </h3>

              <div className={style.coin}>
                <img width={23} src="/icons/coin.svg" alt="coin" /> 15
              </div>

              <button className={style.mic}>
                <img width={17} src="/icons/mic.svg" alt="sound" />
              </button>
            </div>

            <ul className={style.lists}>
              {variants.map((list, id) => (
                <li
                  onClick={() => onCheckVariant(list.isCorrect || false)}
                  key={id}
                  className={`${style.list} ${list.multiline && style.small}`}
                >
                  <span>Вариант {id + 1}</span>
                  <h4>{list.title}</h4>

                  <img width={17} src="/icons/mic.svg" alt="sound" />
                </li>
              ))}
            </ul>

            <div className={style.bottom_actions}>
              <div className={style.questions}>
                <img width={23} src="/icons/question.svg" alt="question" />
                <p>
                  {" "}
                  15<span>/100</span>
                </p>
              </div>

              <Link to="/price" className={style.next}>
                <img src="/icons/next.svg" alt="next" />
              </Link>
            </div>
          </>
        ) : (
          <div className={style.test_content}>
            <h2 className="title">путешествия</h2>

            <h2 className={style.desc}>
              изучите новые слова <br />
              по теме путешествия
            </h2>
            <p className={style.question_score}>
              <img width={23} src="/icons/question.svg" alt="question" /> 100
            </p>
            <div className={style.conditions}>
              <h5>условия:</h5>

              <div className={style.badges}>
                <Badge type="premium" />
                <Badge type="free" />
                <Badge type="task" />
                <Badge type="coin" coin={15} />
              </div>

              <div className={style.result}>
                <h5>лучший результат:</h5>

                <div className={style.result_info}>
                  <div className={style.stars}>
                    <img width={32} src="/icons/star2.svg" alt="star" />
                    <img width={32} src="/icons/star.svg" alt="star" />
                    <img width={32} src="/icons/star.svg" alt="star" />
                  </div>

                  <p>
                    <span>15</span>/100
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={() => setStart(true)}>начать</Button>
          </div>
        )}

        <InfoModal open={modal} onClose={() => setModal(false)}>
          <div className={style.infoModal_content}> 
            {isCorrectVariant ? (
              <div className={style.answer_true}>
                <span>правильно</span>
                <img width={31} src="/icons/yes.svg" alt="true" />
              </div>
            ) : (
              <div className={style.answer_false}>
                <span>неправильно</span>
                <img width={26} src="/icons/no.svg" alt="true" />
              </div>
            )}

            <div
              className={`${style.true} ${isCorrectVariant && style.active}`}
            >
              <h5>transport</h5>
              <img width={17} src="/icons/mic.svg" alt="mic" />
            </div>

            <div className={style.transcription}>
              <p>транскрипция</p>
              <h4>трэнспорт</h4>
            </div>

            <div className={style.example}>
              <h5 className={style.title}>пример</h5>

              <div className={style.example_1}>
                <p>
                  public <span>transport</span> in this city is very efficient
                </p>
                <img width={18} src="/icons/mic.svg" alt="mic" />
              </div>

              <div className={style.example_2}>
                общественный <span>транспорт</span> в этом городе очень
                эффективен
              </div>
            </div>
          </div>
        </InfoModal>

        <StatBar />
      </main>
    </>
  );
};

export default Travel;

import { useNavigate } from "react-router-dom";
import Appbar from "../../components/Appbar";
import Button from "../../components/Button";
import style from "./style.module.scss";
import InfoModal from "../../components/InfoModal";
import { useState } from "react";

const cards = [
  {
    score: 50,
    stars: ["/icons/star.svg", "/icons/star.svg", "/icons/star.svg"],
    text: "<50% правильных",
  },
  {
    score: 500,
    stars: ["/icons/star3.svg", "/icons/star.svg", "/icons/star.svg"],
    text: ">=50% правильных",
  },
  {
    score: 750,
    stars: ["/icons/star3.svg", "/icons/star3.svg", "/icons/star.svg"],
    text: ">=70% правильных",
  },
  {
    score: 250,
    stars: ["/icons/star2.svg", "/icons/star.svg", "/icons/star.svg"],
    text: ">=60% правильных",
  },
  {
    score: 650,
    stars: ["/icons/star3.svg", "/icons/star2.svg", "/icons/star.svg"],
    text: ">=80% правильных",
  },
  {
    score: 850,
    stars: ["/icons/star3.svg", "/icons/star3.svg", "/icons/star2.svg"],
    text: ">=90% правильных",
  },
];

const Price = () => {
  const premiumStatus = localStorage.getItem("Pstatus");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const onReplay = () => {
    if (premiumStatus !== "active") {
      toggleModal();
    } else {
      navigate(-1);
    }
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <Appbar />

      <main className={`${style.main} marginT marginB`}>
        <h1 className={style.title}>награда</h1>

        <div className={style.rating}>
          <div className={style.cards}>
            {cards.map((card, id) => (
              <div key={id} className={style.card}>
                <div className={style.coin}>
                  <img src="/icons/coin.svg" alt="coin" width={23} /> х
                  {card.score}
                </div>

                <div className={style.stars}>
                  {card.stars.map((star, id) => (
                    <img width={22} key={id} src={star} alt="star" />
                  ))}
                </div>

                <p>{card.text}</p>
              </div>
            ))}
          </div>

          <div className={style.best}>
            <img
              className={style.coin}
              src="/icons/coin.svg"
              alt="coin"
              width={28}
            />

            <p>х1000</p>

            <div className={style.stars}>
              <img width={22} src="/icons/star3.svg" alt="star" />
              <img width={22} src="/icons/star3.svg" alt="star" />
              <img width={22} src="/icons/star3.svg" alt="star" />
            </div>

            <h6>100% правильных</h6>
          </div>
        </div>

        <button className={style.getBtn}>
          <img width={45} src="/icons/coin.svg" alt="coin" /> получить
        </button>

        <div className={style.result}>
          <h4>ваш результат</h4>

          <div className={style.stars}>
            <img width={52} src="/icons/star2.svg" alt="star" />
            <img width={52} src="/icons/star.svg" alt="star" />
            <img width={52} src="/icons/star.svg" alt="star" />
          </div>

          <p>
            15<span>/100</span>
          </p>
        </div>

        <Button onClick={onReplay} noImg>
          попробовать еще
        </Button>
      </main>

      <InfoModal open={modal} onClose={toggleModal}>
        <div className={style.premium_required}>
          <p>
            для повторного <br /> прохождения <br />
            вам необходима
          </p>

          <div className={style.premium}>
            <img width={22} src="/icons/corona.svg" alt="premium" /> премиум
            подписка
          </div>

          <Button onClick={() => navigate("/premium")} isGolden>
            активировать
          </Button>
        </div>
      </InfoModal>
    </>
  );
};

export default Price;

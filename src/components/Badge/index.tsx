import style from "./style.module.scss";

interface BadgeType {
  type: "premium" | "rate" | "coin" | "task" | "question" | "free" | "disabled";
  coin?: number;
  question?: number;
  rate?: number;
  stars?: string[];
}

const Badge = ({ type, coin, question, rate, stars }: BadgeType) => {
  switch (type) {
    case "coin":
      return (
        <div className={style.coins}>
          <img src="/icons/coin.svg" width={14} alt="coin" /> {coin}
        </div>
      );
    case "task":
      return <div className={style.task}>задание</div>;
    case "free":
      return <div className={style.free}>бесплатно</div>;
    case "premium":
      return (
        <div className={style.premium}>
          <img width={11} src="/icons/corona.svg" alt="premium" /> премиум
        </div>
      );
    case "question":
      return (
        <div className={style.question}>
          <img src="/icons/question.svg" width={14} alt="question" />
          {question}
        </div>
      );
    case "rate":
      return (
        <div className={style.rate}>
          <div className={style.stars}>
            {stars?.map((star, id) => (
              <img key={id} width={15} src={`/icons/${star}.svg`} alt="star" />
            ))}
          </div>

          <div className={style.score}>
            <img src="/icons/question.svg" width={14} alt="question" />
            <p>
              {rate}/<span>100</span>
            </p>
          </div>
        </div>
      );
    case "disabled":
      return <div className={style.disabled}>недоступно</div>;
    default:
      return <></>;
  }
};

export default Badge;

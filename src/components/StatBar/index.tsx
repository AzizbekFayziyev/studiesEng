import style from "./style.module.scss";

const StatBar = () => {
  return (
    <div className={style.statistic}>
      <h5>Статистика за все время</h5>

      <div className={style.info}>
        <div className={style.info_true}>
          <p>Правильно</p>
          <span>125</span>
        </div>
        <div className={style.info_false}>
          <p>Неправильно</p>
          <span>23</span>
        </div>
      </div>
    </div>
  );
};

export default StatBar;

import Appbar from "../../components/Appbar";
import BottomBar from "../../components/Bottombar";
import Button from "../../components/Button";
import style from "./style.module.scss";

const Telegram = () => {
  return (
    <>
      <Appbar />

      <main className={`${style.main} marginT marginB`}>
        <h1 className={style.title}>
          присоединяйтесь <br /> к нашему телеграм <br /> каналу
        </h1>

        <button className={style.tgBtn}>
          подписаться <img width={19} src="/icons/tg.svg" alt="telegram" />
        </button>

        <div className={style.coin}>
          <img width={37} src="/icons/coin.svg" alt="coin" /> +100
        </div>

        <Button>проверить</Button>
      </main>

      <BottomBar />

      <img className={style.background} src="/images/telegramBg.png" alt="bg" />
    </>
  );
};

export default Telegram;

import { useNavigate } from "react-router-dom";
import Appbar from "../../../../components/Appbar";
import Button from "../../../../components/Button";
import StatBar from "../../../../components/StatBar";
import style from "./style.module.scss";

const Noword = () => {
  const navigate = useNavigate();

  return (
    <>
      <Appbar />

      <main className={`${style.main} marginT marginB`}>
        <img width={79} src="/images/noword.png" alt="no words" />

        <p className={style.infoText}>а где?</p>

        <h1 className={style.tite}>вопросов пока нет</h1>
        <h4 className={style.subtitle}>но они скоро появятся!</h4>

        <StatBar />

        <Button onClick={() => navigate(-1)} isReverse>назад</Button>
      </main>
    </>
  );
};

export default Noword;

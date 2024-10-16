import { useNavigate } from "react-router-dom";
import Appbar from "../../../components/Appbar";
import Button from "../../../components/Button";
import style from "./style.module.scss";

const Nomode = () => {
  const navigate = useNavigate(); // Initialize the hook

  return (
    <>
      <Appbar />

      <main className={`${style.main} marginB`}>
        <img width={90} src="/images/nomode.png" alt="nomode" />
        <p className={style.subtitle}>сорян :(</p>

        <h1 className={style.title}>
          режим скоро <br />
          откроется!
        </h1>

        <Button onClick={() => navigate(-1)} isReverse>назад</Button>
      </main>
    </>
  );
};

export default Nomode;

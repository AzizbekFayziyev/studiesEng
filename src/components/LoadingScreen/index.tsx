import { useEffect } from "react";
import style from "./style.module.scss";

const LoadingScreen = () => {
  useEffect(() => {
    const screen = document.querySelector("#loadingScreen");

    const timeoutid = setTimeout(() => {
      screen?.classList.add("hide");
    }, 3500);

    return () => clearInterval(timeoutid);
  }, []);

  return (
    <div id="loadingScreen" className={style.screen}>
      <main className={style.main}>
        <img width={127} src="/school.svg" alt="logo" />

        <h1 className={`${style.title} title`}>STUDIES ENG</h1>

        <h4 className={style.subtitle}>
          обучение <br /> английскому
        </h4>

        <div className={style.loading}>
          <p className={style.loadingTitle}>Подождите ...</p>
          <div className={style.loadingBar}>
            <div />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoadingScreen;

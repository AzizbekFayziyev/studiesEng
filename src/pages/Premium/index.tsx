import { useEffect, useState } from "react";
import Appbar from "../../components/Appbar";
import Button from "../../components/Button";
import style from "./style.module.scss";
import Modal from "../../components/Modal";
import Toast from "../../components/Toast";
import BottomBar from "../../components/Bottombar";

const Premium = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [status, setStatus] = useState<"default" | "active" | "error">(
    "active"
  );

  const [isModalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("успешно");
  const [toastType, setToastType] = useState<"error" | "success" | "default">(
    "default"
  );

  const onChangeStatus = () => {
    if (isAgree) {
      setStatus("active");
      localStorage.setItem("Pstatus", "active");

      setToastText("успешно");
      setToastType("success");
    } else {
      setStatus("error");
      localStorage.setItem("Pstatus", "error");

      setToastText("вы не принимали условия публичной оферты!");
      setToastType("error");
    }

    setShowToast(true);
  };

  const cancelPremium = () => {
    setStatus("default");
    setIsAgree(false);

    localStorage.setItem("Pstatus", "default");

    setModalOpen(false);
    setShowToast(true);
    setToastText("успешно");
    setToastType("success");
  };

  const cancelAction = () => {
    setModalOpen(false);
    setShowToast(true);
    setToastText("отмена");
    setToastType("error");
  };

  useEffect(() => {
    const savedStatus: any = localStorage.getItem("Pstatus");

    if (savedStatus) {
      setStatus(savedStatus);
    }
  }, []);

  return (
    <>
      <Appbar />

      <main
        className={`${style.main} ${
          status == "active" && style.active
        } marginT marginB`}
      >
        <img
          width={75}
          className={`${style.main_image} ${status == "error" && style.error}`}
          src={`/images/${
            status !== "default" ? "premium-active" : "premium"
          }.png`}
          alt="premium"
        />

        <h1 className={style.title}>
          {status !== "default" ? (
            "премиум"
          ) : (
            <>
              Преимущества <br /> премиум аккаунта
            </>
          )}
        </h1>

        {status == "error" && (
          <h4 className={style.error_text}>Приостановлен</h4>
        )}

        <div className={style.advantages}>
          <div className={style.card}>
            <img width={29} src="/icons/premium/1.svg" alt="energy" />
            <p>Больше энергии</p>
          </div>

          <div className={style.card}>
            <img width={27} src="/icons/premium/2.svg" alt="vip" />
            <p>VIP рейтинг</p>
          </div>

          <div className={style.card}>
            <img width={17} src="/icons/premium/3.svg" alt="member" />
            <p>Участие в розыгрышах</p>
          </div>

          <div className={style.card}>
            <img width={23} src="/icons/premium/4.svg" alt="access" />
            <p>Доступ к особым викторинам</p>
          </div>
        </div>

        {status == "default" ? (
          <div className={style.get_btn}>
            <Button onClick={onChangeStatus} noImg>
              <p>
                Получить <br /> премиум <br /> всего за
              </p>
              <span>599₽</span>
            </Button>
          </div>
        ) : (
          <div
            className={`${style.vip_actived} ${
              status == "error" && style.error
            }`}
          >
            <span>VIP</span>
          </div>
        )}

        <h5
          className={`${style.info_text} ${
            status !== "default" && style.large
          }`}
        >
          {status == "default" && (
            <>
              При активации премиум подписки <br />
              ежемесячная плата составляет 599₽
            </>
          )}

          {status == "active"
            ? "Подписка активна до 28.08.2024"
            : "неуспешная оплата"}
        </h5>

        {status == "default" ? (
          <>
            <div className={style.agree}>
              <div className={style.checkbox}>
                <label
                  onClick={() => setIsAgree((prev) => !prev)}
                  className={isAgree ? style.active : ""}
                  htmlFor="agree"
                ></label>
                <input type="checkbox" name="agree" id="agree" />
              </div>

              <p className={style.text}>
                Я даю согласие на регулярные списания, на
                <span> обработку персональных данных</span> и принимаю условия
                <span> публичной оферты</span>
              </p>
            </div>
          </>
        ) : (
          <div className={style.cancel_btn}>
            <Button onClick={() => setModalOpen(true)} isSmall noImg>
              <img width={14} src="/icons/x.svg" alt="x" /> отменить подписку
            </Button>
          </div>
        )}
      </main>

      {/* Modal example */}
      <Modal
        text="вы хотите отменить подписку"
        isOpen={isModalOpen}
        confirm={cancelPremium}
        cancel={cancelAction}
      />

      {/* Toas example */}
      {showToast && (
        <Toast
          message={toastText}
          duration={2000}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}

      <BottomBar />
    </>
  );
};

export default Premium;

import Appbar from "../../components/Appbar";
import BottomBar from "../../components/Bottombar";
import List from "../../components/List";
import { listsData } from "../../data";
import style from "./style.module.scss";

const Home = () => {
  return (
    <>
      <Appbar />

      <main className={`${style.main} marginB marginT`}>
        <h2 className="title">режим</h2>

        <p className={style.subtitle}>Выберите категорию теста</p>

        <ul className={style.lists}>
          {listsData.map((list, id) => (
            <List
              key={id}
              title={list.title}
              subtitle={list.subtitle}
              imgSrc={list.img}
              isActive={list.active}
              isDisabled={list.disabled}
              link={list.link}
            />
          ))}
        </ul>
      </main>

      <BottomBar />
    </>
  );
};

export default Home;

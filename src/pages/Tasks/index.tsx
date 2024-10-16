import Appbar from "../../components/Appbar";
import BottomBar from "../../components/Bottombar";
import List from "../../components/List";
import { TasksData } from "../../data";
import style from "./style.module.scss";

const Tasks = () => {
  return (
    <>
      <Appbar />

      <main className={`${style.main} marginT marginB`}>
        <img width={100} src="/icons/coin.svg" alt="coin" />
        <h1 className={style.title}>получите больше монет</h1>
        <h4 className={style.subtitle}>выполните задания</h4>

        <ul className={style.lists}>
          {TasksData.map((task, id) => (
            <List
              key={id}
              link={task.link}
              title={task.title}
              imgSrc={task.img}
              isActive={task.active}
              isDisabled={task.disabled}
              isSmall={task.isSmall}
              isCompleted={task.isCompleted}
            />
          ))}
        </ul>
      </main>

      <BottomBar />
    </>
  );
};

export default Tasks;

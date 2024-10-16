import { ListsType, UserType, WinnerType } from "./types";

export const listsData: ListsType[] = [
  {
    title: "призовой режим",
    link: "/mode/reward",
    subtitle: "Рус./Англ.",
    img: "/icons/modes/star.svg",
    active: true,
  },
  {
    title: "Слова",
    link: "/mode/word-ru-en",
    subtitle: "Рус./Англ.",
    img: "/icons/modes/word.svg",
  },
  {
    title: "Слова",
    link: "/mode/word-en-ru",
    subtitle: "Англ./Рус.",
    img: "/icons/modes/word2.svg",
  },
  {
    link: "/mode/grammar",
    title: "Грамматика",
    img: "/icons/modes/abc.svg",
  },
  {
    title: "Фразы",
    link: "/mode/talk-ru-en",
    subtitle: "Рус./Англ.",
    img: "/icons/modes/chat.svg",
    disabled: true,
  },
  {
    title: "Фразы",
    link: "/mode/talk-en-ru",
    subtitle: "Англ./Рус.",
    img: "/icons/modes/chat.svg",
  },
];

export const TasksData: ListsType[] = [
  {
    title: "Ежемесячный розыгрыш",
    img: "/icons/tasks/1.svg",
    active: true,
    link: "/raffle",
  },
  {
    title: "Ежедневный вход",
    img: "/icons/tasks/2.svg",
    link: "/daily-bonus",
  },
  {
    title: "присоединяйтесь к нашему телеграм каналу",
    img: "/icons/tasks/3.svg",
    isSmall: true,
    link: "/telegram",
  },
  {
    title: "пригласи 3х друзей",
    img: "/icons/tasks/4.svg",
    link: "/friends",
    isCompleted: true,
  },
];

export const RiffleTasks: ListsType[] = [
  {
    title: "активный месячный премиум",
    img: "/icons/corona.svg",
    link: "/premium",
  },
  {
    title: "пройти призовую викторину",
    img: "/icons/tasks/2.svg",
    link: "/",
  },
  {
    title: "присоединяйтесь к нашему телеграм каналу",
    img: "/icons/tasks/3.svg",
    isSmall: true,
    link: "/telegram",
  },
  {
    title: "пригласи 3х друзей",
    img: "/icons/tasks/4.svg",
    link: "/friends",
  },
];

export const usersData: UserType[] = [
  {
    name: "tarzan",
    avatar: "/images/user.png",
    score: 2350,
  },
  {
    name: "nugget",
    avatar: "/images/user.png",
    score: 2250,
  },
  {
    name: "techie",
    avatar: "/images/user.png",
    score: 2190,
  },
  {
    name: "teacup",
    avatar: "/images/user.png",
    score: 2090,
  },
  {
    name: "baloo",
    avatar: "/images/user.png",
    score: 2067,
  },
  {
    name: "sneezy",
    avatar: "/images/user.png",
    score: 2020,
  },
  {
    name: "lappy",
    avatar: "/images/user.png",
    score: 2001,
  },
  {
    name: "puzzle",
    avatar: "/images/user.png",
    score: 1987,
  },
  {
    name: "love pie",
    avatar: "/images/user.png",
    score: 1960,
  },
  {
    name: "tarzan",
    avatar: "/images/user.png",
    score: 1900,
  },
];

export const winnersData: WinnerType[] = [
  {
    name: "tarzan",
    avatar: "/images/user.png",
    prize: "Iphone 15 pro",
  },
  {
    name: "nugget",
    avatar: "/images/user.png",
    prize: "airpods 3",
  },
  {
    name: "techie",
    avatar: "/images/user.png",
    prize: "яндекс.станция",
  },
  {
    name: "teacup",
    avatar: "/images/user.png",
    prize: "Я.станция мини",
  },
];

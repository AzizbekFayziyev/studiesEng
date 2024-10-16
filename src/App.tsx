import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Leaderboard from "./pages/Leaderboard";
import Friends from "./pages/Friends";
import Telegram from "./pages/Telegram";
import Nomode from "./pages/Modes/Nomode";
import WordRuEn from "./pages/Modes/Word";
import Travel from "./pages/Modes/Word/Travel";
import Noword from "./pages/Modes/Word/Noword";
import Price from "./pages/Price";
import Raffle from "./pages/Raffle";
import Premium from "./pages/Premium";
import LoadingScreen from "./components/LoadingScreen";
import DailyBonus from "./pages/DailyBonus";

// Pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/daily-bonus",
    element: <DailyBonus />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/telegram",
    element: <Telegram />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/mode/word-ru-en",
    element: <WordRuEn />,
  },
  {
    path: "/mode/word-ru-en/travel",
    element: <Travel />,
  },
  {
    path: "/mode/*",
    element: <Nomode />,
  },
  {
    path: "/mode/word-ru-en/*",
    element: <Noword />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/raffle",
    element: <Raffle />,
  },
  {
    path: "/premium",
    element: <Premium />,
  },
]);

const App = () => {
  return (
    <>
      {/* Pages rendering */}
      <div className="container">
        <RouterProvider router={router} />
      </div>
      {/* Loading scren */}
      <LoadingScreen />
    </>
  );
};

export default App;

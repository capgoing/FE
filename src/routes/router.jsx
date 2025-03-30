import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";

import HomePage from "../pages/home/home";
import ListPage from "../pages/list/list";
import GamePage from "../pages/game/game";
import QnaPage from "../pages/game/qna";
import ResultPage from "../pages/game/result";

const router = createBrowserRouter([
  {
    path: "/", // 홈은 Layout 없이 직접 렌더링
    element: <HomePage />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "list",
        element: <ListPage />,
      },
      {
        path: "game",
        children: [
          {
            index: "true",
            element: <GamePage />,
          },
          {
            path: "qna",
            element: <QnaPage />
          },
          {
            path: "result",
            element: <ResultPage />
          }
        ]
      }
    ],
  },
]);

export default router;

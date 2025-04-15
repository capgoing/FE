import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";

import HomePage from "../pages/home/home";
import ListPage from "../pages/list/list";

import GraphPage from "../pages/graph/graph";

import QuizPage from "../pages/quiz/quiz";
import QnaPage from "../pages/quiz/qna";
import ResultPage from "../pages/quiz/result";

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
        path: "graph/:id",
        element: <GraphPage />,
      },
      {
        path: "quiz/:id",
        children: [
          {
            index: "true",
            element: <QuizPage />,
          },
          {
            path: ":mode",
            element: <QnaPage />,
          },
          {
            path: "result",
            element: <ResultPage />,
          },
        ],
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";

import HomePage from "../pages/home/home";
import ListPage from "../pages/list/list";
import GraphPage from "../pages/graph/graph";

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
        path: "/list",
        element: <ListPage />
      },
      {
        path: "/graph/:id",
        element: <GraphPage />
      }
    ]
}]);

export default router;

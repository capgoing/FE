import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';

import HomePage from "../pages/home/home";
import ListPage from "../pages/list/list";
import GraphPage from "../pages/graph/graph";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
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

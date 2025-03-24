import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';

import HomePage from "../pages/home/home";
import ListPage from "../pages/list/list";

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
      }
    ]
}]);

export default router;

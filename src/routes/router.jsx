import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';

import HomePage from "../pages/Home/home";
import ListPage from "../pages/List/list";

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

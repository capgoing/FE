import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';

import HomePage from "../pages/Home/home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
    ]
}]);

export default router;

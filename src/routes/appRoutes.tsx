import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from 'layouts';
import { Home } from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;

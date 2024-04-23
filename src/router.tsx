import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";

import App from './App.tsx'
import NotFound from './pages/NotFound.tsx';
import Catalog from './pages/Catalog.tsx';
import Show from './pages/Show.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Catalog />
      },
      {
        path: "/shows",
        element: <Navigate to="/" />
      },
      {
        path: "/shows/:name",
        element: <Show />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

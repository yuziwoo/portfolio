import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { ROUTE_PATH } from '../shared/constants/path';
import * as Lazy from './lazy';

import App from '../App';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainPageSkeleton from '../pages/MainPage/MainPageSkeleton';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.root,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ROUTE_PATH.root,
        element: (
          <Suspense fallback={<MainPageSkeleton />}>
            <Lazy.LazyMainPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;

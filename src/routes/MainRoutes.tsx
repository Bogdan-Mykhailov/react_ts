import {
  Navigate,
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';
import { FC } from 'react';

import { PATH } from './types/Path';
import { RoutePath } from './RoutesPath';
import {
  UsersPage,
  SettingsPage,
  ProductsPage,
  GroupsPage,
  HomePage,
  NotFoundPage,
} from '../pages';

export const routeConfig: Record<PATH, RouteProps> = {
  [PATH.Main]: {
    path: RoutePath.main,
    element: <HomePage />,
  },

  [PATH.Home]: {
    path: RoutePath.home,
    element: <Navigate to={PATH.Home} replace />,
  },

  [PATH.Users]: {
    path: RoutePath.users,
    element: <UsersPage />,
  },

  [PATH.Groups]: {
    path: RoutePath.groups,
    element: <GroupsPage />,
  },

  [PATH.Products]: {
    path: RoutePath.products,
    element: <ProductsPage />,
  },

  [PATH.Settings]: {
    path: RoutePath.settings,
    element: <SettingsPage />,
  },

  [PATH.Error]: {
    path: RoutePath.error,
    element: <NotFoundPage />,
  },
};

export const MainRoutes: FC = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route path={path} key={path} element={element} />
    ))}
  </Routes>
);

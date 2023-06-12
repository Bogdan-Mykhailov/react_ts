import { PATH } from './types/Path';

export const RoutePath: Record<PATH, string> = {
  [PATH.Main]: '/',
  [PATH.Home]: '/home',
  [PATH.Groups]: '/groups',
  [PATH.Users]: '/users',
  [PATH.Products]: '/products',
  [PATH.Settings]: '/settings',
  [PATH.Error]: '*',
};

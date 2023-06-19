import React from 'react';
import './App.scss';

import { MainRoutes } from './routes';
import { TopMenu } from './components';

export const App = () => {
  return (
    <div>
      <TopMenu />
      <MainRoutes />
    </div>
  );
};

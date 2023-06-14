import React from 'react';
import './App.scss';
import { Header } from './components';
import { MainRoutes } from './routes';

export const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
    </div>
  );
};

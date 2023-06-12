import React from 'react';
import './App.scss';
import { MainRoutes } from './routes/MainRoutes';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
    </div>
  );
};

import React from 'react';
import './Header.scss';
import { Logo } from '../Logo';
import { Input } from '../Input';
import * as icons from '../../assets';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__search-content search-content">
        <Logo />

        <Input
          placeholder="Пошук"
          type="text"
          className="search-content__input"
        />
      </div>
      <div className="header__stats stats">
        <div className="stats__date-wrapper">
          <span className="stats__title">Сьогодні</span>
          <span className="stats__date">12 бер, 2017</span>
        </div>
        <div className="stats__time-wrapper">
          <img
            className="stats__icon"
            src={icons.clock}
            alt="Clock icon"
          />
          <span className="stats__time">17:20</span>
        </div>
      </div>
    </header>
  );
};

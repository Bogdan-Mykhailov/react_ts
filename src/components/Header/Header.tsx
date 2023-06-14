import React from 'react';
import './Header.scss';
import { Logo } from '../Logo';
import { Input } from '../Input';
import * as icons from '../../assets/icons';
import { Clock } from '../Clock';
import { CurrentDate } from '../CurrentDate';
import { ActiveSessions } from '../ActiveSessions';

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

          <CurrentDate className="stats__date" />
        </div>

        <div className="stats__activity">
          <ActiveSessions />

          <div className="stats__time-wrapper">
            <img
              className="stats__icon"
              src={icons.clock}
              alt="Clock icon"
            />

            <Clock className="stats__time" />
          </div>
        </div>
      </div>
    </header>
  );
};

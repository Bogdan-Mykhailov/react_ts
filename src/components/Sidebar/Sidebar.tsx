import React from 'react';
import { CustomNavLink } from '../CustomNavLink/CustomNavLink';
import { RoutePath } from '../../routes/RoutesPath';
import './Sidebar.scss';
import * as images from '../../assets';
import * as icons from '../../assets/icons';
import { Button } from '../Button';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__user-info user-info">
        <img
          className="user-info__avatar"
          src={images.rick}
          alt="User Avatar"
        />

        <Button
          buttonStyles="user-info__button button"
          iconStyles="button__icon"
          icon={icons.gear}
        />
      </div>

      <menu className="sidebar__menu">
        <li className="sidebar__menu-item">
          <CustomNavLink to={RoutePath.main} title="Надходження" />
        </li>
        <li className="sidebar__menu-item">
          <CustomNavLink to={RoutePath.groups} title="Групи" />
        </li>
        <li className="sidebar__menu-item">
          <CustomNavLink to={RoutePath.products} title="Продукти" />
        </li>
        <li className="sidebar__menu-item">
          <CustomNavLink to={RoutePath.users} title="Користувачі" />
        </li>
        <li className="sidebar__menu-item">
          <CustomNavLink to={RoutePath.settings} title="Налаштування" />
        </li>
      </menu>
    </div>
  );
};

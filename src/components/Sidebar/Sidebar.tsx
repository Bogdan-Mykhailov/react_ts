import React from 'react';
import { CustomNavLink } from '../CustomNavLink/CustomNavLink';
import { RoutePath } from '../../routes/RoutesPath';
import './Sidebar.scss';
import * as images from '../../assets';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={images.rick} alt="User Avatar" />
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

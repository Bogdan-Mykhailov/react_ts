import React from 'react';
import './NavigationMenu.scss';
import { CustomNavLink } from '../CustomNavLink';
import { RoutePath } from '../../routes';

export const NavigationMenu = () => {
  return (
    <menu className="menu">
      <li className="menu__menu-item">
        <CustomNavLink to={RoutePath.main} title="Головна" />
      </li>
      <li className="menu__menu-item">
        <CustomNavLink to={RoutePath.groups} title="Групи" />
      </li>
      <li className="menu__menu-item">
        <CustomNavLink to={RoutePath.products} title="Продукти" />
      </li>
      <li className="menu__menu-item">
        <CustomNavLink to={RoutePath.users} title="Користувачі" />
      </li>
      <li className="menu__menu-item">
        <CustomNavLink to={RoutePath.settings} title="Налаштування" />
      </li>
    </menu>
  );
};

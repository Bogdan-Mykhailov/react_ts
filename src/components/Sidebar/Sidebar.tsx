import React from 'react';
import './Sidebar.scss';
import * as images from '../../assets';
import * as icons from '../../assets/icons';
import { Button } from '../Button';
import { NavigationMenu } from '../NavigationMenu';

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

      <NavigationMenu />
    </div>
  );
};

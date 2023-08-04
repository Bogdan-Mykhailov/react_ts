import React from 'react';
import './Sidebar.scss';
import { useNavigate } from 'react-router-dom';
import * as images from '../../assets';
import * as icons from '../../assets/icons';
import { Button } from '../Button';
import { NavigationMenu } from '../NavigationMenu';
import { RoutePath } from '../../routes';

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleRedirectClick = () => {
    navigate(RoutePath.users);
  };

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
          onClick={handleRedirectClick}
        />
      </div>

      <NavigationMenu />
    </div>
  );
};

import React from 'react';
import './Logo.scss';
import * as images from '../../assets';

export const Logo = () => {
  return (
    <div className="content">
      <img
        className="content__logo"
        src={images.logo}
        alt="Main logo shield with user icon inside"
      />
      <span className="content__title">Inventory</span>
    </div>
  );
};

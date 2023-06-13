import { FC } from 'react';
import './Logo.scss';
import { useNavigate } from 'react-router-dom';
import * as images from '../../assets';
import { RoutePath } from '../../routes/RoutesPath';

export const Logo: FC = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate(RoutePath.main);
  };

  return (
    <div
      className="content"
      onClick={handleHomePageClick}
    >
      <img
        className="content__logo"
        src={images.logo}
        alt="Main logo shield with user icon inside"
      />
      <span className="content__title">Inventory</span>
    </div>
  );
};

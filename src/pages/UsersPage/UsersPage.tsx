import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Sidebar } from '../../components';
import './UsersPage.scss';
import * as images from '../../assets';
import * as icons from '../../assets/icons';

export const UsersPage = () => {
  return (
    <div className="user">
      <Sidebar />

      <Container>
        <div className="user__content">
          <img className="user__content-avatar" src={images.rick} alt="Rick" />

          <h2 className="user__content-name">Bogdan Mykhailov</h2>

          <div className="user__content-links">
            <Link to="tel:+380930179629">
              <img
                src={icons.phone}
                alt="phone"
                className="card__item-img"
              />
            </Link>

            <Link
              to="https://github.com/Bogdan-Mykhailov"
              className="card__item"
              target="_blank"
            >
              <img
                src={icons.github}
                alt="github"
                className="card__item-img"
              />
            </Link>

            <Link
              to="https://www.linkedin.com/in/mykhailov-bogdan/"
              target="_blank"
            >
              <img
                src={icons.linkedin}
                alt="linkedin"
                className="card__item-img"
              />
            </Link>

            <Link to="mailto:bogdan.mykhailov.work@gmail.com" target="_blank">
              <img
                src={icons.email}
                alt="email"
                className="card__item-img"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

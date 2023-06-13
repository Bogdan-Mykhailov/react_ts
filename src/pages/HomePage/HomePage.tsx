import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import './HomePage.scss';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import { Button } from '../../components/Button';
import * as icons from '../../assets/icons';

export const HomePage = () => {
  return (
    <div className="home">
      <Sidebar />

      <Container>
        <div className="home__page-info">
          <Button
            buttonStyles="home-button"
            iconStyles="home-button__icon"
            icon={icons.plus}
          />
          <PageTitle title="Надходження" quantity={25} />
        </div>
      </Container>
    </div>
  );
};

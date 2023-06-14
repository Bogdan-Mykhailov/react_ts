import React from 'react';
import * as icons from '../../assets/icons';
import './GroupsPage.scss';
import {
  Button,
  Container,
  PageTitle,
  Sidebar,
} from '../../components';

export const GroupsPage = () => {
  return (
    <div className="groups">
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

import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Container } from '../../components/Container';
import { PageTitle } from '../../components/PageTitle';
import * as icons from '../../assets/icons';
import { Button } from '../../components/Button';
import './GroupsPage.scss';

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

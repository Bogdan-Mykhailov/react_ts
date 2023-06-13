import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import './ProductsPage.scss';
import { PageTitle } from '../../components/PageTitle';
import { Container } from '../../components/Container';

export const ProductsPage = () => {
  return (
    <div className="products">
      <Sidebar />

      <Container>
        <PageTitle title="Продукти" quantity={25} />
      </Container>
    </div>
  );
};

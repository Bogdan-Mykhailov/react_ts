import React from 'react';
import './ProductsPage.scss';
import {
  Container,
  PageTitle,
  Sidebar,
} from '../../components';

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

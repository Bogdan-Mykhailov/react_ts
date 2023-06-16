import React from 'react';
import * as icons from '../../assets/icons';
import './GroupsPage.scss';
import {
  Button, Container, PageTitle, Sidebar,
} from '../../components';
import { AddProductList } from '../../components/AddProductList';
import { useAppSelector } from '../../services';
import { OrderList } from '../../components/OrderList';
import { getOrdersWithProducts } from '../../utils';
import { useGetOrder } from '../../hooks/useGetOrder';
import { OrderWithProducts } from '../../types';

export const GroupsPage = () => {
  const orders = useAppSelector((state) => state.orders.orders);
  const products = useAppSelector((state) => state.products.products);
  const selected = useAppSelector((state) => state.selectedOrder.selected);
  const ordersWithProducts = getOrdersWithProducts(orders, products);
  const { currentOrder } = useGetOrder<OrderWithProducts>({
    elements: ordersWithProducts,
    selected,
  });

  const ordersQuantity = orders.length;

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

          <PageTitle title="Надходження" quantity={ordersQuantity} />
        </div>

        <div className="home__page-orders-content">
          <OrderList orders={ordersWithProducts} />
          {selected && <AddProductList currentOrder={currentOrder} />}
        </div>
      </Container>
    </div>
  );
};

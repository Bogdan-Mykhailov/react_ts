import React from 'react';
import './HomePage.scss';
import * as icons from '../../assets/icons';
import {
  Button,
  Container,
  PageTitle,
  Sidebar,
} from '../../components';
import {
  addOrder,
  useAppDispatch,
  useAppSelector,
} from '../../services';
import { getOrdersWithProducts } from '../../utils';
import { OrderList } from '../../components/OrderList';

export const HomePage = () => {
  const orders = useAppSelector((state) => state.orders.orders);
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  const ordersWithProducts = getOrdersWithProducts(orders, products);

  const handleAddOrderClick = () => {
    const newOrder = {
      id: orders.length + 1,
      title: `Нове надходження ${orders.length + 1}`,
      date: new Date().toISOString(),
      description: 'Додайте детальний опис надходжень',
    };

    dispatch(addOrder(newOrder));
  };

  return (
    <div className="home">
      <Sidebar />

      <Container>
        <div className="home__page-info">
          <Button
            onClick={handleAddOrderClick}
            buttonStyles="home-button"
            iconStyles="home-button__icon"
            icon={icons.plus}
          />
          <PageTitle title="Надходження" quantity={orders.length} />
        </div>

        <OrderList orders={ordersWithProducts} />
      </Container>
    </div>
  );
};

import React from 'react';
import './HomePage.scss';
import { Sidebar } from '../../components';
// import * as icons from '../../assets/icons';
// import {
//   Button, Container, PageTitle, Sidebar,
// } from '../../components';
// import { addOrder, useAppDispatch, useAppSelector } from '../../services';
// import { getOrdersWithProducts } from '../../utils';
// import { OrderList } from '../../components/OrderList';
// import { AddProductList } from '../../components/AddProductList';
// import { useGetOrder } from '../../hooks/useGetOrder';
// import { OrderWithProducts } from '../../types';
// import { formattedDate } from '../../utils/dateFormatter';

export const HomePage = () => {
  // const selected = useAppSelector((state) => state.selectedOrder.selected);
  // const orders = useAppSelector((state) => state.orders.orders);
  // const products = useAppSelector((state) => state.products.products);
  // const dispatch = useAppDispatch();
  //
  // const ordersWithProducts = getOrdersWithProducts(orders, products);
  // const { currentOrder } = useGetOrder<OrderWithProducts>({
  //   elements: ordersWithProducts,
  //   selected,
  // });
  //
  // const ordersQuantity = orders.length;
  //
  // const handleAddOrderClick = () => {
  //   const newOrder = {
  //     id: orders.length + 1,
  //     title: `Нове надходження ${ordersQuantity + 1}`,
  //     date: formattedDate(),
  //     description: 'Додайте детальний опис надходжень',
  //   };
  //
  //   dispatch(addOrder(newOrder));
  // };

  return (
    <div className="home">
      <Sidebar />

      {/* <Container> */}
      {/*  <div className="home__page-info"> */}
      {/*    <Button */}
      {/*      onClick={handleAddOrderClick} */}
      {/*      buttonStyles="home-button" */}
      {/*      iconStyles="home-button__icon" */}
      {/*      icon={icons.plus} */}
      {/*    /> */}
      {/*    <PageTitle title="Надходження" quantity={orders.length} /> */}
      {/*  </div> */}

      {/*  <div className="home__page-orders-content"> */}
      {/*    <OrderList orders={ordersWithProducts} /> */}
      {/*    {selected && <AddProductList currentOrder={currentOrder} />} */}
      {/*  </div> */}
      {/* </Container> */}
    </div>
  );
};

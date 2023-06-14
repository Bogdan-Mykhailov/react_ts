import { Order, OrderWithProducts, Product } from '../types';

export const getTwoDigits = (data: number) => (
  data < 10
    ? `0${data}`
    : data
);

export const getOrdersWithProducts = (
  orders: Order[],
  products: Product[],
): OrderWithProducts[] => {
  return orders.map((order) => ({
    ...order,
    products: products.filter(
      (product) => (
        product.order === order.id
      ),
    ),
  }));
};

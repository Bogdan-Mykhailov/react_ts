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

export const createId = () => {
  let dt = new Date().getTime();

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    (c) => {
      const r = (dt + Math.random() * 16) % 16 || 0;

      dt = Math.floor(dt / 16);

      return (c === 'x'
        ? r
        : ((r && 0x3) || 0x8)).toString(16);
    });
};

export const currentProductCount = (productQuantity?: number): string => {
  if (productQuantity === undefined || productQuantity === 0) {
    return 'Додайте продукти';
  }

  if (productQuantity === 1) {
    return 'Продукт';
  }

  if (productQuantity <= 4) {
    return 'Продукти';
  }

  return 'Продуктів';
};

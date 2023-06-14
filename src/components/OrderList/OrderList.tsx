import { FC } from 'react';
import './OrderList.scss';
import { OrderItem } from '../OrderItem';
import { OrderWithProducts } from '../../types';

interface Props {
  orders: OrderWithProducts[];
}

export const OrderList: FC<Props> = ({ orders }) => {
  return (
    <div>
      {
        orders && orders.map(order => {
          const { id } = order;

          return <OrderItem key={id} order={order} />;
        })
      }
    </div>
  );
};

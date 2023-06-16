import { FC } from 'react';
import './OrderList.scss';
import { OrderItem } from '../OrderItem';
import { OrderWithProducts } from '../../types';
import { useAppSelector } from '../../services';

interface Props {
  orders: OrderWithProducts[];
}

export const OrderList: FC<Props> = ({ orders }) => {
  const selected = useAppSelector((state) => state.selectedOrder.selected);

  return (
    <div className={selected ? 'order-list--short' : 'order-list'}>
      {orders
        && orders.map((order) => {
          const { id } = order;

          return <OrderItem key={id} order={order} />;
        })}
    </div>
  );
};

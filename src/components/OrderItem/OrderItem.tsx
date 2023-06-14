import { FC } from 'react';
import './OrderItem.scss';
import { Button } from '../Button';
import * as icons from '../../assets/icons';
import { OrderWithProducts } from '../../types';
import { deleteOrder, useAppDispatch } from '../../services';

interface Props {
  order: OrderWithProducts;
}

export const OrderItem: FC<Props> = ({ order }) => {
  const dispatch = useAppDispatch();

  const {
    id,
    title,
    date,
    products,
  } = order;

  const handleRemoveOrderClick = (orderId: number) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div className="order">
      <span className="order__title">
        {title}
      </span>

      <Button
        buttonStyles="order__products-button products-button"
        iconStyles="products-button__icon"
        icon={icons.list}
      />

      <div className="order__goods-quantity goods-quantity">
        <span className="goods-quantity__count">{products.length}</span>
        <span className="goods-quantity__name">Продукти</span>
      </div>

      <div className="order__date date">
        <span className="date__order">{date}</span>
        <span className="date__current">{date}</span>
      </div>

      <div className="order__price price">
        <span className="price__usd">2500 $</span>
        <span className="price__uah">250 00.50 UAH</span>
      </div>

      <Button
        onClick={() => handleRemoveOrderClick(id)}
        buttonStyles="order__delete-button delete-button"
        iconStyles="delete-button__icon"
        icon={icons.trash}
      />
    </div>
  );
};

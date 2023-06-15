import { FC } from 'react';
import './OrderItem.scss';
import { Button } from '../Button';
import * as icons from '../../assets/icons';
import { OrderWithProducts } from '../../types';
import {
  deleteOrder, select, useAppDispatch, useAppSelector,
} from '../../services';

interface Props {
  order: OrderWithProducts;
}

export const OrderItem: FC<Props> = ({ order }) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.selectedOrder.selected);

  const {
    id,
    title,
    date,
    products,
  } = order;

  const handleRemoveOrderClick = (orderId: number) => {
    dispatch(deleteOrder(orderId));
  };

  const handleSelectClick = () => {
    dispatch(select(id));
  };

  const isSelected = selected === order.id;

  return (
    <div className="order">
      <span className={selected ? 'order__title-none' : 'order__title'}>
        {title}
      </span>

      <div className="order__button-count">
        <Button
          onClick={handleSelectClick}
          buttonStyles="order__products-button products-button"
          iconStyles="products-button__icon"
          icon={icons.list}
        />

        <div className="order__goods-quantity goods-quantity">
          <span className="goods-quantity__count">{products.length}</span>
          <span className="goods-quantity__name">Продукти</span>
        </div>
      </div>

      <div className="order__date date">
        <span className="date__order">{date}</span>
        <span className="date__current">{date}</span>
      </div>

      <div className={selected ? 'price--none' : 'price'}>
        <span className="price__usd">2500 $</span>
        <span className="price__uah">250 00.50 UAH</span>
      </div>

      {isSelected
        ? (
          <div className="order__arrow-Wrapper">
            <img
              className="order__arrow"
              src={icons.angleRight}
              alt="Angle right icon"
            />
          </div>
        )
        : (
          <Button
            onClick={() => handleRemoveOrderClick(id)}
            buttonStyles="order__delete-button delete-button"
            iconStyles="delete-button__icon"
            icon={icons.trash}
          />
        )}
    </div>
  );
};

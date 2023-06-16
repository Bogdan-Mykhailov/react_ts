import { FC } from 'react';
import './OrderItem.scss';
import { Button } from '../Button';
import * as icons from '../../assets/icons';
import { OrderWithProducts } from '../../types';
import {
  deleteOrder,
  select,
  useAppDispatch,
  useAppSelector,
} from '../../services';
import { dateFormatted, formattedDate } from '../../utils/dateFormatter';
import { currentProductCount } from '../../utils';

interface Props {
  order: OrderWithProducts;
}

export const OrderItem: FC<Props> = ({ order }) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.selectedOrder.selected);

  const { id, title, products } = order;

  const handleRemoveOrderClick = (orderId: number) => {
    dispatch(deleteOrder(orderId));
  };

  const handleSelectClick = () => {
    dispatch(select(id));
  };

  const productQuantity = products.length;
  const productQuantityTitle = currentProductCount(productQuantity);

  const isSelected = selected === id;

  const sumDefault0 = products.reduce((sum, { price }) => {
    return (
      sum
      + price
        .filter(({ isDefault }) => isDefault === 0)
        .reduce((acc, { value }) => acc + value, 0)
    );
  }, 0);

  const sumDefault1 = products.reduce((sum, { price }) => {
    return (
      sum
      + price
        .filter(({ isDefault }) => isDefault === 1)
        .reduce((acc, { value }) => acc + value, 0)
    );
  }, 0);

  const usd = `${sumDefault0} $`;
  const uah = `${sumDefault1} грн`;

  return (
    <div className={selected ? 'order--small' : 'order'}>
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
          <span className="goods-quantity__count">{productQuantity}</span>
          <span className="goods-quantity__name">{productQuantityTitle}</span>
        </div>
      </div>

      <div className="order__date date">
        <span className="date__order">{dateFormatted}</span>
        <span className="date__current">{formattedDate()}</span>
      </div>

      <div className={selected ? 'price--none' : 'price'}>
        <span className="price__usd">{usd}</span>
        <span className="price__uah">{uah}</span>
      </div>

      {isSelected ? (
        <div className="order__arrow-Wrapper">
          <img
            className="order__arrow"
            src={icons.angleRight}
            alt="Angle right icon"
          />
        </div>
      ) : (
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

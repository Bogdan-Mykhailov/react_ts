import React, { FC } from 'react';
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
import { Modal } from '../Modal';
import { useModal } from '../../hooks/useModal';

interface Props {
  order: OrderWithProducts;
}

export const OrderItem: FC<Props> = ({ order }) => {
  const { toggleModal, modal } = useModal();
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.selectedOrder.selected);

  const { id, title, products } = order;

  const handleRemoveOrderClick = () => {
    dispatch(deleteOrder(id));
    toggleModal();
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
          onClick={toggleModal}
          buttonStyles="order__delete-button delete-button"
          iconStyles="delete-button__icon"
          icon={icons.trash}
        />
      )}

      <Modal modalMode={modal} closeModal={toggleModal}>
        <div className="delete-window">
          <span className="delete-window__title">
            Ви впевнені, що бажаєте видалити це надходження?
          </span>

          <div className="delete-window__middle middle">
            <div className="middle__wrap wrap">
              <div className="wrap__mark" />
            </div>

            <div className="delete-window__group group">
              <span className="group--title">{title}</span>
            </div>
          </div>

          <div className="delete-window__buttons-wrapper buttons">
            <button
              className="buttons__no"
              onClick={toggleModal}
            >
              Відмінити
            </button>
            <button
              className="buttons__yes"
              onClick={handleRemoveOrderClick}
            >
              <img
                className="buttons__yes--icon"
                src={icons.trashRed}
                alt="Trash bucket"
              />
              Видалити
            </button>
          </div>

          <Button
            onClick={toggleModal}
            buttonStyles="add-product-list__cross-button cross-button"
            iconStyles="cross-button__cross-button-icon"
            icon={icons.cross}
          />
        </div>
      </Modal>
    </div>
  );
};

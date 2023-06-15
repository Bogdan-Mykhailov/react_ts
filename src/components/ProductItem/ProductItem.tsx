import React, { FC } from 'react';
import './ProductItem.scss';
import * as images from '../../assets';
import { Button } from '../Button';
import * as icons from '../../assets/icons';
import { deleteProduct, useAppDispatch } from '../../services';
import { Product } from '../../types';
import { createId } from '../../utils';

interface Props {
  product: Product;
}

export const ProductItem: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const {
    id,
    title,
    type,
    guarantee,
    serialNumber,
    price,
  } = product;

  const handleRemoveProductClick = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="product">
      <div className="product__information">
        <div className="product__mark" />

        <img
          src={images.monitor}
          alt="Product poster"
          className="product__cover"
        />

        <div className="product__name-cover name-cover">
          <span className="name-cover__title">{title}</span>
          <span className="name-cover__serial">{serialNumber}</span>
        </div>
      </div>

      <span className="product__type">{type}</span>

      <div className="product__guarantee guarantee">
        <div>
          <span className="guarantee__from">з</span>
          <span className="guarantee__text">{guarantee.start}</span>
        </div>
        <div>
          <span className="guarantee__to">до</span>
          <span className="guarantee__text">{guarantee.end}</span>
        </div>
      </div>

      <div className="product__cost cost">
        {price.map(({ value, symbol }) => {
          const currentPrice = `${value} ${symbol}`;

          return (
            <span key={createId()} className="cost__currency">
              {currentPrice}
            </span>
          );
        })}
      </div>

      <span className="product__group-title">Group Name</span>

      <Button
        onClick={() => handleRemoveProductClick(id)}
        buttonStyles="order__delete-button delete-button"
        iconStyles="delete-button__icon"
        icon={icons.trash}
      />
    </div>
  );
};

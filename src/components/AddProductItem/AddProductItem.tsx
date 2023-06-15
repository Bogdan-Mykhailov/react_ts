import React from 'react';
import './AddProductItem.scss';
import * as images from '../../assets';
import * as icons from '../../assets/icons';
import { Button } from '../Button';
import { deleteProduct, useAppDispatch } from '../../services';

export const AddProductItem = () => {
  const dispatch = useAppDispatch();

  const handleRemoveProductClick = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="add-product-item">
      <div className="product__information">
        <div className="product__mark" />

        <img
          src={images.monitor}
          alt="Product poster"
          className="product__cover"
        />

        <div className="product__name-cover name-cover">
          <span className="name-cover__title">title</span>
          <span className="name-cover__serial">serialNumber</span>
        </div>
      </div>

      <span className="product__type">type</span>

      <Button
        onClick={() => handleRemoveProductClick(1)}
        buttonStyles="order__delete-button delete-button"
        iconStyles="delete-button__icon"
        icon={icons.trash}
      />
    </div>
  );
};

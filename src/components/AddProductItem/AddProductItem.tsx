import React, { FC } from 'react';
import './AddProductItem.scss';
import * as icons from '../../assets/icons';
import { Button } from '../Button';
import { deleteProduct, useAppDispatch } from '../../services';
import { Product } from '../../types';

interface Props {
  product: Product;
}

export const AddProductItem: FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const {
    id, type, title, serialNumber, photo,
  } = product;

  const handleRemoveProductClick = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div className="add-product-item">
      <div className="product__information">
        <div className="product__mark" />

        <img src={photo} alt="Product poster" className="product__cover" />

        <div className="product__name-cover name-cover">
          <span className="name-cover__title">{title}</span>
          <span className="name-cover__serial">{serialNumber}</span>
        </div>
      </div>

      <span className="product__type">{type}</span>

      <Button
        onClick={() => handleRemoveProductClick(id)}
        buttonStyles="product__delete-button delete-btn"
        iconStyles="delete-btn__icon"
        icon={icons.trash}
      />
    </div>
  );
};

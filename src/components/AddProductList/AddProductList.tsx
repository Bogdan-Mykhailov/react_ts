import React from 'react';
import { Button } from '../Button';
import * as icons from '../../assets/icons';
import './AddProductList.scss';
import { AddProductItem } from '../AddProductItem';
import { unselect, useAppDispatch } from '../../services';

export const AddProductList = () => {
  const dispatch = useAppDispatch();

  const handleUnselectClick = () => {
    dispatch(unselect());
  };

  return (
    <div className="add-product-list">
      <div className="add-product-list__content">
        <span className="add-product-list__title">TITLE</span>

        <Button
          buttonStyles="add-product-list__list-add-button list-add-button"
          iconStyles="list-add-button__list-add-icon"
          icon={icons.plus}
        />

        <hr className="add-product-list__line" />

        <AddProductItem />
        <AddProductItem />
        <AddProductItem />
        <AddProductItem />
        <AddProductItem />
        <AddProductItem />
        <AddProductItem />
        <AddProductItem />
        <AddProductItem />

        <Button
          onClick={handleUnselectClick}
          buttonStyles="add-product-list__cross-button cross-button"
          iconStyles="cross-button__cross-button-icon"
          icon={icons.cross}
        />
      </div>
    </div>
  );
};

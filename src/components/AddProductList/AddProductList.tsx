import React, { FC } from 'react';
import { Button } from '../Button';
import * as icons from '../../assets/icons';
import './AddProductList.scss';
import { AddProductItem } from '../AddProductItem';
import { addProduct, unselect, useAppDispatch } from '../../services';
import { OrderWithProducts } from '../../types';
import {
  formattedDate,
  formattedDatePlus3Years,
} from '../../utils/dateFormatter';
import { useCurrentProduct } from '../../hooks/useProductData';

interface Props {
  currentOrder?: OrderWithProducts;
}

export const AddProductList: FC<Props> = ({ currentOrder }) => {
  const {
    currentType, currentName, currentImage, generateRandomType,
  } = useCurrentProduct();
  const dispatch = useAppDispatch();

  const serialNum = Math.floor(Math.random() * 10000);
  const isSelected = (currentOrder && currentOrder.id) || 1;

  const handleUnselectClick = () => {
    dispatch(unselect());
    generateRandomType();
  };

  const handleAddProductClick = () => {
    const newProduct = {
      id: Math.random(),
      serialNumber: serialNum,
      isNew: 1,
      photo: currentImage,
      type: currentType,
      title: currentName,
      description: 'Додайте детальний опис надходжень',
      specification: 'Specification 1',
      guarantee: {
        start: formattedDate(),
        end: formattedDatePlus3Years(),
      },
      price: [
        { value: 100, symbol: 'USD', isDefault: 0 },
        { value: 2600, symbol: 'UAH', isDefault: 1 },
      ],
      order: isSelected,
      date: formattedDate(),

    };

    dispatch(addProduct(newProduct));
  };

  return (
    <div className="add-product-list">
      <span className="add-product-list__title">{currentOrder?.title}</span>

      <Button
        onClick={handleAddProductClick}
        buttonStyles="add-product-list__list-add-button list-add-button"
        iconStyles="list-add-button__list-add-icon"
        icon={icons.plus}
      />

      <hr className="add-product-list__line" />
      <div className="add-product-list__content">

        {currentOrder && currentOrder.products.map((product) => {
          const { id } = product;

          return (
            <AddProductItem key={id} product={product} />
          );
        })}

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

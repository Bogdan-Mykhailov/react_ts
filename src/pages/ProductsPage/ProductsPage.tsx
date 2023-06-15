import React, { ChangeEvent, useState } from 'react';
import './ProductsPage.scss';
import {
  Button, Container, PageTitle, Sidebar,
} from '../../components';
import { addProduct, useAppDispatch, useAppSelector } from '../../services';
import { ProductList } from '../../components/ProductList';
import { Select } from '../../components/Select';
import { SortProducts } from '../../types/SortProducts';
import * as icons from '../../assets/icons';
import {
  formattedDate,
  formattedDatePlus3Years,
} from '../../utils/dateFormatter';

export const ProductsPage = () => {
  const products = useAppSelector(
    (state) => state.products.products,
  );
  const dispatch = useAppDispatch();
  const [
    selectedProduct,
    setSelectedProduct,
  ] = useState<SortProducts>(SortProducts.ALL);

  const visibleProducts = selectedProduct === SortProducts.ALL
    ? products
    : products.filter((product) => product.type === selectedProduct);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value as SortProducts);
  };

  const productsQuantity = products.length;

  const handleAddProductClick = () => {
    const newProduct = {
      id: productsQuantity + 2,
      serialNumber: productsQuantity + 1231,
      isNew: 1,
      photo: 'address.jpg',
      type: 'Phones',
      title: `Новий продукт ${productsQuantity + 1}`,
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
      order: 1,
      date: new Date().toISOString(),

    };

    dispatch(addProduct(newProduct));
  };

  return (
    <div className="products">
      <Sidebar />

      <Container>
        <div className="products__title-wrapper">
          <Button
            onClick={handleAddProductClick}
            buttonStyles="home-button"
            iconStyles="home-button__icon"
            icon={icons.plus}
          />

          <PageTitle title="Продукти" quantity={productsQuantity} />
          <Select
            label="Тип:"
            onSelectChange={handleSelectChange}
            value={selectedProduct}
          />
        </div>

        <ProductList products={visibleProducts} />

      </Container>
    </div>
  );
};

import React, { ChangeEvent, useState } from 'react';
import './ProductsPage.scss';
import {
  Container,
  PageTitle,
  ProductList,
  Select,
  Sidebar,
} from '../../components';
import { useAppSelector } from '../../services';
import { SortProducts } from '../../types/SortProducts';

export const ProductsPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const [selectedProduct, setSelectedProduct] = useState<SortProducts>(
    SortProducts.ALL,
  );

  const visibleProducts
    = selectedProduct === SortProducts.ALL
      ? products
      : products.filter((product) => product.type === selectedProduct);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(event.target.value as SortProducts);
  };

  const productsQuantity = products.length;

  return (
    <div className="products">
      <Sidebar />

      <Container>
        <div className="products__title-wrapper">
          <PageTitle title="Продукти" quantity={productsQuantity} />
          <Select
            label="Тип:"
            onSelectChange={handleSelectChange}
            value={selectedProduct}
          />
        </div>

        <ProductList
          products={visibleProducts}
        />

      </Container>
    </div>
  );
};

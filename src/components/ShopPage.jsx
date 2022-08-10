const { createElement, render, useState } = wp.element;
import { ShopMain } from './ShopMain';
import { ProductType } from './ProductType';
import { Products } from './Products';

export const ShopPage = () => {
  const [activeType, setActiveType] = useState({
    slug: 'all',
    name: 'All'
  });
  return (
    <>
      <ShopMain />
      <section className="shop-content">
        <div className="shop-content__wrapper">
          <div className="container">
            <div className="shop-content__content">
              <ProductType setActiveType={setActiveType} activeType={activeType} />
              <Products setActiveType={setActiveType} activeType={activeType} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

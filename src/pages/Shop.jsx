const { createElement, render } = wp.element;
import { ShopPage } from '../components/ShopPage';

export const Shop = () => {
  return (
    <main className="shop">
      <ShopPage />
    </main>
  );
};

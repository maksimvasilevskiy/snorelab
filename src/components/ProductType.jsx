const { createElement, render, useState } = wp.element;
import useFetch from '../hooks/useFetch';

const productTabs = [
  'All',
  'Mouthpieces',
  'Nasal',
  'Pillows',
  'Position',
  'Open mouth',
];

export const ProductType = ({setActiveType, activeType}) => {
  const tags = useFetch('https://snorelab.ux-mind.pro/wp-json/wp/v2/products_categories?per_page=100', {});

  const handleTypeClick = (e, type) => {
    setActiveType(type);
  };

  const allItem = {
    slug: 'all',
    name: 'All'
  };

  return (
    <aside className="product-type">
      <h3 className="title product-type__title">Product type</h3>
      <ul className="product-type__sort">
        {tags.data && [allItem].concat(tags.data).map((type) => {
          return (
            <li className="product-type__sort-item" key={type.slug}>
              <button
                type="button"
                className={`product-type__sort-btn ${
                  activeType.slug === type.slug
                    ? 'product-type__sort-btn_active'
                    : ''
                }`}
                onClick={(evt) => handleTypeClick(evt, type)}
              >
                {type.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

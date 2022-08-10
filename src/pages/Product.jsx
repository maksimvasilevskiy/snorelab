const { createElement, render, useState, useEffect } = wp.element;
import usePost from '../hooks/usePost';
import { ProductMain } from '../components/ProductMain';
import { ProductNote } from '../components/ProductNote';
import { ProductInfo } from '../components/ProductInfo';
import { ProductReviews } from '../components/ProductReviews';
import { ProductRemedies } from '../components/ProductRemedies';
import { ProductFullReview } from '../components/ProductFullReview';
import { ProductBottom } from '../components/ProductBottom';
import loader from '../images/loader.gif';

export const Product = () => {
  const [currentPath, setCurrentPath] = useState(window.location.href);
  const [currentSlug, setCurrentSlug] = useState(null);

  const product = usePost(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/products?per_page=100',
    currentSlug,
    {}
  );

  useEffect(() => {
    const reversedPath = currentPath.split('/').reverse();

    const slug = reversedPath[0] === '' ? reversedPath[1] : reversedPath[0];

    console.log(slug);

    setCurrentSlug(slug);
  }, [currentPath]);

  return (
    <main className="product-page">
      {product.data ? (
      <>
        <ProductMain product={product} />
        <ProductNote product={product} />
        <ProductInfo product={product} />
        {product.data.acf.product_reviews_items ?
        <ProductReviews product={product} /> : ''
        }
        <ProductRemedies product={product} />
        <ProductFullReview product={product} />
        <ProductBottom product={product} />
      </>
    ) : (
      <div className="insight">
        <div className="insight-wrapper">
          <img className="insight-loader" alt="" src={loader} />
					<div className="insight-loader-title">Loading...</div>
				</div>
			</div>
    )}
    </main>
  );
};

const { createElement, render } = wp.element;
import star from '../images/review-star.svg';

export const ProductReviews = ({product}) => {
  return (
    <section className="product-reviews">
      <div className="container">
        <div className="product-reviews-wrapper">
          <div className="product-reviews__title">
            Reviews
          </div>
          <div className="product-reviews__items">
            {product.data.acf.product_reviews_items && product.data.acf.product_reviews_items.map((item) => {
              return <div className="product-review">
                      <div className="product-review__top">
                        <div class="product-review__title"
                        dangerouslySetInnerHTML={{
                          __html: item.product_review_title
                        }}></div>
                        <div class="product-review__stars">
                          {[...Array(Number(item.product_review_stars))].map((x, i) =>
                            <img src={star} key={`star-${i}`} alt="" class="product-review__star" />
                          )}
                        </div>
                      </div>
                      <div class="product-review__text"
                      dangerouslySetInnerHTML={{
                        __html: item.product_review_text
                      }}></div>
                      <div class="product-review__author">
                        by {item.product_review_author}
                      </div>
                    </div>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

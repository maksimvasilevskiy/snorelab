const { createElement, render } = wp.element;
import star from '../images/product-star.png';

export const ProductBottom = ({product}) => {
  return (
    <section className="product-bottom">
      <img className="product-bottom__bg" alt="" src={star} />
      <div className="container">
        <div className="product-bottom__block">
          <div
          className="product-bottom__title"
          dangerouslySetInnerHTML={{
            __html: product.data.acf.bottom_title,
          }}></div>
          <a
          className="product-bottom__link"
          target="_blank"
          href={product.data.acf.bottom_button_link}
          dangerouslySetInnerHTML={{
            __html: product.data.acf.bottom_button_text,
          }}></a>
        </div>
        <div className="product-bottom__line"></div>
        <div className="product-bottom__subscript">
          Snorelab only endores products that we have tested and verified give great result for our users. We earn a small comission on purchases made through our app and website wich supports the app's development at no extra cost to you.
        </div>
      </div>
    </section>
  );
};

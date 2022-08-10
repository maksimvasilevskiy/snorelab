const { createElement, render } = wp.element;
import mouth from '../images/mouth.svg';
import lips from '../images/lips.svg';
import remedies from '../images/remedies.png';

export const ProductRemedies = ({product}) => {
  return (
    <section className="product-remedies">
      <img className="product-remedies__bg" src={remedies} alt="" />
      <div className="container">
        <div className="product-remedies-wrapper">
          <div className="product-remedies__title"
          dangerouslySetInnerHTML={{
            __html: product.data.acf.product_remedies_title,
          }}></div>
          {product.data.acf.product_remedies_icons ?
          <div className="product-remedies__icons">
            {product.data.acf.product_remedies_icons.map((item) => {
              return <div className="product-remedies__circle">
                       <img className="product-remedies__lips" src={item.product_remedies_icon.url} alt="" />
                     </div>
            })}
          </div> : ''}
        </div>
      </div>
    </section>
  );
};

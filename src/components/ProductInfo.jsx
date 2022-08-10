const { createElement, render } = wp.element;

export const ProductInfo = ({product}) => {
  return (
    <section className="product-info">
      <div className="container">
        <div className="product-info-wrapper">
          <div className="product-info__title">
            Product information
          </div>
          <div className="product-info__text">
            <p
            dangerouslySetInnerHTML={{
              __html: product.data.acf.product_info_text,
            }}></p>
            {product.data.acf.product_info_items && product.data.acf.product_info_items.map((item) => {
              return <>
                       {item.product_info_item_title ? <h2
                       dangerouslySetInnerHTML={{
                         __html: item.product_info_item_title,
                       }}></h2> : ''}
                       {item.product_info_item_text ? <p
                       dangerouslySetInnerHTML={{
                         __html: item.product_info_item_text,
                       }}></p> : ''}
                     </>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

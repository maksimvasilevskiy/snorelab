const { createElement, render } = wp.element;

export const ProductNote = ({product}) => {
  return (
    <section className="product-note">
      <div className="product-note-wrapper">
        <div className="container">
          <div className="product-note__content">
            {product.data.acf.product_note_title ?
            <h2
              className="title title_size-m product-note__title"
              dangerouslySetInnerHTML={{
                __html: product.data.acf.product_note_title,
              }}
            ></h2> : ''}
            {product.data.acf.product_note_text ?
            <div className="product-note__text"><p
            dangerouslySetInnerHTML={{
              __html: product.data.acf.product_note_text,
            }}></p></div> : ''}
            <ul className="product-note__list">
              {product.data.acf.product_note_list && product.data.acf.product_note_list.map((item) => {
                return <li className="product-note__item"
                          dangerouslySetInnerHTML={{
                          __html: item.product_note_list_item,
                        }}></li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

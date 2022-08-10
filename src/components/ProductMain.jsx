const { createElement, render, useState } = wp.element;
import main_img from '../images/product-main.png';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductMain = ({product}) => {
  const [mainImg, setMainImg] = useState(product.data.acf.product_gallery[0].product_gallery_image.url);
  const [activeImg, setActiveImg] = useState(0);
  const handleImageClick = (e) => {
    const number = Number(e.target.id.split('-').reverse()[0]);
    setActiveImg(number);
    setMainImg(product.data.acf.product_gallery[number].product_gallery_image.url);
    e.currentTarget.classList.add('img-active');
  };
  console.log('product main');
  console.log(product);

  return (
    <section className="product-main">
      <div className="container">
        <div className="product-main-wrapper">
          <div className="prodcut-main__gallery">
            <div className="prodcut-main__main-image-wrap">
              <div
                className="prodcut-main__main-image"
                style = {{
                  background: `url(${mainImg}) center center / cover`
                }}
              ></div>
            </div>
            <div className="prodcut-main__images">
              {product.data.acf.product_gallery && product.data.acf.product_gallery.map((image, idx) => {
                return <div
                  className={`prodcut-main__image ${activeImg === idx ? 'active-img' : ''}`}
                  style = {{
                    background: `url(${image.product_gallery_image.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  id={`product-img-${idx}`}
                  onClick={handleImageClick}
                ></div>
              })}
            </div>
            <div className="prodcut-main__images images-mobile">
              <Swiper
                spaceBetween={5}
                slidesPerView={4.5}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                initialSlide={0}
              >
                {product.data.acf.product_gallery && product.data.acf.product_gallery.map((image, idx) => {
                  return <SwiperSlide key={idx}><div
                    className={`prodcut-main__image ${activeImg === idx ? 'active-img' : ''}`}
                    style = {{
                      background: `url(${image.product_gallery_image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    id={`product-img-${idx}`}
                    onClick={handleImageClick}
                  ></div></SwiperSlide>
                })}
              </Swiper>
            </div>
          </div>
          <div className="product-main__info">
            <div className="product-main__icons">
              {product.data.acf.product_preview_icons && product.data.acf.product_preview_icons.map((icon) => {
                return <img className="product-main__icon" src={icon.product_preview_icon.url} alt="icon" />
              })}
            </div>
            <h1
              className="product-main__name"
              dangerouslySetInnerHTML={{
                __html: product.data.title.rendered,
              }}
            ></h1>
            <div
              className="product-main__description"
              dangerouslySetInnerHTML={{
                __html: product.data.acf.product_top_text,
              }}
            ></div>
            <div className="product-main__info-bottom">
              {product.data.acf.product_price ?
              <div className="product-main__price">
                ${product.data.acf.product_price}
              </div> : ''}
              {product.data.acf.product_discount_text ?
              <div
                className="product-main__price-discount"
                dangerouslySetInnerHTML={{
                  __html: product.data.acf.product_discount_text,
                }}
              ></div> : ''}
              <a
                className="product-main__link"
                href={product.data.acf.product_buy_button_link}
                target="_blank"
                dangerouslySetInnerHTML={{
                  __html: product.data.acf.product_buy_button_text,
                }}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

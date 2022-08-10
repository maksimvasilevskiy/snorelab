//import React from 'react';
const { createElement, render } = wp.element;
import { LazyLoadImage } from 'react-lazy-load-image-component';
import phone_3 from '../images/phone3.png';
import phone_3_2x from '../images/phone3@2x.png';
import star3 from '../images/star-3.svg';
import star4 from '../images/star-4.svg';
import star5 from '../images/star-5.svg';
// import { descriptionCards } from '@/h elpers/variables';

export const HomeDescription = ({ cards }) => {
  if (!cards) {
    return null;
  }

  return (
    <section className="description">
      <div className="description-wrapper">
        <div className="container">
          <div className="description__info">
            <h2 className="title title_fade title_size-m">
              The Snoring Management App for iOS and Android
            </h2>
            <p>
              SnoreLab has helped millions of people to understand their snoring
              problem and to discover solutions to improve their sleep.
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="description__phone">
                {/*<svg
                  width="946"
                  height="963"
                  viewBox="0 0 946 963"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M439.466 0.798584L558.833 368.172L945.112 368.172L632.606 595.221L751.973 962.594L439.466 735.545L126.96 962.594L246.327 595.221L-66.1796 368.172L320.099 368.172L439.466 0.798584Z"
                    fill="#035A95"
                  />
                </svg>
                <svg
                  width="722"
                  height="829"
                  viewBox="0 0 722 829"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M286.561 0.809326L389.333 317.108L721.909 317.108L452.849 512.591L555.621 828.89L286.561 633.406L17.5013 828.89L120.273 512.591L-148.787 317.108L183.789 317.108L286.561 0.809326Z"
                    fill="url(#paint0_linear_96_959)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_96_959"
                      x1="300.002"
                      y1="418.383"
                      x2="-73.432"
                      y2="257.443"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1F12D3" />
                      <stop offset="1" stopColor="#3FAFDE" />
                    </linearGradient>
                  </defs>
                </svg>*/}
                <img className="bg-light-5" alt="" src={star3} />
                <img className="bg-light-6" alt="" src={star4} />
                <LazyLoadImage
                  src={phone_3}
                  srcSet={`${phone_3} 1x, ${phone_3_2x} 2x`}
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <ul className="description__list">
                {cards.map((card) => (
                  <li
                    className="description__item"
                    key={card.description_card_icon.id}
                  >
                    <div className="description__item-wrapper">
                      <div className="description__item-icon">
                        <img
                          src={card.description_card_icon.url}
                          alt="description icon"
                        />
                      </div>
                      <div className="description__item-text">
                        <h4 className="title title_card description__item-title">
                          {card.description_card_title}
                        </h4>
                        <p>{card.description_card_text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <img className="bg-light-7" alt="" src={star5} />
        {/*<svg
          width="462"
          height="1003"
          viewBox="0 0 462 1003"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M696.882 0L646.068 382.922L994.547 549.578L614.664 619.581L563.85 1002.5L379.883 662.845L0 732.848L266.185 452.925L82.2182 113.267L430.697 279.923L696.882 0Z"
            fill="#035A95"
          />
        </svg>*/}
      </div>
    </section>
  );
};

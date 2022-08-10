//import React from 'react';
const { createElement, render } = wp.element;
import { reviews } from '../helpers/variables';
import useFetch from '../hooks/useFetch';

export const ReviewsPage = () => {
  const reviews = useFetch(
    'https://snorelab.ux-mind.pro/wp-json/wp/v2/reviews?reviews_categories=12',
    {}
  );

  if (!reviews.data) {
    return (
      <section className="reviews-page">
        <div className="reviews-page__wrapper">
          <div className="container">
            <h1 className="title title_fade title_size-l reviews-page__title">
              Reviews
            </h1>
            <div>
              <h2 className="title title_fade title_size-m">Reviews</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="reviews-page">
      <div className="reviews-page__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="reviews-page__info">
                <h1 className="title title_fade title_size-l reviews-page__title">
                  Reviews
                </h1>
                <span className="reviews-page__subtitle">
                  A selection of our favorite user reviews
                </span>
                <p>
                  SnoreLab has an average rating of 4.5 stars from more than
                  10,000 user reviews. Have a look at our{' '}
                  <a className="link" href="#">
                    SnoreLab Success Stories
                  </a>{' '}
                  to see the different ways that you&nbsp;can&nbsp;get your
                  snoring under control.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-page__stars-bg">
          <div className="container">
            <div className="reviews-page__reviews-wrapper">
              <p className="title title_fade reviews-page__reviews-title">
                This is a selection of some of&nbsp;our favourites reviews from
                iTunes and the Play Store
              </p>
              <div className="reviews-page__reviews">
                {reviews.data.map((review) => {
                  const starsCount = +review.acf.review_stars;
                  const starsArr = [];

                  for (let i = 0; i < starsCount; i++) {
                    starsArr.push(i);
                  }

                  return (
                    <div className="reviews-page__review" key={review.id}>
                      <div className="reviews-page__review-top">
                        <h5 className="title reviews-page__review-title">
                          {review.title.rendered}
                        </h5>
                        <div className="reviews-stars">
                          {starsArr.map((star) => (
                            <span className="star-wrapper" key={star}>
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.25 0.899902L14.3717 8.35321L22.4249 9.01895L16.3011 14.2911L18.1565 22.1559L11.25 17.9609L4.34352 22.1559L6.19894 14.2911L0.0750856 9.01895L8.12827 8.35321L11.25 0.899902Z"
                                  fill="#FED301"
                                />
                              </svg>
                            </span>
                          ))}
                        </div>
                      </div>
                      <p>{review.acf.review_text}</p>
                      {review.acf.review_author && (
                        <span className="reviews-page__review-author">{`by ${review.acf.review_author}`}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="reviews-page__note-wrapper">
            <div className="reviews-page__note">
              <svg
                width="1122"
                height="425"
                viewBox="0 0 1122 425"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M786.189 0L728.863 162.336L1122 232.988L693.434 262.664L636.109 425L428.566 281.006L0 310.683L300.297 192.012L92.7547 48.0183L485.891 118.67L786.189 0Z"
                  fill="#1A25EF"
                  fillOpacity="0.6"
                />
              </svg>
              <p>
                If you have found SnoreLab helpful and informative, be sure to
                leave a review on&nbsp;the{' '}
                <a href="#" className="link">
                  App&nbsp;Store
                </a>{' '}
                or the{' '}
                <a href="#" className="link">
                  Play&nbsp;Store
                </a>
                . Your reviews, comments and suggestions help
                us&nbsp;to&nbsp;constantly improve so we can provide the best
                service possible to help you sleep healthier and quieter!
              </p>
              <p>
                Also check out our{' '}
                <a href="#" className="link">
                  User&nbsp;Stories
                </a>{' '}
                section for some firsthand accounts of using
                the&nbsp;app to combat snoring and sleep apnea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

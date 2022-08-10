//import React from 'react';
const { createElement, render, Fragment, useState, useEffect } = wp.element;

export const SuccessStoriesBottom = () => {
  const [isPostHelpful, setIsPostHelpful] = useState('not voted');

  useEffect(() => {
    const storageKey = 'success stories';
    const lastVote = localStorage.getItem(storageKey);

    console.log(lastVote);

    if (lastVote !== null) {
      setIsPostHelpful('voted');
    }
  }, []);

  const handleYesClick = () => {
    setIsPostHelpful(true);

    const storageKey = 'success stories';
    localStorage.setItem(storageKey, true);
  };

  const handleNoClick = () => {
    setIsPostHelpful(false);

    const storageKey = 'success stories';
    localStorage.setItem(storageKey, false);
  };

  const handleCancelClick = () => {
    setIsPostHelpful('not voted');

    const storageKey = 'success stories';
    localStorage.removeItem(storageKey);
  };

  return (
    <>
      <section className="how-works__intro">
        <div className="how-works__intro-wrapper">
          <div className="container">
            <div className="how-works__intro-text">
              <svg
                width="1169"
                height="218"
                viewBox="0 0 1169 218"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M819.122 0L759.395 83.2686L1169 119.509L722.482 134.731L662.755 218L446.518 144.139L0 159.362L312.877 98.4911L96.6401 24.6305L506.245 60.8708L819.122 0Z"
                  fill="#1A25EF"
                  fillOpacity="0.8"
                />
              </svg>
              <p>
                Do you have an experience of SnoreLab you’d like to share?
                We’d love to hear from you. Please contact us on{' '}
                <a className="link" href="mailto:support@snorelab.com">
                  support@snorelab.com
                </a>
                or send us a message on{' '}
                <a className="link" href="https://www.facebook.com/">
                  Facebook
                </a>
                or{' '}
                <a className="link" href="https://twitter.com/">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-works__review">
        <div className="how-works__review-wrapper">
          <div className="container">
            <div
              className="insight-review__content"
              style={
                isPostHelpful === 'not voted'
                  ? { display: 'block' }
                  : { display: 'none' }
              }
            >
              <h3 className="title title_fade-s insight-review__title">
                Let us know if you liked the post. That’s the only way we can
                improve.
              </h3>
              <div className="insight-review__note">
                <p>Was this post helpful?</p>
              </div>
              <div className="insight-review__btns">
                <button
                  className="link btn btn-arrow insight-review__btn"
                  onClick={handleYesClick}
                >
                  <div>Yes</div>
                </button>
                <button
                  className="link btn btn-arrow btn_gray-text insight-review__btn"
                  onClick={handleNoClick}
                >
                  <div>No</div>
                </button>
              </div>
            </div>
            <div
              className="insight-review__feedback"
              style={
                isPostHelpful === true
                  ? { display: 'inline-block' }
                  : { display: 'none' }
              }
            >
              <p>Thank you for your feedback!</p>
            </div>
            <div
              className="insight-review__feedback"
              style={
                isPostHelpful === 'voted'
                  ? { display: 'inline-block' }
                  : { display: 'none' }
              }
            >
              <p>You have already voted for this post</p>
            </div>
            <div
              className="insight-review__form"
              style={
                isPostHelpful === false
                  ? { display: 'block' }
                  : { display: 'none' }
              }
            >
              <p className="insight-review__text">
                Sorry to hear that this article was not helpful. We pride
                ourselves on being the best online resource for snoring and
                sleep apnea information so please leave a comment to help us
                improve our website's content.
              </p>
              <form action="" className="feedback-form">
                <div className="careers-form__field">
                  <p className="title title_fade careers-form__field-title">
                    Message*
                  </p>
                  <span className="careers-form__input-border">
                    <textarea
                      required
                      className="careers-form__textarea"
                      type="text"
                      name="message"
                    />
                  </span>
                </div>
                <div className="careers-form__field">
                  <p className="title title_fade careers-form__field-title">
                    Name*
                  </p>
                  <span className="careers-form__input-border">
                    <input
                      required
                      className="careers-form__input"
                      type="text"
                      name="name"
                    />
                  </span>
                </div>
                <div className="careers-form__submit-wrapper">
                  <button
                    type="button"
                    className="btn careers-form__cancel"
                    onClick={handleCancelClick}
                  >
                    <div>Cancel</div>
                  </button>
                  <button type="submit" className="careers-form__submit">
                    Send feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

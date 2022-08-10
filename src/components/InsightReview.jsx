//import React from 'react';
const { createElement, render, useEffect, useState } = wp.element;
import parse from 'html-react-parser';

export const InsightReview = ({ post }) => {
  const postId = post.data.id;
  const [isPostHelpful, setIsPostHelpful] = useState('not voted');
  const [formValues, setFormValues] = useState({
    name: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    message: '',
  });

  useEffect(() => {
    const storageKey = postId;
    const lastVote = localStorage.getItem(storageKey);

    console.log(storageKey);

    if (lastVote !== null) {
      setIsPostHelpful('voted');
    }
  }, []);

  const handleYesClick = async (e) => {
    try {
      const formData = new FormData();
      formData.append('sl-message', "This post was helpful");
      formData.append('sl-post-name', String(parse(post.data.title.rendered)));

      let res = await fetch("https://snorelab.ux-mind.pro/wp-content/themes/snorelab/send-feedback.php", {
        method: "POST",
        body: formData,
      });

      console.log(res);
      if (res.status === 200) {
        setIsPostHelpful(true);
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }

    setIsPostHelpful(true);
    const storageKey = postId;
    localStorage.setItem(storageKey, true);
  };

  const handleNoClick = () => {
    setIsPostHelpful(false);

    const storageKey = postId;
    localStorage.setItem(storageKey, false);
  };

  const handleCancelClick = () => {
    setIsPostHelpful('not voted');

    const storageKey = postId;
    localStorage.removeItem(storageKey);
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const formValuesKey = target.name;

    setFormValues((prev) => {
      const newFormValues = Object.assign({}, prev);

      newFormValues[`${formValuesKey}`] = target.value;

      return newFormValues;
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let errorSubmit = false;
    Object.keys(formValues).map((key) => {
      if (!formValues[key]) {
        errorSubmit = true;
        setFormErrors((prev) => {
          const newFormErrors = Object.assign({}, prev);
          newFormErrors[`${key}`] = 'This field can`t be empty. Please fill in the information.';
          return newFormErrors;
        });
      } else {
        setFormErrors((prev) => {
          const newFormErrors = Object.assign({}, prev);
          newFormErrors[`${key}`] = '';
          return newFormErrors;
        });
      }
    });
    if (!errorSubmit) {
      try {
        const formData = new FormData();
        formData.append('sl-name', formValues.name);
        formData.append('sl-message', formValues.message);
        formData.append('sl-post-name', String(parse(post.data.title.rendered)));

        let res = await fetch("https://snorelab.ux-mind.pro/wp-content/themes/snorelab/send-feedback.php", {
          method: "POST",
          body: formData,
        });

        console.log(res);
        if (res.status === 200) {
          setFormValues({
            name: '',
            message: '',
          });
          setIsPostHelpful(true);
        } else {
          alert("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section className="insight-review">
      <div className="insight-review__wrapper">
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
              <p className="desktop-text">Let us know if you liked the post. That’s the only way we can
              improve.</p>
              <p className="mobile-text">Was this post helpful?</p>
            </h3>
            <div className="insight-review__note">
              <p className="desktop-text">Was this post helpful?</p>
              <p className="mobile-text">Let us know if you liked the post. That’s the only way we can
              improve.</p>
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
              ourselves on being the best online resource for snoring and sleep
              apnea information so please leave a comment to help us improve our
              website's content.
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
                    value={formValues.message}
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </span>
                {formErrors.message ?
                <span className="careers-form__error">
                 {formErrors.message}
                </span>
                : ''}
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
                    value={formValues.name}
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </span>
                {formErrors.name ?
                <span className="careers-form__error">
                 {formErrors.name}
                </span>
                : ''}
              </div>
              <div className="careers-form__submit-wrapper">
                <button
                  type="button"
                  className="btn careers-form__cancel"
                  onClick={handleCancelClick}
                >
                  <div>Cancel</div>
                </button>
                <button onClick={(evt) => handleFormSubmit(evt)} className="careers-form__submit">
                  Send feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

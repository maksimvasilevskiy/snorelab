import React from 'react';
const { createElement, render, forwardRef, useRef, useState } = wp.element;
import paperplane from '../images/form-submit-modal.svg';
import axios from 'axios';
import loader from '../images/upload-file.gif';

export const CareersForm = React.forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    resume: '',
    message: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFileName, setResumeFileName] = useState('');
  const [fileProgress, setFileProgress] = useState(0);
  const [progressActive, setProgressActive] = useState(false);

  const uploadInputRef = useRef(null);
  const careersModalMessage = useRef(null);

  const handleInputChange = (e) => {
    const target = e.target;

    // Name attribute of the target input element must match formValues key
    // to update the state
    const formValuesKey = target.name;

    setFormValues((prev) => {
      const newFormValues = Object.assign({}, prev);

      newFormValues[`${formValuesKey}`] = target.value;

      return newFormValues;
    });
  };

  const handleFileUpload = async (e) => {
    const target = e.target;
    const uploadLabel = target.nextElementSibling;

    setResumeFile(target.files[0]);

    console.log(target.files[0]);

    const fileName = target.value.split('\\').pop();

    const formData = new FormData();
    uploadLabel.classList.remove('careers-form__upload_loaded');
    formData.append('sl-resume', resumeFile);
    setResumeFileName('');
    setFileProgress(0);
    setProgressActive(true);
    let res = axios.request({
        method: "post",
        url: "https://snorelab.ux-mind.pro/wp-content/themes/snorelab/upload-file.php",
        data: formData,
        onUploadProgress: (p) => {
          console.log(p.loaded / (p.total * 0.01));
          setFileProgress(Math.round(p.loaded / (p.total * 0.01)));
        }
    }).then(data => {
      setTimeout(() => {
        setProgressActive(false);
        setResumeFileName(fileName);
        uploadLabel.classList.add('careers-form__upload_loaded');
      }, 500);
    });
    if (res.status === 200) {
      console.log('file uploaded');
    }
  };

  // For removing resume file
  const handleFileDelete = (e) => {
    const uploadInput = uploadInputRef.current;
    const uploadLabel = uploadInput.nextElementSibling;

    uploadInput.value = null;

    uploadLabel.classList.remove('careers-form__upload_loaded');
    setResumeFile(null);
    setResumeFileName('');
    setFileProgress(0);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const blocker = ref.current;

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
    if (!(/\S+@\S+\.\S+/).test(formValues['email'])) {
      setFormErrors((prev) => {
        const newFormErrors = Object.assign({}, prev);
        newFormErrors['email'] = 'Not valid e-mail';
        return newFormErrors;
      });
      errorSubmit = true;
    }
    if (formValues['email'] && formValues['email'].indexOf('@') === -1) {
      setFormErrors((prev) => {
        const newFormErrors = Object.assign({}, prev);
        newFormErrors['email'] = 'An e-mail address must contain a single @.';
        return newFormErrors;
      });
      errorSubmit = true;
    }
    if (!errorSubmit) {
      try {
        /*const data = {
          'name': formValues.name,
          'surname': formValues.surname,
          'email': formValues.email,
          'subject': formValues.subject,
          'resume': formValues.resume,
          'message': formValues.message,
        }
        console.log(JSON.stringify(data));*/
        const formData = new FormData();
        formData.append('sl-name', formValues.name);
        formData.append('sl-surname', formValues.surname);
        formData.append('sl-email', formValues.email);
        formData.append('sl-subject', formValues.subject);
        formData.append('sl-resume', resumeFile);
        formData.append('sl-message', formValues.message);

        let res = await fetch("https://snorelab.ux-mind.pro/wp-content/themes/snorelab/send-form.php", {
          method: "POST",
          body: formData,
        });

        console.log(res);
        if (res.status === 200) {
          setFormValues({
            name: '',
            surname: '',
            email: '',
            subject: '',
            message: '',
          });
          handleFileDelete();
          blocker.classList.add('blocker_open');
          setIsModalOpen(true);
        } else {
          alert("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleModalClose = (e) => {
    const blocker = ref.current;
    blocker.classList.remove('blocker_open');
    setIsModalOpen(false);
  };

  return (
    <form className="careers-form" method="post" action="send-form.php" accept-charset="utf-8" enctype="multipart/form-data">
      <div className="careers-form__field">
        <p className="title title_fade careers-form__field-title">
          First name*
        </p>
        <span className="careers-form__input-border">
          <input
            className="careers-form__input"
            type="text"
            name="name"
            onChange={(evt) => handleInputChange(evt)}
            value={formValues.name}
          />
        </span>
        {formErrors.name ?
        <span className="careers-form__error">
          {formErrors.name}
        </span>
        : ''}
      </div>
      <div className="careers-form__field">
        <p className="title title_fade careers-form__field-title">Last name*</p>
        <span className="careers-form__input-border">
          <input
            className="careers-form__input"
            type="text"
            name="surname"
            onChange={(evt) => handleInputChange(evt)}
            value={formValues.surname}
          />
        </span>
        {formErrors.surname ?
        <span className="careers-form__error">
         {formErrors.surname}
        </span>
        : ''}
      </div>
      <div className="careers-form__field">
        <p className="title title_fade careers-form__field-title">Email*</p>
        <span
          className="careers-form__input-border"
          data-error="This field can`t be empty. Please fill in the information."
        >
          <input
            className="careers-form__input"
            type="email"
            name="email"
            onChange={(evt) => handleInputChange(evt)}
            value={formValues.email}
          />
        </span>
        {formErrors.email ?
        <span className="careers-form__error">
         {formErrors.email}
        </span>
        : ''}
      </div>
      <div className="careers-form__field">
        <p className="title title_fade careers-form__field-title">Subject*</p>
        <span className="careers-form__input-border">
          <input
            className="careers-form__input"
            type="text"
            name="subject"
            onChange={(evt) => handleInputChange(evt)}
            value={formValues.subject}
          />
        </span>
        {formErrors.subject ?
        <span className="careers-form__error">
         {formErrors.subject}
        </span>
        : ''}
      </div>
      <div className="careers-form__field">
        <p className="title title_fade careers-form__field-title">
          Attach resume*
        </p>
        <span
          // className="careers-form__input-border careers-form__input-error"
          className="careers-form__input-border"
          data-error="Upload failed. Max size for files is 10 MB."
        >
          <input
            className="careers-form__input"
            id="uploadResume"
            type="file"
            name="resume"
            onChange={(evt) => handleFileUpload(evt)}
            ref={uploadInputRef}
          />
          <label className="careers-form__upload" htmlFor="uploadResume">
            {resumeFileName}
            {progressActive ?
            <div class="careers-form__upload-progress">
              <img alt="" src={loader} /> Uploading {fileProgress} %
            </div>
            : ''
            }
            <div className="careers-form__upload-btn-wrapper">
              <button
                type="button"
                className="careers-form__upload-btn"
                style={{ display: resumeFile ? 'inline-block' : 'none' }}
                onClick={(evt) => handleFileDelete(evt)}
              >
                <span />
                <span />
              </button>
            </div>
          </label>
        </span>
        {formErrors.resume ?
        <span className="careers-form__error">
         {formErrors.resume}
        </span>
        : ''}
      </div>
      <div className="careers-form__field careers-form__field-message">
        <p className="title title_fade careers-form__field-title">Message*</p>
        <span className="careers-form__input-border">
          <textarea
            className="careers-form__textarea"
            name="message"
            onChange={(evt) => handleInputChange(evt)}
            value={formValues.message}
          />
        </span>
        {formErrors.message ?
        <span className="careers-form__error">
         {formErrors.message}
        </span>
        : ''}
      </div>
      <div className="careers-form__submit-wrapper">
        <button
          type="submit"
          className="careers-form__submit"
          onClick={(evt) => handleFormSubmit(evt)}
        >
          Send message
        </button>
      </div>
      <div
        className={`careers-form__modal-wrapper ${
          isModalOpen ? 'careers-form__modal_open' : ''
        }`}
      >
        <div className="careers-form__modal" ref={careersModalMessage}>
          <div className="careers-form__modal-close-wrapper">
            <button
              type="button"
              className="careers-form__modal-close"
              onClick={(evt) => handleModalClose(evt)}
            >
              <span />
              <span />
            </button>
          </div>
          <img className="careers-form__modal-img" src={paperplane} alt="" />
          <h3 className="title title_size-s careers-form__modal-title">
            Thank you!
          </h3>
          <p>We have received your message.</p>
        </div>
      </div>
    </form>
  );
});

import React, { useState } from 'react';
import styles from './css/Contact.module.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any actions with the form data
    setShowModal(true); // Show the modal after form submission
  };


  return (
    <div className={styles.contactContainer}>
      <h3 className={styles.bigTitle}>{t('pages.contact.title')}</h3>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={require("../assets/contact-us.jpeg")} alt="here" />
        </div>
        <div className={styles.formContainer}>
          <h3 className={styles.galleryDescription}>{t('pages.contact.formDescription')}</h3>
          <form>
            <div className="row">
              <div className="col">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="form-control" placeholder={t('pages.contact.FirstName')} />
              </div>
              <div className="col">
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="form-control" placeholder={t('pages.contact.LastName')} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">{t('pages.contact.emailLabel')}</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">{t('pages.contact.Category')}</label>
              <select name="category" value={formData.category} onChange={handleInputChange} className="form-control" id="exampleFormControlSelect1">
              <option>---</option>
                <option>{t('pages.contact.Bug')}</option>
                <option>{t('pages.contact.Community')}</option>
                <option>{t('pages.contact.Billing')}</option>
                <option>{t('pages.contact.How')}</option>
                <option>{t('pages.contact.Account')}</option>
                <option>{t('pages.contact.Other')}</option>

              </select>
            </div>
            {/* <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">{t('pages.contact.exampleMultipleSelectLabel')}</label>
              <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">{t('pages.contact.Comment')}</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </form>
          <button type="submit"  className="=submitButton mt-3" onClick={() => setShowModal(true)}n>{t('pages.contact.submitButton')}</button>
        </div>
      </div>

      {/* Modal component */}
      

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Form Submission Results</h2>
            {/* Display form data inside the modal */}
            <p>{t('pages.contact.FirstName')}: : {formData.firstName}</p>
            <p>{t('pages.contact.LastName')}: : {formData.lastName}</p>
            <p>{t('pages.contact.Email')}: : {formData.email}</p>
            <p>{t('pages.contact.Category')}: {formData.category}</p>
            <p>{t('pages.contact.Comment')}: {formData.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

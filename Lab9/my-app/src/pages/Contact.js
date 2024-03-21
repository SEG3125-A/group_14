import React from 'react';
import styles from './css/Contact.module.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

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
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">{t('pages.contact.emailLabel')}</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">{t('pages.contact.exampleSelectLabel')}</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">{t('pages.contact.exampleMultipleSelectLabel')}</label>
              <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">{t('pages.contact.exampleTextareaLabel')}</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </form>
          <button type="submit" className="=submitButton mt-3">{t('pages.contact.submitButton')}</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import styles from './css/Events.module.css';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import weddingImage from '../assets/wedding.jpg';
import galaImage from '../assets/gala.jpg';
import portraitImage from '../assets/portrait.jpg';
import { Link } from 'react-router-dom';

function Events() {
  const flickityRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    flickityRef.current = new Flickity('.gallery', {
      wrapAround: true,
      // Add more Flickity options as needed
    });

    // Clean up Flickity instance on component unmount
    return () => flickityRef.current.destroy();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link to="/home">
          <button className={styles.backLink}>{t('pages.events.backHome')}</button>
        </Link>
      </div>
      <h1 className={styles.title}>{t('pages.events.title')}</h1>
      <div className="gallery">
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('pages.events.services.wedding.link')}</h3>
          <div className={styles.imageWrapper}>
            <img src={weddingImage} alt="Wedding" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <p className={styles.overlayText}>Learn More</p>
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('pages.events.services.wedding.description')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('pages.events.services.gala.link')}</h3>
          <div className={styles.imageWrapper}>
            <img src={galaImage} alt="Gala" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <p className={styles.overlayText}>Learn More</p>
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('pages.events.services.gala.description')}</p>
        </div>
        <div className={`gallery-cell ${styles.service}`}>
          <h3 className={styles.serviceLink}>{t('pages.events.services.portrait.link')}</h3>
          <div className={styles.imageWrapper}>
            <img src={portraitImage} alt="Portrait" className={styles.serviceImage} />
            <div className={styles.overlay}>
              <p className={styles.overlayText}>Learn More</p>
            </div>
          </div>
          <p className={styles.serviceDescription}>{t('pages.events.services.portrait.description')}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>{t('pages.events.contactInfo.phone')}</p>
        <p>{t('pages.events.contactInfo.fax')}</p>
        <p>{t('pages.events.contactInfo.email')}</p>
        <Button className={styles.bookServicesButton}>{t('pages.events.bookServices')}</Button>
      </div>
    </div>
  );
}

export default Events;

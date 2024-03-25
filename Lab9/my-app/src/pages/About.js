import React from 'react';
import styles from './css/About.module.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.numberText}>{t('pages.about.ourStory')}</h1>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={require("../assets/girlboss_stock1.webp")} alt="womp" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.description}>{t('pages.about.trio')}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={require("../assets/photography_stock3.jpeg")} alt="womp" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.description}>{t('pages.about.vision')}</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={require("../assets/photography_stock_img2.jpeg")} alt="womp" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.description}>{t('pages.about.humbleBeginnings')}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
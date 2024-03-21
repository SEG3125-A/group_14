import React from 'react';
import ImageGrid from '../components/ImageGrid';
import styles from './css/Collections.module.css';
import ImageSearchDropDown from '../components/ImageSearchDropdown';
import { useTranslation } from 'react-i18next';

const Collections = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.collectionContainer}>
      <ImageSearchDropDown />
      <ImageGrid
        numberOfItems={5}
        items={[
          <div className={styles.photo1}></div>,
          <div className={styles.photo2}></div>,
          <div className={styles.photo3}></div>,
          <div className={styles.photo4}></div>,
          <div className={styles.photo5}></div>,
        ]}
        className={styles.ImageGrid}
      />
      <h1 className={styles.header}>{t('pages.collections.header')}</h1>
    </div>
  );
};

export default Collections;

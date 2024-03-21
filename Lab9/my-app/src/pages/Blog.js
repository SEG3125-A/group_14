import React from 'react';
import styles from './css/Blog.module.css';
import { useTranslation } from 'react-i18next';

const imageData = [
  { src: require('../assets/blog_1.webp'), title: 'Concert' },
  { src: require('../assets/blog_2.jpg'), title: 'New Years Eve' },
  { src: require('../assets/blog_3.jpeg'), title: 'Sol duc falls' },
  { src: require('../assets/blog_4.jpg'), title: 'Paris findings' },
  { src: require('../assets/blog_5.jpg'), title: 'Swan Lake' },
];

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.blogContainer}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{t('pages.blog.title')}</h1>
        <h1 className={styles.numberText}>2023</h1>
      </div>
      <div className={styles.bMainWrapper}>
        <div className={styles.gallery}>
          {imageData.map((item, index) => (
            <div key={index} className={styles.galleryItem}>
              <img src={item.src} alt={`Gallery item ${index + 1}`} className={styles.galleryImage} />
              <h3 className={styles.galleryTitle}>{item.title}</h3>
              <p className={styles.galleryDescription}>{t(`pages.blog.${item.title}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

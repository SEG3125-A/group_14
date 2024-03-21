import React, { useState } from 'react';
import styles from './css/Collections.module.css';
import ImageSearchDropDown from '../components/ImageSearchDropdown';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const context = require.context('./../../public/assets', false, /^\.\/collections_.*\.(png|jpe?g|svg)$/);
const photos_len = (context.keys().map(context)).length;

let photos = [];

for (let i = 1; i <= photos_len; i++) {
  photos.push({
    id: i,
    title: `Photo ${i}`,
    url: `/assets/collections_${i}.jpg`,
  });
}

const categories = ['Brand New', 'Highlights', 'Past Winners'];

 photos = photos.map(photo => ({
  ...photo,
  category: categories[(Math.floor(Math.random() * categories.length))]
}));

const Collections = () => {
  const { t } = useTranslation();
  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  const handleCategorySelect = (category) => {
    const filtered = photos.filter(photo => photo.category === category);
    setFilteredPhotos(filtered);
  };

  const createRows = () => {
    const rows = [];
    for (let i = 0; i < filteredPhotos.length; i += 4) {
      const rowPhotos = filteredPhotos.slice(i, i + 4);
      rows.push(
        <Row key={i}>
          {rowPhotos.map(photo => (
            <Col key={photo.id} xs={6} md={3} lg={3} xl={3}>
              <div className={styles.imageWrapper}>
                <img src={photo.url} alt={photo.title} className={styles.photo} />
              </div>
            </Col>
          ))}
        </Row>
      );
    }
    return rows;
  };

  return (
    <div className={styles.collectionContainer}>
      <h1 className={styles.header}>{t('pages.collections.header')}</h1>
      <ImageSearchDropDown onSelectCategory={handleCategorySelect} />
      <Container>
        {createRows()}
      </Container>
      
    </div>
  );
};

export default Collections;

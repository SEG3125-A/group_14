import React from 'react';
import styles from './css/Events.module.css';
import Button from 'react-bootstrap/Button';

import weddingImage from '../assets/wedding.jpg';
import galaImage from '../assets/gala.jpg';
import portraitImage from '../assets/portrait.jpg';

function Events() {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.backLink}>back home</button>
        <h1 className={styles.title}>Our Photographic Services</h1>
        <button className={styles.backLink}>back</button>
      </div>
      <div className={styles.services}>
        <div className={styles.service}>
          <h3 className={styles.serviceLink}>wedding</h3>
          <div className={styles.imageWrapper}>
            <img src={weddingImage} alt="Wedding" className={styles.serviceImage} />
          </div>
          <p className={styles.serviceDescription}>Nuptial Narratives, Wedding Whispers.</p>
        </div>
        <div className={styles.service}>
          <h3 className={styles.serviceLink}>gala</h3>
          <div className={styles.imageWrapper}>
            <img src={galaImage} alt="Gala" className={styles.serviceImage} />
          </div>
          <p className={styles.serviceDescription}>Gala Glamour, Philanthropic Phases.</p>
        </div>
        <div className={styles.service}>
          <h3 className={styles.serviceLink}>portrait</h3>
          <div className={styles.imageWrapper}>
            <img src={portraitImage} alt="Portrait" className={styles.serviceImage} />
          </div>
          <p className={styles.serviceDescription}>Evocative, Expressive.</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>phone: (123) 456-7890</p>
        <p>fax: 12345</p>
        <p>email: photos@gmail.com</p>
        <Button className={styles.bookButton}>BOOK SERVICES</Button>
      </div>
    </div>
  );
}

export default Events;

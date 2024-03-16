// Collections.js
import React from 'react';
import ImageGrid from '../components/ImageGrid';
import styles from './css/Collections.module.css';
import Button from 'react-bootstrap/Button';

const Collections = () => (
    <div className={styles.collectionContainer}>
        <ImageGrid numberOfItems={5} items ={[
            <div className={styles.photo1}></div>,
            <div className={styles.photo2}></div>,
            <div className={styles.photo3}></div>,
            <div className={styles.photo4}></div>,
            <div className={styles.photo5}></div>,
        ]} className={styles.ImageGrid} />
        <h1 className={styles.header}>BE INSPIRED</h1>
    </div>

);

export default Collections;

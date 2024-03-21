import React from 'react';
import styles from './css/Home.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import { useTranslation } from "next-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.homeContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.headerDate}>
                    <h1 className={styles.header}>{t('home.title')}</h1>
                    <div className={styles.date}>{t('home.date')}</div>
                </div>
                <div>
                    <Link to="/about">
                        <Button variant="light" size="lg" className={styles.learnMoreBtn}>{t('home.learnMore')}</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.secondaryWrapper}>
                <div className={styles.secondaryImg}></div>
                <div className={styles.DescriptionCard}>
                    <div className={styles.description}>{t('home.description')}</div>
                    <div className={styles.subtitle}>
                        <h1>{t('home.about')}</h1>
                        <h3>{t('home.captivating')}</h3>
                        <h3>{t('home.dynamic')}</h3>
                        <h3>{t('home.vibrant')}</h3>
                    </div>
                    <div className={styles.semiCircle}></div>
                </div>
            </div>
        </div>
    );
};

export default Home;

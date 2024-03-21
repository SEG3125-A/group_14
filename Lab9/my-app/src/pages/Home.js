import React from 'react';
import styles from './css/Home.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.homeContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.headerDate}>
                    <h1 className={styles.header}>{t('pages.home.title')}</h1>
                    <div className={styles.date}>{t('pages.home.date')}</div>
                </div>
                <div>
                    <Link to="/about">
                        <Button variant="light" size="lg" className={styles.learnMoreBtn}>{t('pages.home.learnMore')}</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.secondaryWrapper}>
                <div className={styles.secondaryImg}></div>
                <div className={styles.DescriptionCard}>
                    <div className={styles.description}>{t('pages.home.description')}</div>
                    <div className={styles.subtitle}>
                        <h1>{t('pages.home.about')}</h1>
                        <h3>{t('pages.home.captivating')}</h3>
                        <h3>{t('pages.home.dynamic')}</h3>
                        <h3>{t('pages.home.vibrant')}</h3>
                    </div>
                    <div className={styles.semiCircle}></div>
                </div>
            </div>
        </div>
    );
};

export default Home;

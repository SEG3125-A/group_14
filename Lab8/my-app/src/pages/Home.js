// Home.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from './css/Home.module.css';
import Button from 'react-bootstrap/Button';


const Home = () => (
    <Container className={styles.homeContainer}>
        <div className={styles.mainWrapper}>
            <div className={styles.headerDate}>
                <h1  className={styles.header}>The Art of Storytelling</h1>
                <div className={styles.date}>March 15, 2024 - October 12, 2024</div>
            </div>
            <div>
                <Button variant="light" size="lg" className={styles.learnMoreBtn}>Learn More</Button>
            </div>
        </div>
        <div className={styles.secondaryWrapper}>
            <div className={styles.secondaryImg}></div>
            <div className={styles.DescriptionCard}>
                <div className={styles.description}>
                    Welcome to WanderLens, where every click captures a story and every image is a journey. We're passionate about bringing the world to you through our photography services that range from personalized photo sessions to selling unique, heartfealt artwork. Our commitment to excellence and love for storytelling shines through every frame, connecting us with like minded individuals who cheris the beauty if the moment. Join us to create long lasting memories.
                </div>
                <div className={styles.subtitle}>
                    <h1>ABOUT US</h1>
                    <h3>CAPTIVATING</h3>
                    <h3>DYNAMIC</h3>
                    <h3>VIBRANT</h3>
                </div>
            </div>

        </div>
    </Container>
);

export default Home;

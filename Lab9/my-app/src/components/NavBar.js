import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styles from './css/NavBar.module.css';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
      <Container className={styles.navbarContainer} id="nav_container">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
        <Nav className={`me-auto ${styles.navbarNav}`}>
            <Nav.Link as={NavLink} to="/home" className={styles.navLink}>{t('components.navbar.home')}</Nav.Link>
            <Nav.Link as={NavLink} to="/collections" className={styles.navLink}>{t('components.navbar.collections')}</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.navLink}>{t('components.navbar.about')}</Nav.Link>
            <Navbar.Brand as={NavLink} to="/home" className={styles.navLink}>WanderLens</Navbar.Brand>
            <Nav.Link as={NavLink} to="/events" className={styles.navLink}>{t('components.navbar.events')}</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className={styles.navLink}>{t('components.navbar.blog')}</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>{t('components.navbar.contact')}</Nav.Link>
            <div>
        <button onClick={toggleLanguage}>{t('components.navbar.toggleLanguage')}</button>
      </div>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default NavBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styles from './css/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
      <Container className={styles.navbarContainer} id="nav_container">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
        <Nav className={`me-auto ${styles.navbarNav}`}>
            <Nav.Link as={NavLink} to="/home" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/collections" className={styles.navLink}>Collections</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.navLink}>About</Nav.Link>
            <Navbar.Brand as={NavLink} to="/home" className={styles.navLink}>WanderLens</Navbar.Brand>
            <Nav.Link as={NavLink} to="/events" className={styles.navLink}>Events</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className={styles.navLink}>Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
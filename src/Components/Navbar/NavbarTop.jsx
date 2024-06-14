import React from 'react';
import { Navbar, Nav, Button, NavLink, Container } from 'react-bootstrap';
import styles from './Navbar.module.css';
import logo from '../../Assets/logo.png'; // Ensure you have the logo image in the specified path

function NavbarTop() {
  return (
    
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.cont1}>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
          style={{width:"150px"}}
        />
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className={`mx-auto ${styles.navLinks}`}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#how-it-works">How it works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </Nav>
          <Button variant="outline-danger" className={styles.loginButton}>LOGIN / SIGNUP</Button>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavbarTop;

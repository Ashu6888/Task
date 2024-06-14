import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import { Button, Container } from 'react-bootstrap'
import toy from "../Assets/toy.png"
import meet from "../Assets/meet.png"
import NavbarTop from '../Components/Navbar/NavbarTop'
import HomeBottom from './HomeBottom'
import '../custom.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false, // Ensure the animation triggers every time you scroll
    });

    // Reinitialize AOS when component updates, if necessary
    AOS.refresh();
}, []);
  return (
 
    <>
    <NavbarTop/>
    <div className={styles.backgroundImage}>
    <div className={styles.overlay} >
      <Container className="h-100 d-flex justify-content-center align-items-center">
        <div className={styles.circularContainer} data-aos="zoom-in" data-aos-delay="100">
          <div className={styles.div1}>
            <div className="d-flex align-items-center justify-content-center">
              <img src={toy} alt="Toy" className={styles.toyImage} />
            </div>
            <h1  className={`display-4 text-white ${styles.h1}`}>Automate your pre-sales</h1>
            <p className={`lead ${styles.p}`}>
                <span className={styles.highlight}>Recently received $2 million</span>
              &nbsp; in seed funding.
            </p>
            <button className={styles.btn1}>Start a Conversation</button>
            <div className={styles.sideCircle}>
              <div>
                <img src={meet}/>
              </div>
              <a href="#" className="text-white">Book a 30 minutes meeting with us</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
  <HomeBottom/>
  </>
  )
}

export default Home
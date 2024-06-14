import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import logo2 from "../Assets/logo2.png"
import mobile from "../Assets/mobile.png"
import rythm from "../Assets/rythm.png"
import inn_toy from "../Assets/inn_toy.png"
import left from "../Assets/left.png"
import right from "../Assets/right.png"
import styles from "./Home.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomeBottom = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        once: false, 
    });

    AOS.refresh();
}, []);
  return (
    <div style={{position:"relative"}}>
        <img src={left} alt="" className={styles.left}/>
    <div className={styles.mainContent}>
      <Container className={styles.main_div1}>
        <img src={logo2} alt="Your Site" className={styles.siteLogo} />
        <h1 className={styles.mainHeading}>
          Get 2x Revenue With <span className={styles.highlight}>Gen A.I. Powered Sales Agent</span> To Your Customers
        </h1>
        <p className={styles.subHeading}>
          Connect with 10,000 customers in 1 hour with real-time data insights, revolutionizing business outreach with AI-human synergy.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.actionButton}>VISIT OUR WEBSITE</button>
          <button className={styles.actionButton}>BOOK A MEETING</button>
        </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}  data-aos="slide-up" data-aos-delay="50">
        <p className={styles.inn_p}>Sales</p>
        <div className={styles.phoneContainer}>
          <img src={mobile} alt="Phone" className={styles.phoneImage} />
          <div className={styles.formOverlay}>
            <div className={styles.img_div}>
                <img src={inn_toy} alt="" />
                <img src={rythm} alt="" />
            </div>
            <h3 className={styles.head}>Talk to our voicebot</h3>
            <Form>
              <Form.Group controlId="formFullName" className={styles.frm}>
                <Form.Control type="text" placeholder="Full Name"  className={styles.input_div} />
              </Form.Group>
              <Form.Group controlId="formEmail" className={styles.frm}> 
                <Form.Control type="email" placeholder="Email" className={styles.input_div}/>
              </Form.Group>
              <Form.Group controlId="formEmail" className={styles.frm}> 
                <Form.Control type="email" placeholder="Email" className={styles.input_div} />
              </Form.Group>
              <Button variant="danger" className={styles.requestButton}>REQUEST A CALL BACK</Button>
            </Form>
          </div>
        </div>
        <p className={styles.inn_p1}>Agent</p>
      </div>
      </Container>
  </div>
  <img src={right} alt="" className={styles.right} />
  </div>
  )
}

export default HomeBottom
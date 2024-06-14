import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CardComp from '../../Components/CardComp/CardComp'
import styles from "./Dashboard.module.css"
import BarChart from '../../Components/Chart/BarChart'
import ProgressCircle from '../../Components/Chart/ProgressCircle'
import LeadTable from '../../Components/LeadTable/LeadTable'
import tile1 from "../../Assets/tile1.svg"
import tile2 from "../../Assets/tile2.svg"
import tile3 from "../../Assets/tile3.svg"
import tile4 from "../../Assets/tile4.svg"

const Dashboard = () => {
  const [num, setNum] = useState(0)
  const switchComp = {
    0:   <LeadTable />,
    1:  <LeadTable />,
    2:   <LeadTable />,
    3:   <LeadTable />
  }


  return (
    <div style={{ padding: "20px" }}>
      <Container className='mb-4' >
      <Row className='p-0 m-0'>
      <Col xs={12} sm={12} md={3} className='ps-sm-0 mb-4   p-0 '>
        <CardComp  p = "63"
    span = "New Leads"
    h1 ="+2.6" cls2={styles.color1} img={tile1}  cls={styles.cont1} />
      </Col>
     
      <Col xs={12} sm={12} md={3} className='mb-4 p-0 '>
        <CardComp p = "25"
    span = "Email"
    h1 ="+5.5" cls2={styles.color2} img={tile2}  cls={styles.cont1} />
      </Col>
      <Col xs={12} sm={12} md={3} className='mb-4  p-0 '>
        <CardComp p = "49"
    span = "Proposals"
    h1 ="-0.7" cls={styles.cont1} img={tile3} cls2={styles.color3} down={true} />
      </Col>
      <Col xs={12} sm={12} md={3} className='pe-sm-0 p-0 '>
        <CardComp p = "12"
    span = "Appointment"
    h1 ="+2.6" img={tile4}  cls2={styles.color4}  />
      </Col>
    </Row>
    <Row >
        <Col md={8} className={styles.mb1}><BarChart /></Col>
        <Col md={4} className={styles.mb1}><ProgressCircle /></Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
        <div style={{ display: "flex", justifyContent: "space-between" }} className={styles.div_mob}>
        <div className={styles.btn_container}>
          <button onClick={() => setNum(0)} className={`${num === 0 ? styles.active : ''}`}>New</button>
          <button onClick={() => setNum(1)} className={`${num === 1 ? styles.active : ''}`}>No show</button>
          <button onClick={() => setNum(2)} className={`${num === 2 ? styles.active : ''}`}>Target</button>
          <button onClick={() => setNum(3)} className={`${num === 3 ? styles.active : ''}`}> Paid</button>
        </div>
       
      </div>



      {switchComp[num]}
        
        </Col>
      </Row>
     
 
      </Container>
   </div>
  )
}

export default Dashboard
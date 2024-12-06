import React, { Suspense } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardComp from "../../Components/CardComp/CardComp";
import styles from "./Dashboard.module.css";
import tile1 from "../../Assets/tile1.svg";
import tile2 from "../../Assets/tile2.svg";
import tile3 from "../../Assets/tile3.svg";
import tile4 from "../../Assets/tile4.svg";
import ButtonComp from "../../Components/Reusable/ButtonComp";

// Lazy load charts
const BarChart = React.lazy(() => import("../../Components/Chart/BarChart"));
const ProgressCircle = React.lazy(() =>
  import("../../Components/Chart/ProgressCircle")
);

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Container className="mb-4">
        <Row className="p-0 m-0">
          <Col xs={12} sm={12} md={3} className="ps-sm-0 mb-4 p-0">
            <CardComp
              p="63"
              span="New Leads"
              h1="+2.6"
              cls2={styles.color1}
              img={tile1}
              cls={styles.cont1}
            />
          </Col>
          <Col xs={12} sm={12} md={3} className="mb-4 p-0">
            <CardComp
              p="25"
              span="Email"
              h1="+5.5"
              cls2={styles.color2}
              img={tile2}
              cls={styles.cont1}
            />
          </Col>
          <Col xs={12} sm={12} md={3} className="mb-4 p-0">
            <CardComp
              p="49"
              span="Proposals"
              h1="-0.7"
              cls={styles.cont1}
              img={tile3}
              cls2={styles.color3}
              down={true}
            />
          </Col>
          <Col xs={12} sm={12} md={3} className="pe-sm-0 p-0">
            <CardComp
              p="12"
              span="Appointment"
              h1="+2.6"
              img={tile4}
              cls2={styles.color4}
            />
          </Col>
        </Row>
        <Row>
          <Suspense fallback={<div>Loading Chart...</div>}>
            <Col md={8} className={styles.mb1}>
              <BarChart />
            </Col>
            <Col md={4} className={styles.mb1}>
              <ProgressCircle />
            </Col>
          </Suspense>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className={styles.div_mob}
            >
              <div className={styles.btn_container}>
                <ButtonComp label="New" />
                <ButtonComp label="show" />
                <ButtonComp label="Target" />
                <ButtonComp label="Paid" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

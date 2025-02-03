import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router";
import NavigationBar from "./NavigationBar";

const Layout = () => {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
      </header>

      <section className="hero">
        <Container>
          <Row>
            <Col>
              <h1>Because there is no planet B</h1>
              <p> Act Green, Live Green.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>

      <footer>{/* Información de contacto y enlaces */}</footer>
    </div>
  );
};
export default Layout;

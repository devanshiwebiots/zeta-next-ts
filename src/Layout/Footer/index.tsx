import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="12" className="footer-copyright text-center">
            <p className="mb-0">Copyright 2023 © Zeta theme by pixelstrap </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

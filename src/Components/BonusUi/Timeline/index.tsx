import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import Example1Timeline from "./Example1Timeline";

const Timeline = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Timeline" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <Example1Timeline />
        </Row>
      </Container>
    </>
  );
};

export default Timeline;

import React from "react";
import { Col, Row } from "reactstrap";
import LeftBar from "../Common/LeftSidebar";
import RightSideBar from "../Common/RightSidebar";
import Post1 from "./Post1";
import Post2 from "./Post2";

const TimelineTab = () => {
  return (
    <Row>
      <Col xl="3" lg="12" md="5" className="xl-40 box-col-4">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <LeftBar />
          </Row>
        </div>
      </Col>
      <Col xl="6" lg="12" md="7" className="xl-60 box-col-8">
        <Row>
          <Post1 />
          <Post2 />
        </Row>
      </Col>
      <Col xl="3 " className="xl-100 box-col-12">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <RightSideBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default TimelineTab;

import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Vertical_Step } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const VerticalSteps = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Vertical_Step} />
        <CardBody>
          <Row>
            <Col lg="4">
              <div className="u-steps u-steps-vertical">
                <div className="u-step">
                  <span className="u-step-number">1</span>
                  <div className="u-step-desc">
                    <span className="u-step-title">Shopping</span>
                    <p>Choose what you want</p>
                  </div>
                </div>
                <div className="u-step current">
                  <span className="u-step-number">2</span>
                  <div className="u-step-desc">
                    <span className="u-step-title">Billing</span>
                    <p>Pay for the bill</p>
                  </div>
                </div>
                <div className="u-step">
                  <span className="u-step-number">3</span>
                  <div className="u-step-desc">
                    <span className="u-step-title">Getting</span>
                    <p>Waiting for the goods</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalSteps;

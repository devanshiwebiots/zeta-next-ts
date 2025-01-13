import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Default_Pearls_Steps } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";

const DefaultPearlSteps = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Default_Pearls_Steps} />
        <CardBody>
          <Row>
            <Col xs="4" className="u-pearl done ">
              <span className="u-pearl-number">1</span>
              <span className="u-pearl-title">Account Info</span>
            </Col>
            <Col xs="4" className="u-pearl current">
              <span className="u-pearl-number">2</span>
              <span className="u-pearl-title">Billing Info</span>
            </Col>
            <Col xs="4" className="u-pearl">
              <span className="u-pearl-number">3</span>
              <span className="u-pearl-title">Confirmation</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultPearlSteps;

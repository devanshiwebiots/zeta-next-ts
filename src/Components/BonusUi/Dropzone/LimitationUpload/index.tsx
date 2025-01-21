import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LimitationFileUpload } from "@/Constant";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonFileUpload from "../Common/CommonFileUpload";

const LimitationUpload = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={LimitationFileUpload} />
        <CardBody>
          <Form>
            <CommonFileUpload />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LimitationUpload;

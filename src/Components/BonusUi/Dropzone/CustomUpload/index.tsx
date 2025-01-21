import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomFileUpload } from "@/Constant";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonFileUpload from "../Common/CommonFileUpload";

const CustomUpload = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={CustomFileUpload} />
        <CardBody>
          <Form>
            <CommonFileUpload multiple />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomUpload;

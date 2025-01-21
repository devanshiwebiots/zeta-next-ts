import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultiImageUpload } from "@/Constant";
import { ToastContainer } from "react-toastify";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonFileUpload from "../Common/CommonFileUpload";

const MultiOnlyImageUpload = () => {

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={MultiImageUpload} />
        <CardBody>
          <Form>
            <ToastContainer />
            <CommonFileUpload multiple />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiOnlyImageUpload;

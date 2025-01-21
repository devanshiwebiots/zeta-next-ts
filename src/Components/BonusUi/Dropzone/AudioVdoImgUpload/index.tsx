import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleImageVideoAudioUpload } from "@/Constant";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonFileUpload from "../Common/CommonFileUpload";

const MultiVideoImageAudioUpload = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={MultipleImageVideoAudioUpload} />
        <CardBody>
          <Form>
            <CommonFileUpload multiple />
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiVideoImageAudioUpload;

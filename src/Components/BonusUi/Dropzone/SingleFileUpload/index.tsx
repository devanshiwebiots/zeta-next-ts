import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SingleFileUpload } from "@/Constant";
import { Fragment } from "react";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonFileUpload from "../Common/CommonFileUpload";

const SingleFileUploadDropzone = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={SingleFileUpload} />
          <CardBody>
            <Form>
              <CommonFileUpload />
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SingleFileUploadDropzone;

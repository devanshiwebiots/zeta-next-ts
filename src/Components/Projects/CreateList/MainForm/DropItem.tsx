import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";
import { UploadProjectFile } from "@/Constant";
import { Fragment } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";

const DropItem = () => {
    return (
    <Fragment>
      <Row>
        <Col>
          <div className="mb-3">
            <FormGroup>
              <Label>{UploadProjectFile}</Label>
              <CommonFileUpload/>
            </FormGroup>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default DropItem;

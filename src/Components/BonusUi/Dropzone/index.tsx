import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import MultiVideoImageAudioUpload from "./AudioVdoImgUpload";
import CustomUpload from "./CustomUpload";
import LimitationUpload from "./LimitationUpload";
import MultiOnlyImageUpload from "./MultiOnlyImageUpload";
import SingleFileUploadDropzone from "./SingleFileUpload";

const Dropzone = () => {
    return (
    <>
      <CommonBreadcrumb parent="Bonus Ui" pageTitle="Dropzone" />
      <Container fluid>
        <Row>
          <SingleFileUploadDropzone />
          <MultiOnlyImageUpload />
          <MultiVideoImageAudioUpload />
          <LimitationUpload />
          <CustomUpload />
        </Row>
      </Container>
    </>
  );
};

export default Dropzone;

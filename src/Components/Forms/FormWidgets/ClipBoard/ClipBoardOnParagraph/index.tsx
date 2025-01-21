import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ClipboardOnParagraph } from "@/Constant";
import { ClipBoardTextParagraph } from "@/Data/Forms/FormWidgets";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { toast } from "react-toastify";

const ClipBoardParagraph = () => {
  const [clipBoardValues, setClipBoardValues] = useState({
    value: ClipBoardTextParagraph,
    copied: false,
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardValues.value);
      setClipBoardValues({ ...clipBoardValues, copied: true });

      setTimeout(() => {
        setClipBoardValues({ ...clipBoardValues, copied: false });
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={ClipboardOnParagraph} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">Copy from paragraph</p>
            <h6 className="border rounded card-body f-w-300">
              {ClipBoardTextParagraph}
            </h6>
            <div className="mt-3">
              <Button
                className="btn-clipboard"
                color="primary"
                onClick={handleCopy}
              >
                <i className="fa fa-copy"></i> Copy
              </Button>
              {clipBoardValues.copied && (
                <span className="ms-2 text-success">Copied!</span>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipBoardParagraph;

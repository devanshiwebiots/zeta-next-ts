import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CopyPortionFromParagraph, Highlight } from "@/Constant";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { toast } from "react-toastify";

const ClipBoardHighlight = () => {
  const [highlightTextValue, setHighlightTextValue] = useState({ value: "dolor ertrsiertertt amet", copied: false });
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(highlightTextValue.value);
      setHighlightTextValue({ ...highlightTextValue, copied: true });

      setTimeout(() => {
        setHighlightTextValue({ ...highlightTextValue, copied: false });
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={CopyPortionFromParagraph} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">Copy Portion From Paragraph</p>
            <h6 className="border rounded card-body f-w-300">
              Lorem ipsum <span className="bg-primary text-white p-1">{Highlight}</span>,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <div className="mt-3">
                <Button className="btn-clipboard" color="primary" onClick={handleCopy}>
                  <i className="fa fa-copy"></i> Copy highLighted text
                </Button>
              {highlightTextValue.copied && <span className='ms-2 text-success'>Copied!</span>}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipBoardHighlight;

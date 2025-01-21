import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ClipboardOnTextInput } from "@/Constant";
import { useState } from "react";
import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { toast } from "react-toastify";

const ClipBoardText = () => {
  const [clipBoardValues, setClipBoardValues] = useState({ value: "", copied: false });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardValues.value);
      setClipBoardValues({ value: clipBoardValues.value, copied: true });
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  const handleCut = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardValues.value);
      setClipBoardValues({ value: "", copied: false });
    } catch (err) {
      toast.error("Failed to cut text: " + err);
    }
  };

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={ClipboardOnTextInput} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">Cut/copy from text input</p>
            <Input type="text" placeholder="type some text to copy / cut"value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
            <div className="mt-3">
                <Button className="btn-clipboard me-2" color="primary"  onClick={handleCopy}>
                  <i className="fa fa-copy"></i> Copy
                </Button>
                <Button className="btn-clipboard-cut" color="secondary"  onClick={handleCut}>
                  <i className="fa fa-cut"></i> Cut
                </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipBoardText;

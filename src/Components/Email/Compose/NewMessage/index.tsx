import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CommonFileUpload from "@/Components/BonusUi/Dropzone/Common/CommonFileUpload";

const NewMessage = () => {

  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <div className="email-profile">
          <div className="email-body">
            <div className="email-compose">
              <div className="email-top compose-border">
                <div className="compose-header">
                  <h4 className="mb-0">New Message</h4>
                  <Button color="primary">
                    <i className="fa fa-file me-2"></i> save
                  </Button>
                </div>
              </div>
              <div className="email-wrapper">
                <Form className="theme-form">
                  <FormGroup>
                    <Label className="col-form-label pt-0">To</Label>
                    <Input id="exampleInputEmail1" type="email" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label pt-0">Subject</Label>
                    <Input id="exampleInputPassword1" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label pt-0">Messages</Label>
                    <CKEditor editor={ClassicEditor} />
                  </FormGroup>
                  <FormGroup className="dropzone digits text-center">
                    <CommonFileUpload />
                  </FormGroup>
                </Form>
                <div className="action-wrapper">
                  <ul className="simple-list actions d-flex flex-row">
                    <li>
                      <Button color="secondary">
                        <i className="fa fa-paper-plane me-2"></i>Send
                      </Button>
                    </li>
                    <li>
                      <Button color="danger">
                        <i className="fa fa-times me-2"></i>Cancel
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default NewMessage;

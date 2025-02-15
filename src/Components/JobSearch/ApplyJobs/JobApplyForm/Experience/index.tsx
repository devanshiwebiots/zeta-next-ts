import { CompanyName, Location, Period, Position, YourExperience } from "@/Constant";
import { Fragment, SetStateAction, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ExperienceDetails = () => {
  const [multiple, setMultiple] = useState(false);
  const [startDate2, setStartDate2] = useState<any>(new Date());
  const [startDate3, setStartDate3] = useState<any>(new Date());
  const handleChange2 = (date: SetStateAction<Date | null>) => {
    setStartDate2(date);
  };
  const handleChange3 = (date: SetStateAction<Date | null>) => {
    setStartDate3(date);
  };

  return (
    <Fragment>
      <h6 className="mb-0">{YourExperience}</h6>
      <Form className="theme-form">
        <Row>
          <Col xl="6 xl-100">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput7">
                {Location}:<span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlInput7" type="email" placeholder="Enter Location" />
            </FormGroup>
          </Col>
          <Col xl="6 xl-100">
            <Label className="col-form-label text-end pt-0">
              {Period}:<span className="font-danger">*</span>
            </Label>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <DatePicker className="form-control digits" selected={startDate2} onChange={handleChange2} />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <DatePicker className="form-control digits" selected={startDate3} onChange={handleChange3} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col xl="6 xl-100">
            <div className="col-form-label pt-0">
              {Position}:<span className="font-danger">*</span>
            </div>
            <FormGroup>
              <Typeahead id="basic-typeahead" labelKey="name" multiple={multiple} options={["Web Designer", "Graphic Designer", "UI Designer", "UI/UX Designer"]} placeholder="Enter Position" />
            </FormGroup>
          </Col>
          <Col xl="6 xl-100">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput8">
                {CompanyName}:<span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlInput8" type="email" placeholder="Enter Company Name" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
export default ExperienceDetails;

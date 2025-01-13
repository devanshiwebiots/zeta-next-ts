import { FirstName, LastName } from "@/Constant";
import { RegistrationFormProps } from "@/Type/Form";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Label, Row } from "reactstrap";

const Registration = (props: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    if (data !== "") {
      alert("You submitted the form and stuff!");
    }
  };
  return (
    <Row>
      <Col sm="12">
        <Form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md="12 mb-3">
              <Label>{FirstName}</Label>
              <input className="form-control" type="text" placeholder="First name" {...register("firstName", { required: true })} />
              {errors.firstName && "First name is required"}
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col md="12 mb-3">
              <Label>{LastName}</Label>
              <input className="form-control" type="text" placeholder="Last name" {...register("lastName", { required: true })} />
              {errors.lastName && "First name is required"}
              <div className="valid-feedback">{"Looks good!"}</div>
            </Col>
            <Col>
              <Button color="primary" onClick={() => props.setGoSteps(1)}>
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};
export default Registration;

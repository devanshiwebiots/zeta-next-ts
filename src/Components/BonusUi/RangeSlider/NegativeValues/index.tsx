import React, { Fragment, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Row, Col, Card, CardBody, Label, Form, CardHeader } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Default, NegativeValues } from "@/Constant";

const NegativeValuesSlider = () => {
  const [values2, setValues2] = useState([-10]);
  return (
    <Fragment>
      <Col sm='12' xl='6'>
        <Card>
          <CommonCardHeader heading={NegativeValues} />
          <CardBody>
            <Form className='theme-form form-label-align-right range-slider'>
              <Row className='mb-0'>
                <Col md='2'>
                  <Label>{Default}</Label>
                </Col>
                <Col md='10'>
                  <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "1em" }}>
                    <Range
                      values={values2}
                      step={-1}
                      min={-20}
                      max={0}
                      onChange={(values2) => setValues2(values2)}
                      renderTrack={({ props, children }) => (
                        <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px", display: "flex", width: "100%" }}>
                          <output style={{ marginTop: "12px" }}>0</output>
                          <div ref={props.ref} style={{ height: "5px", width: "100%", borderRadius: "4px", background: getTrackBackground({ values: values2, colors: ["#4d8aff", "#ccc"], min: -20, max: -0 }), alignSelf: "center" }}>
                            {children}
                          </div>
                          <output style={{ marginTop: "12px" }}>-20</output>
                        </div>
                      )}
                      renderThumb={({ props, isDragged }) => {
                        const { key, ...otherProps } = props; // Destructure key from props
                      
                        return (
                          <div key={key} {...otherProps} style={{ ...otherProps.style, height: "35px", width: "35px", borderRadius: "30px", backgroundColor: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 2px 6px #AAA" }}>
                            <div style={{ height: "16px", width: "5px", backgroundColor: isDragged ? "#4d8aff" : "#CCC" }} />
                          </div>
                        );
                      }}
                    />
                    <output style={{ marginTop: "12px" }} id='output'>
                      {values2[0]}
                    </output>
                  </div>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default NegativeValuesSlider;

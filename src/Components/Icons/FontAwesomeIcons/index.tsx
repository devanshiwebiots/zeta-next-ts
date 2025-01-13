import React, { useState, useCallback } from "react";
import { Container, Row } from "reactstrap";
import { FontAwesomeData } from "@/Data/Icons/FontAwesomeIcons";
import FontAwesomeCommon from "./Common";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import IconMarkUp from "../IconMarkUp";
import { FontAwesome } from "@/Constant";

const FontAwesomeIcons = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");
  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="fa fa-' + tag + '"></i>',
    });
    setIcon({
      icon: "fa fa-" + tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <CommonBreadcrumb pageTitle={FontAwesome} parent="Icons" />
      <Container fluid>
        {FontAwesomeData.map((icons, index) => {
          return (
            <Row key={index}>
              <FontAwesomeCommon iconType={icons.data} title={icons.title} parentCallback={callback} />
            </Row>
          );
        })}
      </Container>
      <IconMarkUp iTag={iTag} icons={icon} />
    </>
  );
};
export default FontAwesomeIcons;

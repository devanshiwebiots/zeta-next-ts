//@ts-nocheck
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PositionUK, UKMapSubHeading,  } from "@/Data/Maps";

const UKMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader heading="Leaflet UK MAP" subHeading={UKMapSubHeading} />
        <CardBody>
          <MapContainer className="jvector-map-height" style={{ height: 389, width: 710.5 }} zoom={13} center={PositionUK} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true}  easeLinearity={0.35}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default UKMap;

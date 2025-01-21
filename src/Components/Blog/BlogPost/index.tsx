import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import DropItems from "./DropItems";
import MainForm from "./MainForm";

const BlogPost = () => {
  return (
    <>
      <CommonBreadcrumb parent="Blog" pageTitle="Blog Post" />
      <Container fluid>
        <Row>
            <Col sm="12">
              <Card>
                <CommonCardHeader heading="Post Edit" />
                <CardBody className="add-post">
                  <MainForm />
                  <DropItems />
                </CardBody>
              </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPost;

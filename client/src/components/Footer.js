import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/footer.scss"

const Footer = () => {
  return (
    <Container fluid className=" footer shadow-sm bg-dark text-light">
      <Row>
        <Col>Bryan Benjumea &copy; 2022</Col>
      </Row>
    </Container>
  );
};

export default Footer;

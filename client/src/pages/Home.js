import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Modal from "src/components/Modal";

const Home = () => {
  const [show, setShow] = useState(false);

  const [description, setdescription] = useState("");

  const handleClose = () => setShow(false);
  const handleClick = async (i) => {
    await axios
      .get(`http://localhost:8734/api/get/${i}`)
      .then((res) => {
        console.log(res.data);

        setdescription(res.data.description);
        setShow(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Modal handleClose={handleClose} show={show} description={description} />
      <Container>
        <Row className="d-flex justify-content-center align-items-center text-center mt-3">
          <Col>
            <h1>Hello World</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center text-center mt-3">
          <Col className="d-flex justify-content-center align-items-center gap-3">
            <Button
              className="px-4"
              onClick={() => {
                handleClick(1);
              }}>
              1
            </Button>
            <Button
              className="px-4"
              onClick={() => {
                handleClick(2);
              }}>
              2
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

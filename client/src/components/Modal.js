import React from "react";
import {  Modal as ModalBs } from "react-bootstrap";

const Modal = ({id, description ,handleClose, show}) => {
  
  return (
    <>
      <ModalBs show={show} onHide={handleClose}>
        <ModalBs.Header closeButton>
          <ModalBs.Title>Staples User</ModalBs.Title>
        </ModalBs.Header>
        <ModalBs.Body>Description {description}</ModalBs.Body>
      </ModalBs>
    </>
  );
};

export default Modal;

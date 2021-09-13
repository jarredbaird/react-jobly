import React, { useState } from "react";
import "./Card.css";
import Modal from "./Modal.js";

const CompanyCard = () => {
  const [showModal, toggleShowModal] = useState(false);
  const toggle = () => {
    toggleShowModal(!showModal);
  };
  return (
    <>
      <div className="card Card">
        <h5 className="card-title">Special Title Treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button class="btn btn-primary">Button</button>
          <button type="button" class="btn btn-primary" onClick={toggle}>
            Launch demo modal
          </button>
        </div>
      </div>
      {console.log(showModal)}
      {showModal ? <Modal actions={toggle} /> : null}
    </>
  );
};

export default CompanyCard;

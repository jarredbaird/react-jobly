import React, { useContext } from "react";
import "../Card.css";
import Modal from "../Modal.js";
import ModalContext from "../ModalContext";

const CompanyCard = () => {
  const { showModal, toggleShowModal } = useContext(ModalContext);
  return (
    <div className="container">
      <div className="card Card">
        <h5 className="card-title">Special Title Treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <div
          class="btn-group m-1"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button class="btn btn-primary">See Jobs</button>
          <button type="button" class="btn btn-info" onClick={toggleShowModal}>
            Show Company
          </button>
        </div>
      </div>

      {showModal ? <Modal actions={toggleShowModal} /> : null}
    </div>
  );
};

export default CompanyCard;

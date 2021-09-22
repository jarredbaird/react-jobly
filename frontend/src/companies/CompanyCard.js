import React, { useContext } from "react";
import "../Card.css";
import Modal from "../Modal.js";
import ModalContext from "../ModalContext";

const CompanyCard = ({ company }) => {
  const { handle, name, description } = company;
  const { shownCompany, setShownCompany } = useContext(ModalContext);

  const showThisModal = () => {
    setShownCompany(handle);
  };

  return (
    <div className="container">
      <div className="card Card p-1">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button className="btn btn-primary">See Jobs</button>
          <button
            onClick={showThisModal}
            type="button"
            className="btn btn-info"
          >
            Show Company
          </button>
        </div>
      </div>

      {handle === shownCompany ? <Modal object={company} /> : null}
    </div>
  );
};

export default CompanyCard;

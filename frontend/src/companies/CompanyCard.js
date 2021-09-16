import React, { useContext } from "react";
import "../Card.css";
import Modal from "../Modal.js";
import ModalContext from "../ModalContext";

const CompanyCard = ({ company }) => {
  const {
    handle,
    name,
    description,
    num_employees,
    logo_url = "",
    show,
  } = company;
  const [companies, setCompanies] = useContext(ModalContext);

  const toggleModal = () => {
    setCompanies(companies, handle, !show);
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
          <button onClick={toggleModal} type="button" className="btn btn-info">
            Show Company
          </button>
        </div>
      </div>

      {show ? <Modal object={company} /> : null}
    </div>
  );
};

export default CompanyCard;

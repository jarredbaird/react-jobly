import React, { useContext } from "react";
import ModalContext from "../ModalContext";

const CompanyDetailModal = ({ company }) => {
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
    setCompanies(companies);
  };

  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">I'm a company</h5>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>I'm the best company in the world</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={toggleModal}
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          See Jobs
        </button>
      </div>
    </>
  );
};

export default CompanyDetailModal;

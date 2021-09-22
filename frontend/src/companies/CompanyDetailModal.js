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
  const { hideCompanyModal } = useContext(ModalContext);

  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">{name}</h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={hideCompanyModal}
        ></button>
      </div>
      <div className="modal-body">
        <p>{description}</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={hideCompanyModal}
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

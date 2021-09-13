import React, { useState } from "react";
import useToggleState from "./useToggleState";
import { useParams } from "react-router-dom";
import CompanyDetailModal from "./companies/CompanyDetailModal.js";
import JobDetailModal from "./jobs/JobDetailModal.js";

const Modal = () => {
  const [showModal, toggleShowModal] = useState(true);
  const toggle = () => {
    toggleShowModal(!showModal);
  };

  const { jobid } = useParams();

  return (
    <div className="modal" style={{ display: "block" }} tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          {jobid ? (
            <JobDetailModal actions={toggle} />
          ) : (
            <CompanyDetailModal actions={toggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

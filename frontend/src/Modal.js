import React, { useState } from "react";
import useToggleState from "./useToggleState";
import { useParams } from "react-router-dom";
import CompanyDetailModal from "./CompanyDetailModal.js";
import JobDetailModal from "./JobDetailModal.js";

const Modal = () => {
  const [showModal, toggleShowModal] = useState(true);
  const toggle = () => {
    toggleShowModal(!showModal);
  };
  console.log(useParams());
  const { jobid } = useParams();
  console.log(jobid);
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

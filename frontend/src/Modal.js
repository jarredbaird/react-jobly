import React from "react";
import { useParams } from "react-router-dom";
import CompanyDetailModal from "./companies/CompanyDetailModal.js";
import JobDetailModal from "./jobs/JobDetailModal.js";

const Modal = ({ object }) => {
  const { jobid } = useParams();

  return (
    <div className="modal" style={{ display: "block" }} tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          {jobid ? (
            <JobDetailModal job={object} />
          ) : (
            <CompanyDetailModal company={object} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

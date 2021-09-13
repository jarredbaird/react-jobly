import React from "react";

const JobDetailModal = ({ actions }) => {
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">I'm a job</h5>
        <button type="button" className="btn-close" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>I'm the best job in the world</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={actions}>
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </>
  );
};

export default JobDetailModal;

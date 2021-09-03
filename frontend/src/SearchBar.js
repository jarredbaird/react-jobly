import React from "react";

const SearchBar = () => {
  return (
    <div className="row">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for something..."
        />
        <button className="btn btn-primary" type="button">
          Button
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

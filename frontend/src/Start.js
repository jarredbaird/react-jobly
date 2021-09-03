import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar.js";
import Routes from "./Routes.js";

const Start = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default Start;

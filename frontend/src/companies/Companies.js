import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard.js";
import useToggleState from "../useToggleState.js";
import ModalContext from "../ModalContext.js";
import JoblyApi from "../api/api";

const Companies = () => {
  const INITIAL_STATE = [];
  const [showModal, toggleShowModal] = useToggleState(false);
  const [companies, setCompanies] = useState(INITIAL_STATE);

  useEffect(function getCompaniesOnLoad() {
    find();
  }, []);

  async function find(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  debugger;
  return (
    <ModalContext.Provider value={{ showModal, toggleShowModal, companies }}>
      <CompanyCard />
    </ModalContext.Provider>
  );
};

export default Companies;

import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard.js";
import useShowProp from "../useShowProp.js";
import ModalContext from "../ModalContext.js";
import JoblyApi from "../api/api";

const Companies = () => {
  const INITIAL_STATE = [];
  const [companies, setCompanies] = useShowProp(INITIAL_STATE);

  useEffect(function getCompaniesOnLoad() {
    find();
  }, []);

  async function find(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <ModalContext.Provider value={{ companies, setCompanies }}>
      {companies.map((company) => {
        return <CompanyCard key={company.handle} company={company} />;
      })}
    </ModalContext.Provider>
  );
};

export default Companies;

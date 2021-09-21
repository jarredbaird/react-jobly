import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard.js";
import useShowProp from "../useShowProp.js";
import ModalContext from "../ModalContext.js";
import JoblyApi from "../api/api";

const Companies = () => {
  const [companies, setCompanies] = useShowProp([
    {
      handle: "anderson-arias-morrow",
      name: "Anderson, Arias and Morrow",
      description:
        "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
      numEmployees: 245,
      logoUrl: "/logos/logo3.png",
    },
  ]);
  setCompanies(companies);
  debugger;

  useEffect(() => {
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

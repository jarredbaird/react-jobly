import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard.js";
import useModalToShow from "../useModalToShow.js";
import ModalContext from "../ModalContext.js";
import JoblyApi from "../api/api";

const Companies = () => {
  const [companies, setCompanies] = useState([{}]);
  const [shownCompany, setShownCompany, hideCompanyModal] =
    useModalToShow(null);

  useEffect(() => {
    find();
  }, []);

  async function find(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <ModalContext.Provider
        value={{ shownCompany, setShownCompany, hideCompanyModal }}
      >
        {companies.map((company) => {
          return (
            <div className="col">
              <CompanyCard key={company.handle} company={company} />
            </div>
          );
        })}
      </ModalContext.Provider>
    </div>
  );
};

export default Companies;

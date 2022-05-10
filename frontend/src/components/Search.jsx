import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterButton from "@components/FilterButton";
import "@assets/Common.css";
import "@assets/Search.css";

// commentaires

export default function Search({ setJobs }) {
  const [inputs, setInputs] = useState({});
  const [filters, setFilters] = useState([]);
  // let API = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?motsCles=${inputs.job}&typeContrat=${filters}&experienceLibelle=${inputs.experience}&departement=${inputs.lieu}&salaireMin=${inputs.salaire}`;

  function getFullAPI(
    inputJob,
    contrat,
    exp,
    lieu,
    salaire,
    teletravail,
    alternance
  ) {
    let API = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search`;
    if (inputJob) {
      API += `?motsCles=${inputJob}`;
    }
    if (contrat) {
      if (contrat === "Alternance") {
        API += `&typeContrat= CDD`;
      }
      API += `&typeContrat=${contrat}`;
    }
    if (exp) {
      API += `&experienceLibelle=${exp}`;
    }
    if (lieu) {
      API += `&departement=${lieu}`;
    }
    if (salaire) {
      API += `&salaireMin=${salaire}`;
    }
    if (teletravail) {
      API += `&tempsPlein=${teletravail}`;
    }
    if (alternance) {
      API += "?motsCles=alternance";
    }
    return API;
  }
  const API = getFullAPI(
    inputs.job,
    filters,
    inputs.experience,
    inputs.lieu,
    inputs.salaire,
    inputs.remote
  );
  console.warn(API);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  useEffect(() => {
    console.warn(filters);
  }, [filters]);

  useEffect(() => {
    console.warn(inputs);
  }, [inputs]);

  const handleGetJobs = () => {
    axios
      .get(API, config)
      .then((response) => response.data)
      .then((data) => {
        console.warn(data.resultats);
        setJobs(data.resultats);
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleGetJobs();
  };
  return (
    <div className="searchjob">
      {/* <p>
        {jobs.map((job) => (
          <div>{job.id}</div>
        ))}
      </p> */}
      <form className="formjob" onSubmit={handleSubmit}>
        <div className="fieldscontainer">
          <input
            type="search"
            id="job"
            value={inputs.job || ""}
            placeholder="Métier"
            name="job"
            onChange={handleChange}
          />
          <input
            type="search"
            id="lieu"
            value={inputs.lieu || ""}
            name="lieu"
            placeholder="Département"
            onChange={handleChange}
          />
          <select name="salaire" id="salaire" onChange={handleChange}>
            <option value={inputs.salaire || ""}>Salaire (€)</option>
            <option>Non précisé</option>
            <option>25.000</option>
            <option>30.000</option>
            <option>40.000</option>
            <option>50.000</option>
          </select>
          <select id="remote" name="remote" onChange={handleChange}>
            <option value={inputs.remote || ""}>Télétravail</option>
            <option>Non précisé</option>
            <option>Complet</option>
            <option>Régulier</option>
            <option>Occasionnel</option>
            <option>Non</option>
          </select>
          <select id="experience" name="experience" onChange={handleChange}>
            <option value={inputs.experience || ""}>Experience</option>
            <option>Non précisé</option>
            <option>Débutant accepté</option>
            <option>Expérience exigée de 1 An(s)</option>
            <option>Expérience exigée de 2 An(s)</option>
            <option>Expérience exigée de 5 An(s)</option>
          </select>
        </div>
        <div className="filterbutton">
          <div className="filterbutton1">
            <FilterButton setFilters={setFilters} label="CDI" />
            <FilterButton setFilters={setFilters} label="CDD" />
          </div>
          <div className="filterbutton2">
            <FilterButton setFilters={setFilters} label="Alternance" />
            <FilterButton setFilters={setFilters} label="Stage" />
          </div>
        </div>
        <div className="buttonform">
          <input type="submit" value="FIND TECH JOB !" />
        </div>
      </form>
    </div>
  );
}

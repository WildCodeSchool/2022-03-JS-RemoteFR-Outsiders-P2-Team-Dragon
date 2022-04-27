import React, { useState } from "react";
import FilterButton from "@components/FilterButton";
import "@assets/Common.css";
import "@assets/Search.css";

export default function Search() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn(inputs);
  };
  
  return (
    <div className="searchjob">
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
            placeholder="Localisation"
            onChange={handleChange}
          />
          <select name="salaire" id="salaire" onChange={handleChange}>
            <option value={inputs.salaire || ""}>Salaire</option>
            <option> non précisé </option>
            <option>25k€ - 30k€</option>
            <option>30k€ - 35k€</option>
            <option>35k€ - 40k€</option>
            <option>40k€ - 50k€</option>
          </select>
          <select id="remote" name="remote" onChange={handleChange}>
            <option value={inputs.remote || ""}>Télétravail</option>
            <option> non précisé </option>
            <option>Complet</option>
            <option>Régulier (2 à 3j/s)</option>
            <option>Occasionnel (qq j/m)</option>
            <option>Non</option>
          </select>
          <select id="experience" name="experience" onChange={handleChange}>
            <option value={inputs.experience || ""}>Experience</option>
            <option> non précisé </option>
            <option>0 à 2 ans</option>
            <option>3 à 5 ans</option>
            <option>5 à 10 ans</option>
          </select>
        </div>
        <div className="filterbutton">
          <FilterButton onChange={handleChange} label="CDI" />
          <FilterButton onChange={handleChange} label="CDD" />
          <FilterButton onChange={handleChange} label="Alternance" />
          <FilterButton onChange={handleChange} label="Stage" />
        </div>
        <div className="buttonform">
          <input type="submit" value="FIND TECH JOB !" />
        </div>
      </form>
    </div>
  );
}

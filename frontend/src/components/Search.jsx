import React, { useState } from "react";
import FilterButton from "@components/FilterButton";
import "@assets/Common.css";
import "@assets/Search.css";
export default function Search() {
  const [metier, setMetier] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.warn(`bouton cliqué ${metier}`);
  }
  return (
    <div className="searchjob">
      <form className="formjob" onSubmit={handleClick}>
        <div className="fieldscontainer">
          <input
            type="search"
            id="job"
            value={metier}
            placeholder="Métier"
            name="job"
            onChange={(e) => {
              setMetier(e.target.value);
            }}
          />
          <input
            type="search"
            id="lieu"
            name="lieu"
            placeholder="Localisation"
          />
          <select name="salaire" id="salaire">
            <option value="">Salaire</option>
            <option>25k€ - 30k€</option>
            <option>30k€ - 35k€</option>
            <option>35k€ - 40k€</option>
            <option>40k€ - 50k€</option>
          </select>
          <select id="remote" name="remote">
            <option value="">Télétravail</option>
            <option>Complet</option>
            <option>Régulier (2 à 3j/s)</option>
            <option>Occasionnel (qq j/m)</option>
            <option>Non</option>
          </select>
          <select id="experience" name="experience">
            <option value="">Experience</option>
            <option>0 à 2 ans</option>
            <option>3 à 5 ans</option>
            <option>5 à 10 ans</option>
          </select>
        </div>
        <div className="filterbutton">
          <FilterButton label="CDI" />
          <FilterButton label="CDD" />
          <FilterButton label="Alternance" />
          <FilterButton label="Stage" />
        </div>
        <div className="buttonform">
          <input type="submit" value="FIND TECH JOB !" />
        </div>
      </form>
    </div>
  );
}

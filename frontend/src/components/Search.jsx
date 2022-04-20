import React from "react";
import FilterButton from "./FilterButton";
import "../assets/Search.css";
import "../assets/Common.css";

export default function Search() {
  return (
    <div className="searchjob">
      <form className="formjob">
        <div className="fieldscontainer">
          <input type="search" id="job" placeholder="Métier" name="job" />
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
          <input type="button" value="FIND TECH JOB !" />
        </div>
      </form>
    </div>
  );
}

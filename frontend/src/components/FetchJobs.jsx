import React from "react";
import axios from "axios";

export default function FetchJobs() {
  const [statejob, setStateJob] = React.useState("hello");

  const API = "https://candidat.pole-emploi.fr/offres/recherche/detail/3136965";
  const token = JSON.parse(sessionStorage.getItem("data"));
  /* const token = user.data.id; take only token and save in token variable */

  const getJob = () => {
    axios
      .get(API, { headers: { Authorization: `Bearer ${token}` } })

      .then((response) => response.data)
      .then((data) => {
        setStateJob(data[0]);
      });
  };
  return (
    <div>
      <button type="button" statejob={statejob} onClick={getJob}>
        Jobs
      </button>
    </div>
  );
}

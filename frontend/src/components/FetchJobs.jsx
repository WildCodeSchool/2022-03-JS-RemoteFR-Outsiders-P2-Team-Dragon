// import React from "react";
// import axios from "axios";

// export default function FetchJobs() {
//   const [statejob, setStateJob] = React.useState("Hello");
//   const motCles = "informatique";
//   const API = `https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search?motsCles=${motCles}`;

//   const config = {
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//   };

//   const handleGetJobs = () => {
//     axios
//       .get(API, config)
//       .then((response) => response.data)
//       .then((data) => {
//         console.warn(data);
//         setStateJob(data.statejob);
//       });
//   };

//   return (
//     <div>
//       <button type="button" statejob={statejob} onClick={handleGetJobs}>
//         Jobs
//       </button>
//     </div>
//   );
// }

// import React from "react";
// import FavoriteButton from "./FavoriteButton";
// import styles from "../assets/Accueil.module.css";
// import Details from "./Details";

// const offerTemplate = {
//   title: "Développeur Full-Stack",
//   contract: "CDI",
//   workingHours: "35h",
//   Company: "Microsoft",
//   prevExperience: "+10ans",
//   Description: "ipsum dolorem",
// };

// function JobOffer({
//   sendOffreToSuivi,
//   showFavoriteButton,
//   handleClickButtonFavorite,
// }) {
//   return (
//     <div>
//       <div click ici>
//         {showFavoriteButton ? (
//           <FavoriteButton
//             sendOffreToSuivi={sendOffreToSuivi}
//             showFavoriteButton
//             handleClickButtonFavorite={handleClickButtonFavorite}
//           />
//         ) : (
//           console.warn("pas de button")
//         )}
//       </div>
//       <div>
//         <h1>{offerTemplate.title}</h1>
//       </div>
//       <div>
//         {offerTemplate.contract}
//         {" | "}
//         {offerTemplate.workingHours}
//         {" | "}
//         {offerTemplate.Company}
//         {" | "}
//         {offerTemplate.prevExperience}
//       </div>
//       <Details offerTemplate={offerTemplate} />;
//     </div>
//   );
// }

// export default JobOffer;

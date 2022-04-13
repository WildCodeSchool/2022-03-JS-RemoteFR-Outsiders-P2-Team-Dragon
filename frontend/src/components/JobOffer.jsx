import React from "react";

const offerTemplate = {
  title: "Développeur Full-Stack",
  contract: "CDI",
  workingHours: "35h",
  Company: "Microsoft",
  prevExperience: "+10ans",
};

function JobOffer() {
  return (
    <div>
      <div className="separatingLine" />
      <div>
        <h1>{offerTemplate.title}</h1>
      </div>
    </div>
  );
}

export default JobOffer;

import React from "react";

function applicationDetails({ commentsInFeedback }) {
  return (
    <div className="detailsDiv">
      <form className="detailsForm">
        <input
          type="text"
          name="applicationDate"
          id="applicationDate"
          width="200px"
          placeholder="Date"
        />
        <input
          type="text"
          name="contactName"
          id="contactName"
          placeholder="NOM Prenom"
        />
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Entreprise"
        />
        <input type="text" name="phone" id="phone" placeholder="Nº téléphone" />
        <input type="text" name="mail" id="mail" placeholder="Mail" />

        {commentsInFeedback ? (
          <textarea
            type="text"
            name="applicationComments"
            id="applicationComments"
            placeholder="Mon Feedback"
            rows="5"
          />
        ) : null}
      </form>
    </div>
  );
}

export default applicationDetails;

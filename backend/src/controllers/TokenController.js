const fetch = require("node-fetch");

const { CLIENT_ID, CLIENT_SECRET, SCOPE, GRANT_TYPE, REALM } = process.env;
const API = `https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=${REALM}&grant_type=${GRANT_TYPE}&Content-Type=application/x-www-form-urlencoded&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=${SCOPE}`;

class TokenController {
  static getToken = async (req, res) => {
    // fetch est à utiliser via le package node-fetch
    // npm i -S node-fetch
    console.log(API);
    const response = await fetch(API, {
      method: "post",
    });
    const json = await response.json();
    console.log(json);
    res.send(json.access_token); // je renvoie mon token à mon client
  };

  static findAllOffers = (req, res) => {
    res.send("Find All Offers");
  };

  static findOne = (req, res) => {
    res.send("Find One Offer");
  };
}

module.exports = TokenController;

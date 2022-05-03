const express = require("express");
const fetch = require("node-fetch");

const port = process.env.PORT || 5500;
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

const { CLIENT_ID, CLIENT_SECRET, SCOPE, GRANT_TYPE, REALM } = process.env;
const API = `https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=${REALM}&grant_type=${GRANT_TYPE}&Content-Type=application/x-www-form-urlencoded&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=${SCOPE}`;

app.get("/api/token", async (req, res) => {
  console.warn(API);
  const response = await fetch(API, {
    method: "post",
  });
  const json = await response.json();
  console.warn(json);
  res.send(json.access_token); // je renvoie mon token à mon client
});

app.listen(port, () => console.warn(`Server is running on port ${port}`));

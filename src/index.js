require("dotenv").config();
const app = require("./app");
const knex = require("./knex/config");
const tables = require("./database/tables");

async function start() {
  await tables(knex);
  app.listen(process.env.PORT, () =>
    console.log("listening on port " + process.env.PORT)
  );
}

start();

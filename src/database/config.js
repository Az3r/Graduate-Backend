const { knex } = require("knex");

const database = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: "3306",
    user: "azer",
    password: "12345",
    database: "graduation",
  },
});

module.exports = database;

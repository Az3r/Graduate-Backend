// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      port: "3306",
      user: "azer",
      password: "12345",
      database: "graduation",
    },
    seeds: {
      directory: "./src/knex/seeds",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: "localhost",
      port: "3306",
      user: "azer",
      password: "12345",
      database: "graduation",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

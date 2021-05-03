exports.seed = async function (/** @type {import('knex').Knex} */ knex) {
  // Deletes ALL existing entries
  await knex.schema.dropTable("developer_code_problems_comments");
  await knex.schema.dropTable("company_code_problems_comments");
  await knex.schema.dropTable("company_mcq_problems_comments");
  await knex.schema.dropTable("developer_mcq_problems_comments");
  await knex.schema.dropTable("mcq_problems");
  await knex.schema.dropTable("code_problems");
  await knex.schema.dropTable("companies");
  await knex.schema.dropTable("developers");

  // Insert seed entries
  await knex.schema
    .createTable("developers", (table) => {
      table.increments("id").primary();
      table.string("email", 128).unique().index().notNullable();
      table.string("avatar", 128).notNullable();
      table.string("name", 128).notNullable();
      table.string("role", 32).notNullable();
      table.timestamp("created_on").defaultTo(knex.fn.now());
      table.timestamp("modifie_at").defaultTo(knex.fn.now());
    })
    .createTable("companies", (table) => {
      table.increments("id").primary();
      table.string("email", 128).unique().index().notNullable();
      table.string("avatar", 128).notNullable();
      table.string("name", 128).notNullable();
      table.string("role", 32).notNullable();
      table.timestamp("created_on").defaultTo(knex.fn.now());
      table.timestamp("modifie_at").defaultTo(knex.fn.now());
    })
    .createTable("code_problems", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("content").notNullable();
      table.integer("difficulty").notNullable();
      table.integer("score").notNullable();
      table.boolean("published").notNullable();
      table.boolean("deleted").notNullable();
      table
        .integer("owner")
        .unsigned()
        .references("id")
        .inTable("developers")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table
        .integer("companyId")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table.timestamp("created_on").defaultTo(knex.fn.now());
      table.timestamp("modifie_at").defaultTo(knex.fn.now());
      table.string("language", 16).notNullable();
    })
    .createTable("mcq_problems", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("content").notNullable();
      table.integer("difficulty").notNullable();
      table.integer("score").notNullable();
      table.boolean("published").notNullable();
      table.boolean("deleted").notNullable();
      table
        .integer("owner")
        .unsigned()
        .references("id")
        .inTable("developers")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table
        .integer("companyId")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onDelete("SET NULL")
        .onUpdate("CASCADE");
      table.timestamp("created_on").defaultTo(knex.fn.now());
      table.timestamp("modifie_at").defaultTo(knex.fn.now());
    })
    .createTable("developer_mcq_problems_comments", (table) => {
      table
        .integer("problem_id")
        .unsigned()
        .references("id")
        .inTable("mcq_problems")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("developer_id")
        .unsigned()
        .references("id")
        .inTable("developers")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_on").defaultTo(knex.fn.now());
      table.timestamp("modifie_at").defaultTo(knex.fn.now());
      table.primary(["problem_id", "developer_id"]);
    })
    .createTable("company_mcq_problems_comments", (table) => {
      table
        .integer("problem_id")
        .unsigned()
        .references("id")
        .inTable("mcq_problems")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_on").defaultTo(knex.fn.now());
      table.timestamp("modifie_at").defaultTo(knex.fn.now());
      table.primary(["problem_id", "company_id"]);
    })
    .createTable("developer_code_problems_comments", (table) => {
      table
        .integer("problem_id")
        .unsigned()
        .references("id")
        .inTable("code_problems")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("developer_id")
        .unsigned()
        .references("id")
        .inTable("developers")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_on").defaultTo(knex.fn.now());
      table.timestamp("modifie_at").defaultTo(knex.fn.now());
      table.primary(["problem_id", "developer_id"]);
    })
    .createTable("company_code_problems_comments", (table) => {
      table
        .integer("problem_id")
        .unsigned()
        .references("id")
        .inTable("code_problems")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("company_id")
        .unsigned()
        .references("id")
        .inTable("companies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_on").defaultTo(knex.fn.now());
      table.timestamp("modifie_at").defaultTo(knex.fn.now());
      table.primary(["problem_id", "company_id"]);
    });
};

const database = require("./config");

database.schema
  .createTableIfNotExists("developers", (table) => {
    table.increments("id").primary();
    table.string("email", 128).unique().index();
    table.string("avatar", 128);
    table.string("name", 128);
    table.string("role", 32);
    table.timestamp("created_on").notNullable();
    table.timestamp("modifie_at").notNullable();
  })
  .createTableIfNotExists("companies", (table) => {
    table.increments("id").primary();
    table.string("email", 128).unique().index();
    table.string("avatar", 128);
    table.string("name", 128);
    table.string("role", 32);
    table.timestamp("created_on").notNullable();
    table.timestamp("modifie_at").notNullable();
  })
  .createTableIfNotExists("code_problems", (table) => {
    table.increments("id").primary();
    table.string("title");
    table.string("content");
    table.integer("difficulty");
    table.integer("score");
    table.boolean("published");
    table.boolean("deleted");
    table
      .foreign("owner")
      .references("developers.id")
      .comment("the id of developer who creates this problem");
    table
      .foreign("companyId")
      .references("companies.id")
      .comment("the id company whose developer creates this problem");
    table.timestamp("created_on").notNullable();
    table.timestamp("modifie_at").notNullable();
    table.string("language", 16);
  })
  .createTableIfNotExists("mcq_problems", (table) => {
    table.increments("id").primary();
    table.string("title");
    table.string("content");
    table.integer("difficulty");
    table.integer("score");
    table.boolean("published");
    table.boolean("deleted");
    table
      .foreign("owner")
      .references("developers.id")
      .onDelete("SET NULL")
      .onUpdate("CASCADE")
      .comment("the id of developer who creates this problem");
    table
      .foreign("companyId")
      .references("companies.id")
      .comment("the id company whose developer creates this problem");
    table.timestamp("created_on").notNullable();
    table.timestamp("modifie_at").notNullable();
  })
  .createTableIfNotExists("developer_mcq_problems_comments", (table) => {
    table
      .foreign("problem_id")
      .references("code_problems.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("developer_id")
      .references("developers.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_on").notNullable();
    table.timestamp("modifie_at").notNullable();
    table.primary(["problem_id", "developer_id"]);
  })
  .createTableIfNotExists("company_mcq_problems_comments", (table) => {
    table
      .foreign("problem_id")
      .references("code_problems.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("company_id")
      .references("developers.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_on").notNullable();
    table.timestamp("modifie_at").notNullable();
    table.primary(["problem_id", "company_id"]);
  })
  .createTableIfNotExists("developer_code_problems_comments", (table) => {
    table
      .foreign("problem_id")
      .references("code_problems.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("developer_id")
      .references("developers.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_on").notNullable();
    table.timestamp("modifie_at").notNullable();
    table.primary(["problem_id", "developer_id"]);
  })
  .createTableIfNotExists("company_code_problems_comments", (table) => {
    table
      .foreign("problem_id")
      .references("code_problems.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("company_id")
      .references("developers.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_on").notNullable();
    table.timestamp("modifie_at").notNullable();
    table.primary(["problem_id", "company_id"]);
  });

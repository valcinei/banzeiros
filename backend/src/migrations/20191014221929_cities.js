
exports.up = function(knex) {
  return knex.schema
      .createTable("cities", (table)=> {
        table.increments("id");
        table.string("name").unsigned().notNullable();
        table.integer("state_id").unsigned().notNullable();
        table.foreign("state_id")
            .references("id")
            .inTable("states");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("cities");
};




exports.up = function(knex) {
  return knex.schema
      .createTable("boats", (table)=> {
        table.increments("id");
        table.string("name")
            .unsigned()
            .notNullable();
        table.timestamp("created_at")
            .defaultTo(knex.fn.now());
        table.timestamp("updated_at")
            .defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("boats");
};

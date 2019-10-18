
exports.up = function(knex) {
  return knex.schema
      .createTable("habors", (table)=> {
        table.increments("id");
        table.string("name")
            .unsigned()
            .notNullable();
        table.string("location")
            .unsigned()
            .notNullable();
        table.string("obs");
        table.integer("city_id");
        table.foreign("city_id")
            .references("id")
            .inTable("cities");

        table.timestamp("created_at")
            .defaultTo(knex.fn.now());
        table.timestamp("updated_at")
            .defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("habors");
};



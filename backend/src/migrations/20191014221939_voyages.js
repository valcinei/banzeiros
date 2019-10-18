
exports.up = function(knex) {
  return knex.schema
      .createTable("voyages", (table)=> {
        table.increments("id");
        table.string("description")
            .unsigned()
            .notNullable();
        table.string("duration")
            .unsigned()
            .notNullable();
        table.string("departure_hour")
            .unsigned()
            .notNullable();
        table.string("arrival_hour")
            .unsigned()
            .notNullable();
        table.string("departure_weekday")
            .unsigned()
            .notNullable();
        table.string("arrival_weekday")
            .unsigned()
            .notNullable();

        table.integer("departure_habor_id")
            .unsigned()
            .notNullable();
        table
            .foreign("departure_habor_id")
            .references("id")
            .inTable("habors");

        table.integer("arrival_habor_id")
            .unsigned()
            .notNullable();
        table
            .foreign("arrival_habor_id")
            .references("id")
            .inTable("habors");

        table.integer("boat_id")
            .unsigned()
            .notNullable();
        table
            .foreign("boat_id")
            .references("id")
            .inTable("boats");

        table.timestamp("created_at")
            .defaultTo(knex.fn.now());
        table.timestamp("updated_at")
            .defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("voyages");
};



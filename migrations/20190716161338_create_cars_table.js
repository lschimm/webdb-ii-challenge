exports.up = function(knex) {
  // changes to the db schema
  return knex.schema.createTable("cars", tbl => {
    // add a primary key named id, integer, auto-increment
    tbl.increments();

    // other columns
    tbl.number("vin").notNullable();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.decimal("mileage").notNullable();
  });
};

exports.down = function(knex) {
  // undo changes to the db schema
  return knex.schema.dropTableExists("cars");
};

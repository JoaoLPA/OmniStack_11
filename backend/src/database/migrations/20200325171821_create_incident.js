exports.up = async function(knex) {
  await knex.schema.createTable("incidents", function(t) {
    t.increments();
    t.string("title").notNullable();
    t.string("description").notNullable();
    t.decimal("value").notNullable();
    t.string("ong_id").notNullable();
    t.timestamps();

    t.foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("incidents");
};

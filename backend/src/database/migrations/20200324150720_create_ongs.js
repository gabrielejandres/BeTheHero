//método up é responsável pelo que vai acontecer assim que executarmos a migration
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
    })
};

//método down é responsável pelo que vai acontecer se algo der errado
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

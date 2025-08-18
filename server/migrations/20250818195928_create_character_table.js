/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('character_table', table => {
    table.increments('id');
    table.integer('user_id');
    table.foreign('user_id').references('user_table.id');
    table.string('name').notNullable();
    table.string('pronouns');
    table.string('ancestry');
    table.string('community');
    table.string('class');
    table.string('sub-class');
    table.integer('level');
    table.integer('evasion');
    table.integer('armor');
    table.integer('agility');
    table.integer('strength');
    table.integer('finesse');
    table.integer('instinct');
    table.integer('presence');
    table.integer('knowledge');
    table.string('experience');
    table.string('background');
    table.string('connections');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpUsersSchema extends Schema {
  up () {
    this.create('op_users', (table) => {
      table.increments()
      table.string('user_login', 80).notNullable().unique()
      table.string('user_password', 60).notNullable()
      table.string('user_email', 254).notNullable().unique()
      table.integer('user_status', 5).defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('op_users')
  }
}

module.exports = OpUsersSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpOptionsSchema extends Schema {
  up () {
    this.create('op_options', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('op_options')
  }
}

module.exports = OpOptionsSchema

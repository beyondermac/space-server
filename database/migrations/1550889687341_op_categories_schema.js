'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpCategoriesSchema extends Schema {
  up () {
    this.create('op_categories', (table) => {
      table.increments()
      table.string('cat_name', 80).notNullable().unique()
      table.text('cat_description')
      table.timestamps()
    })
  }

  down () {
    this.drop('op_categories')
  }
}

module.exports = OpCategoriesSchema

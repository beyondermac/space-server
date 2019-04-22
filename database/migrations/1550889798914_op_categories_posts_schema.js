'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpCategoriesPostsSchema extends Schema {
  up () {
    this.create('op_categories_posts', (table) => {
      table.increments()
      table.integer('post_id',11).unsigned().references('id').inTable('op_users')
      table.timestamps()
    })
  }

  down () {
    this.drop('op_categories_posts')
  }
}

module.exports = OpCategoriesPostsSchema

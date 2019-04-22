'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OpPostsSchema extends Schema {
  up () {
    this.create('op_posts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('post_tittle', 150).notNullable().unique()
      table.string('post_author', 80).nullable()
      table.text('post_content')
      table.integer('post_status', 1).defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('op_posts')
  }
}

module.exports = OpPostsSchema

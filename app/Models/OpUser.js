'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OpUser extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeSave', async(userInstance) => {
        if (userInstance.dirty.user_password) {
            userInstance.user_password = await Hash.make(userInstance.user_password)
        }
    })
  }
}

module.exports = OpUser

'use strict'

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./database/db.json')
const db = low(adapter)


class PostController {

  /**
  * @swagger
  * /article/serverurl:
  *   get:
  *     tags:
  *       - Article Controller
  *     summary: Logout user
  *     produces:
  *       - "application/json"
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  *           method: POST
  */

  async index ({request, params, response}) {
    const resp = db.get('posts')
    .find({ id: 2 })
    .value()
    response.send(resp);
  }
}

module.exports = PostController

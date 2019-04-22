'use strict'

const OpUser = use('App/Models/OpUser');

class UserController {

  /**
  *
  * /login:
  *   post:
  *     tags:
  *       - User Controller
  *     summary: Login User
  *     produces:
  *       - "application/json"
  *     parameters:
  *       - name: user_email
  *         description: Email
  *         in: formData
  *         required: true
  *         type: string
  *         default: 'xlinkcodex@gmail.com'
  *       - name: user_password
  *         description: Password
  *         in: formData
  *         required: true
  *         type: string
  *         default: 'admin'
  *     responses:
  *       200:
  *         description:  Logged in successfully
  *         example:
  *           message: Logged in successfully
  */
  async login({ request, response, auth }) {
    console.log(request.all());
    const { user_email, user_password } = request.all();
    await auth.attempt(user_email, user_password);
    return response.status(200).json({message:'Logged in successfully'});
  }

  /**
  *
  * /show:
  *   post:
  *     tags:
  *       - User Controller
  *     summary: Show user
  *     produces:
  *       - "application/json"
  *     parameters:
  *       - name: name
  *         description: Name of the user
  *         in: formData
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  *           method: POST
  */
  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }

  /**
  *
  * /register:
  *   post:
  *     tags:
  *       - User Controller
  *     summary: Registre user
  *     produces:
  *       - "application/json"
  *     parameters:
  *       - name: user_email
  *         description: Email of the user
  *         in: formData
  *         required: true
  *         type: string
  *         default: 'xlinkcodex@gmail.com'
  *       - name: user_login
  *         description: Login of the user
  *         in: formData
  *         required: true
  *         type: string
  *         default: 'admin'
  *       - name: user_password
  *         description: Password of the user
  *         in: formData
  *         required: true
  *         type: string
  *         default: 'admin'
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  *           method: POST
  */
  async register({ request, response }) {
    const user = new OpUser;
    user.user_login = request.input('user_login');
    user.user_email = request.input('user_email');
    user.user_password = request.input('user_password');
    await user.save();
    return response.status(200).json({message:'User register ̑ ̑ed successfully'});
  }

  /**
  *
  * /logout:
  *   get:
  *     tags:
  *       - User Controller
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
  async logout ({ response, auth }) {
    await auth.logout()
    return response.status(200).json({message:'Close sessions completed'});
  }
}

module.exports = UserController

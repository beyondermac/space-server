'use strict'

const Route = use('Route')
Route.on('/').render('welcome')
Route.get('article/serverurl','PostController.index')
// Route.post('register','UserController.register')
// Route.post('login', 'UserController.login');
// Route.get('logout', 'UserController.logout')

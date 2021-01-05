const express = require('express')
const routes = express.Router()

const SessionController = require('../app/controllers/SessionController');
const UserController = require('../app/controllers/UserController');


//login/logout
// routes.get('/login', SessionControlle.loginForm)
// routes.post('/login', SessionControlle.login)
// routes.post('/logout', SessionControlle.logout)

// //reset password/forgot
// routes.get('/forgot-password', SessionControlle.forgotForm)
// routes.get('/password-reset', SessionControlle.resetForm)
// routes.post('/forgot-password', SessionControlle.orgot)
// routes.post('/password-reset', SessionControlle.reset)

// //user register usercontrooler
// routes.get('/register', UserController.registerForm)
// routes.post('/register', UserController.register.post)

// routes.get('/', UserController.show)
// routes.put('/', UserController.update)
// routes.delete('/', UserController.delete)


module.exports = routes
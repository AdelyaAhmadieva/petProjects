const Router = require('express')
const router = new Router
const UserController = require('../controllers/userController')
const AuthMiddleware = require('../middleware/authMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)

module.exports = router


// не забыть повторить так для брендов, типов и тд


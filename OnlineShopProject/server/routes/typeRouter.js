const Router = require('express')
const router = new Router
const typeController = require('../controllers/typeController')
const RoleHandlerMiddleware = require('../middleware/RoleHandlerMiddleware')


router.post('/create', RoleHandlerMiddleware('ADMIN'), typeController.create)
router.get('/',typeController.getAll)

module.exports = router
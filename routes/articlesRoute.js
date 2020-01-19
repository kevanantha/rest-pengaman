const router = require('express').Router()

const articlesController = require('../controllers/articlesController')
const { authentication, authorization } = require('../middlewares/auth')

router.get('/', articlesController.index)
router.get('/:articleId', articlesController.findOne)
router.use(authentication)
router.post('/', articlesController.create)
router.use('/:articleId', authorization)
router.delete('/:articleId/delete', articlesController.delete)
router.put('/:articleId/update', articlesController.update)

module.exports = router

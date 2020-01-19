const router = require('express').Router()
const articleRoute = require('./articlesRoute')
const userRoute = require('./userRoute')

router.use('/articles', articleRoute)
router.use('/users', userRoute)

module.exports = router

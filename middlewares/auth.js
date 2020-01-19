const { verifyJwt } = require('../helpers/jwt')
const Article = require('../models/article')

const authentication = (req, res, next) => {
  try {
    // req.headers access_token ini nanti di taruh di headers
    const decode = verifyJwt(req.headers.access_token)

    req.user = decode

    next()
  } catch {
    res.status(401).json({ message: 'You need to login' })
  }
}

const authorization = (req, res, next) => {
  const { articleId } = req.params
  const userId = req.user.id
  Article.findById(articleId).then(article => {
    if (article) {
      if (article.author == userId) {
        next()
      } else {
        res.status(403).json({ message: "You don't have permission bro" })
      }
    } else {
      res.status(404).json({ message: 'Not Found' })
    }
  })
}

module.exports = { authentication, authorization }

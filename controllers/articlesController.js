const Article = require('../models/article')

module.exports = {
  async index(req, res) {
    const articles = await Article.find()
    res.status(200).json(articles)
  },
  async create(req, res) {
    const { title, content } = req.body

    const article = await Article.create({ title, author: req.user.id, content })
    res.status(201).json(article)
  },
  async findOne(req, res) {
    const article = await Article.findById(req.params.articleId)

    res.status(200).json(article)
  },
  async delete(req, res) {
    const article = await Article.deleteOne({ _id: req.params.articleId })

    res.status(200).json(article)
  },
  async update(req, res) {
    const { title, author, content } = req.body

    const article = await Article.updateOne(
      { _id: req.params.articleId },
      {
        title,
        author,
        content,
      },
    )

    res.status(200).json(article)
  },
}

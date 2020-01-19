const { model, Schema } = require('mongoose')

const articleSchema = new Schema(
  {
    title: String,
    content: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true, versionKey: false },
)

const Article = model('Article', articleSchema)

module.exports = Article

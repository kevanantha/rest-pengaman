const { model, Schema } = require('mongoose')
const { hashPassword } = require('../helpers/bcrypt')

const userSchema = new Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true, versionKey: false },
)

userSchema.pre('save', function(next) {
  // jadi sebelum di save ke DB, passwordnya di hash dulu
  this.password = hashPassword(this.password)

  // setelah itu next (sama kyk middlewarenya express)
  next()
})

const User = model('User', userSchema)

module.exports = User

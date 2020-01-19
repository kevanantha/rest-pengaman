const User = require('../models/user')
const { comparePassword } = require('../helpers/bcrypt')
const { generateJwt } = require('../helpers/jwt')

module.exports = {
  async register(req, res) {
    const { email, password } = req.body

    const newUser = await User.create({ email, password })

    res.status(201).json(newUser)
  },
  async login(req, res, next) {
    const { email, password } = req.body

    // cek dulu apakah ada user dengan email tersebut?
    const user = await User.findOne({ email })

    // jika ada, maka compare password yang dari client dengan hash dari DB
    // dan generate JWT untuk di balikkin ke client
    if (user && comparePassword(password, user.password)) {
      // payloadnya bebas, terserah kelen
      const token = generateJwt({
        id: user._id,
        email: user.email,
      })

      res.status(200).json({ token })
    }
  },
}

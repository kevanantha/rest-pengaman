const jwt = require('jsonwebtoken')

// secret ini seharusna di taruh di env
const secret = process.env.SECRET_JWT || 'evilfactorylabs'

// untuk generate JWT pas login, yang nanti di lempar ke client(biasanyadi taruh di localStorage xD)
const generateJwt = payload => {
  return jwt.sign(payload, secret)
}

// untuk verify apakah token dari client bener atau ngga
const verifyJwt = token => {
  return jwt.verify(token, secret)
}

module.exports = {
  generateJwt,
  verifyJwt,
}

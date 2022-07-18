const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json('token is not valid!')
      req.user = user
      //continue to run function in user.js
      next()
    })
  } else {
    return res.status(401).json('you are not authenticate!')
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || re.user.isAdmin) {
      next()
    } else {
      res.status(403).json('You are not allow to update')
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      res.status(403).json('You are not allow to update')
    }
  })
}
module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
}

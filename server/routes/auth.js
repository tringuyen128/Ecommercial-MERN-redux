const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

//REGISTER
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  })
  // save to DB
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500), json(err)
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    // if there is no user res status 401
    !user && res.status(401).json('Wrong credentials')

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    )
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    // if password is correct then res with err
    originalPassword !== req.body.password &&
      res.status(401).json('wrong credentials')

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    )

    // hide password after request and res back with json format
    const { password, ...others } = user._doc

    // ortherwise send back with user account
    res.status(200).json({ ...others, accessToken })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('./verifyToken')
const router = require('express').Router()

router.put('/:id', verifyToken, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString()
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updateUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted...')
  } catch (err) {
    res.status(500).json(err)
  }
})

//GET USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json({ others })
  } catch (err) {
    res.status(500).json(err)
  }
})
// GET ALL USERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const users = await User.findById()

    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: { tyoe: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  //will created at and updated at
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
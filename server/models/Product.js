const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    title: { tyoe: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, require: true },
  },
  //will created at and updated at
  { timestamps: true }
)

module.exports = mongoose.model('User', ProductSchema)
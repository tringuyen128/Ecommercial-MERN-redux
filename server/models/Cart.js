const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
  {
    userId: { tyoe: String, require: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  //will created at and updated at
  { timestamps: true }
)

module.exports = mongoose.model('User', CartSchema)

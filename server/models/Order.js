const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
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
    amount: { type: Number, required: true },
    address: { type: Object, reuqired: true },
    status: { type: String, default: 'pending' },
  },
  //will created at and updated at
  { timestamps: true }
)

module.exports = mongoose.model('User', OrderSchema)

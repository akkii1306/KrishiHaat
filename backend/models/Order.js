import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],

  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },

  paymentMethod: {
    type: String,
    required: true,
    default: "Cash on Delivery",
  },

  totalPrice: {
    type: Number,
    required: true,
  },

  isPaid: {
    type: Boolean,
    default: false,
  },

  paidAt: {
    type: Date,
  },

  isDelivered: {
    type: Boolean,
    default: false,
  },

  deliveredAt: {
    type: Date,
  },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;

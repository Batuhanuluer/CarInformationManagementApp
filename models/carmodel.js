const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

  const car= mongoose.model('CarShema',carSchema)

  module.exports = car

  
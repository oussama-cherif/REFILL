const mongoose = require ('mongoose')

const cardSchema = mongoose.Schema({
  operator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Operator'
  },
  credit: {
    type: Number,
    default: 0
  }
  },{
    timestamps: true
  }
)


module.exports = mongoose.model('Card', cardSchema)
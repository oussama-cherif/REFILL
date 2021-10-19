const mongoose = require ('mongoose')

const operatorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  },
  color: {
    type: String,
  },
  cards : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card'
    }
  ],
  balance: {
    type: Number,
    default: 0
  }
  },{
    timestamps: true
  }
)


module.exports = mongoose.model('Operator', operatorSchema)
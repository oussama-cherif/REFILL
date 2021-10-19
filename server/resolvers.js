const Operator = require('./models/operator')
const Card = require('./models/card');


const resolvers = {
  Query:{
    operators: async() => {
      try {
        const operators = await Operator.find().populate('cards').exec()
        return operators
      } catch(err) {
        throw err
      }
    },
    operator: async (parent, args, context, info) => {
      const {id} = args
      return await Operator.findById(id).populate('cards').exec()
    },
    cards: async() => {
      try {
        const cards = await Card.find().populate('operator').exec()
        return cards
      } catch(err) {
        throw err
      }
    },
    card: async (parent, args, context, info) => {
      const {id} = args
      return await Card.findById(id).populate('operator').exec()
    }
  },
  Mutation:{
    createOperator: async (parent, args, context, info) => {
      const { name, code, color} = args
      const operator = await new Operator({ name, code, color})
      await operator.save()
      return operator
    },
    deleteOperator: async (parent, args, context, info) => {
      const {id} = args
      await Operator.findById(id)
      await Operator.findByIdAndDelete(id)      
      return 'operator deleted succesfully!'
    },
    deleteAllOperators: async (parent, args, context, info) => {
      await Operator.deleteMany({});     
      return 'All operators have been deleted !'
    },
    updateOperator: async (parent, args, context, info) => {
      const {id, name, code, color} = args
      const operator = await Operator.findByIdAndUpdate(id, {name, code, color}, { new: true })
      return operator
    },
    createCard: async (parent, args, context, info) => {
      const { id, credit } = args
      const operator = await Operator.findById(id)
      const card = await new Card({ credit, operator })
      operator.balance += credit
      await card.save()     
      operator.cards.push(card)
      await operator.save()
      return card
    }
  },
};

module.exports = resolvers
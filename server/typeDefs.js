const {gql} = require('apollo-server-express')

const typeDefs = gql`
  type Operator {
    id:ID
    name: String!
    code: Int!
    color: String!
    balance: Int
    cards: [Card!]
    createdAt: String
  }
  type Card {
    id:ID
    operator: Operator
    credit: Int!
    createdAt: String
  }

  input OperatorInput {
    name: String!
    code: Int!
    color: String!
  }

  type Query {
    operators:[Operator!]
    operator(id: ID!): Operator
    cards:[Card!]
    card(id:ID): Card
  }
  type Mutation {
    createOperator(name: String!, code: Int!, color: String!): Operator
    deleteOperator(id:ID!): String
    deleteAllOperators: String
    updateOperator(id:ID!, name: String!, code: Int!, color: String!): Operator
    createCard(id:ID!,credit:Int): Card
  }
`

module.exports = typeDefs
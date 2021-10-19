import {gql} from "@apollo/client"

export const OPERATORS_QUERY= gql`
  query {
    operators {
      id
      name
      code
      color
    }
  }
`

export const CARDS_QUERY = gql`
  query {
    cards {
      operator {
        name
        id
        color     
      }
      id
      createdAt
    }
  }
`
export const CREDIT_QUERY= gql`
  query {
    cards {
      credit
    }
  }
`
export const OPERATOR_BALANCE_QUERY= gql`
query {
  operators {
    balance
  }
}
`

export const CREATE_OPERATOR_MUTATION= gql`
  mutation createOperator (
    $name: String!
    $code: Int!
    $color: String!
  ) {
    createOperator (
      name: $name
      code: $code
      color:$color
    ) {
      id
      name
    }
  }
`
export const CREATE_CARD_MUTATION= gql`
  mutation createCard (
    $id: ID!
    $credit: Int!
  ) {
    createCard (
      id: $id
      credit: $credit
    ) {
      id
    }
  }
`
export const UPDATE_OPERATOR_MUTATION= gql`
  mutation updateOperator (
    $id: ID!
    $name: String!
    $code: Int!
    $color: String!
  ) {
    updateOperator (
      id: $id
      name: $name
      code: $code
      color:$color
    ) {
      id
      name
    }
  }
`
export const DELETE_OPERATOR_MUTATION= gql`
mutation deleteOperator($id: ID!) {
  deleteOperator(id: $id)
}
`
export const DELETE_ALL_OPERATORS_MUTATION= gql`
mutation deleteAllOperators{
  deleteAllOperators
}
`

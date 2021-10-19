import React from 'react'
import { CARDS_QUERY } from '../../api/query'
import {useQuery, gql} from '@apollo/client'

function Cards () {
  const { data, loading, error } = useQuery(CARDS_QUERY)
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
  return (
    <div>
      <p>{ data.cards.length } Cards</p>
        {data.cards.map((card) => (
          <div> {card.operator ? card.operator.name : null} </div>
        ))}
    </div>
  )
}

export default Cards
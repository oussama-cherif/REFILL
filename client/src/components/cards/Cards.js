import React from 'react'
import { CARDS_QUERY } from '../../api/query'
import './cards.css'
import {useQuery, gql} from '@apollo/client'
function Cards () {
  const transformDate = (date) => {

  }
  const { data, loading, error } = useQuery(CARDS_QUERY)
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
  return (
    <div>
      <p>{ data.cards.length } Cards</p>
        <div class="cards-container">
        {data.cards.map((card) => (
          card.operator ?
          <div style={{color:card.operator.color}} className="cardiv">
             <div> 
               <h3>{card.operator.name}</h3>
                {/* <h6> {card.createdAt} </h6> */}
             </div>
          </div>
          :null
        ))}
        </div>
    </div>
  )
}

export default Cards
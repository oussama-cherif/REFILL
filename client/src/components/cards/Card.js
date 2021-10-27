import React from 'react'
import './card.css'
import { useQuery, gql } from "@apollo/client";
import { OPERATOR_BALANCE_QUERY, CREDITT_QUERY } from "../../api/query"



function Card () {
  const { data, loading, error } = useQuery(OPERATOR_BALANCE_QUERY)
  // const { data, loading, error } = useQuery(CREDITT_QUERY)
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
  return (
    <div className="balance-item">
        {data.operators.map((operator) => (
          operator.balance !== 0 ?
           <div className="card"style={{color:operator.color}}>
             <p className="balance-text"><strong>{operator.balance}</strong></p>
             <sub>DT</sub>
            </div> 
           : null
        ))}
    </div>
  )
}

export default Card
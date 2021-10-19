import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { OPERATOR_BALANCE_QUERY } from "../../api/query"



function Card () {
  const { data, loading, error } = useQuery(OPERATOR_BALANCE_QUERY)
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
  return (
    <div>
        {data.operators.map((operator) => (
          <div style={{color:operator.color}}>{operator.balance}</div>
        ))}
    </div>
  )
}

export default Card
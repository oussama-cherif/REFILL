import react from 'react'
import { useQuery, gql } from "@apollo/client";
import { CREDIT_QUERY } from "../../api/query.js"

function Credit () {
    const { data, loading, error } = useQuery(CREDIT_QUERY)
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    const credit = data.cards.map(card => card.credit).reduce((prev, curr) => prev + curr, 0);
  return (
    <div>
      <h2>{ credit } DT</h2>
    </div>
  )
}

export default Credit
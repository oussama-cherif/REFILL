import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useQuery, useMutation, gql } from "@apollo/client";
import { OPERATORS_QUERY,DELETE_OPERATOR_MUTATION } from "../api/query.js"


function Operators(){
  
  const { data, loading, error } = useQuery(OPERATORS_QUERY)
  const [deleteOperator] = useMutation(DELETE_OPERATOR_MUTATION)
  const history = useHistory()
  const updateButton = (id) => {
    history.push({
      pathname: '/update-operator',
      state: id,
    });
  }
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  return(
    <div>
        {data.operators.map((operator) => (
          <div key={operator.id}>{operator.name} 
          <button onClick={()=> {deleteOperator({variables: { id: operator.id }})}}><i class="fas fa-trash-alt"></i></button>
          <button onClick={() =>history.push({pathname: '/update-operator',
      state: operator.id,})} type="button"><i class="far fa-edit"></i></button>
          </div>
        ))}
    </div>
  )
}

export default Operators
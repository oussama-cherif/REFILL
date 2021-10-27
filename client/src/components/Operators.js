import React, { useEffect, useState }  from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useQuery, useMutation, gql } from "@apollo/client";
import { OPERATORS_QUERY,DELETE_OPERATOR_MUTATION } from "../api/query.js"
import '../pages/settings.css'

function Operators() {
  const { data, loading, error } = useQuery(OPERATORS_QUERY)
  const [deleteOperator] = useMutation(DELETE_OPERATOR_MUTATION, {
    refetchQueries: [
      {query: OPERATORS_QUERY}
    ]
  })
   
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
    <div className="operator-container">
        {data.operators.map((operator) => (
          <div className="operator-div" key={operator.id} style={{color:operator.color}}>
            <div>
              <h3> {operator.name} </h3>
              <h6>*{operator.code}*___________#</h6>
            </div>
            <div>
              <button className="delete-op" style={{color:operator.color}}
               onClick={()=>{deleteOperator({variables: { id: operator.id }})}}>
                <i class="fas fa-trash-alt"></i>
              </button>
              <button className="upd-op" style={{color:operator.color}} 
              onClick={() =>history.push({pathname: '/update-operator', state: operator.id,})} 
              type="button"><i class="far fa-edit"></i>
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Operators
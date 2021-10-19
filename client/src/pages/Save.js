import React, {useState} from 'react'
import { OPERATORS_QUERY, CREATE_CARD_MUTATION } from '../api/query'
import { useQuery, useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'


function Save () {
  const { data, loading, error } = useQuery(OPERATORS_QUERY)
  const [createCard] = useMutation(CREATE_CARD_MUTATION)
  const [credit, setCredit] =useState('')
  const history = useHistory()
  // createCard({
  //   variables: {
  //     id: operator.id,
  //     credit
  //   }
  // })
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  return (
    <div>
      <input
        type="number"
        placeholder="Credit"  
        onChange={event => {
        setCredit(event.target.value)
      }}/>
      {data.operators.map((operator) => (
       <button onClick={()=>createCard({ variables: {
         id: operator.id,
         credit: parseInt(credit)
       }
        }).then(history.push('/'))
        }><div> {operator.name} </div></button>
      ))}
      
    </div>
  )
}

export default Save
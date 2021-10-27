import React, {useState} from 'react'
import './save.css';
import { OPERATORS_QUERY, CREATE_CARD_MUTATION, CARDS_QUERY } from '../api/query'
import { useQuery, useMutation } from '@apollo/client'
import { useHistory, Link } from 'react-router-dom'


function Save () {
  const { data, loading, error } = useQuery(OPERATORS_QUERY)
  const [createCard] = useMutation(CREATE_CARD_MUTATION, {  
    refetchQueries: [
      {query: CARDS_QUERY}
    ]
  })
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
      <Link to='/' className="right-arrow"><i class="fas fa-arrow-right fa-2x"></i> </Link>
      <h1>Save</h1>
      <div className="save">
      <div class="inp">
      <input
        type="number"
        placeholder="Credit"  
        onChange={event => {
        setCredit(event.target.value)
      }}/>

      </div >
      <div className="operators" >
      {data.operators.map((operator) => (
      
         <button style={{color: operator.color}} className="operator-item" onClick={()=>createCard({ variables: {
         id: operator.id,
         credit: parseInt(credit)
       }
        }).then(history.push('/'))
        }>
          {operator.name} 
        </button>
      
      ))}
      </div>
      </div>
    </div>
  )
}

export default Save
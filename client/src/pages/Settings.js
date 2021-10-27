import React from "react"
import {Link, useHistory} from 'react-router-dom'
import './settings.css'
import Operators from "../components/Operators"
import { DELETE_ALL_OPERATORS_MUTATION, OPERATORS_QUERY  } from '../api/query'
import { useQuery ,useMutation, gql } from '@apollo/client';

function Settings() {
  const [deleteAllOperators, { data, loading, error }] = useMutation(DELETE_ALL_OPERATORS_MUTATION, {
    refetchQueries: [
      {query: OPERATORS_QUERY}
    ]
  });
  const history = useHistory()
  const deleteHandler = () => {
    deleteAllOperators();
  }
  return(
    
    <div>
      <Link to='/' className="arrow"><i class="fas fa-arrow-left fa-2x"></i> </Link>
      <h1 class="title">Refill</h1>
      <div className="manage-operators">
        <div className="manage">
          <h2>Operators </h2>
          <h5>Manage your list of operators</h5>         
        </div>
        <Link to='/create-operator' className="add-btn"><i class="fas fa-plus fa-2x"></i></Link>
      </div>
      <div className="operators">
        <Operators />
      </div>
      <div className="trash-container">
        <div className="cache">
          <h2>Clear cache </h2>
          <h5>Clean up cache history, wallet and operators</h5>
        </div>
        <button onClick={deleteHandler} className="trash-btn"><i class="fas fa-trash-alt fa-2x"></i></button>
      </div>
    </div>
  )
}

export default Settings
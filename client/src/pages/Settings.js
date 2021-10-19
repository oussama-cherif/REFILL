import React from "react"
import {Link} from 'react-router-dom'
import Operators from "../components/Operators"
import { DELETE_ALL_OPERATORS_MUTATION } from '../api/query'
import { useMutation, gql } from '@apollo/client';

function Settings() {
  const [deleteAllOperators, { data, loading, error }] = useMutation(DELETE_ALL_OPERATORS_MUTATION);
  return(
    
    <div>
      <h1>Refill</h1>
      <div>
        <h2>Operators </h2>
        <h5>Manage your list of operators</h5>
        <Link to='/create-operator'><i class="fas fa-plus"></i></Link>
      </div>
      <Operators />
      <div>
        <h2>Clear cache </h2>
        <h5>Clean up cache history, wallet and operators</h5>
        <button onClick={deleteAllOperators}><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  )
}

export default Settings
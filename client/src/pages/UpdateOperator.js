import React from 'react'
import { useFormik } from 'formik';
import { UPDATE_OPERATOR_MUTATION } from '../api/query'
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const validate = values => {

  const errors = {};

  if (!values.name) {

    errors.name = 'Required';

  }
  if (!values.code) {

    errors.code = 'Required';

  }
  if (!values.color) {

    errors.code = 'Required';

  }
  return errors
}


function UpdateOperator(props) {
  const [updateOperator, { data, loading, error }] = useMutation(UPDATE_OPERATOR_MUTATION);
  const history = useHistory()
 const formik = useFormik({
     initialValues: {
       name: '',
       code: '',
       color: '',
     },
     validate,
     onSubmit: values => {
      updateOperator({
        variables: {
          id: props.location.state,
          name: values.name,
          code: parseInt(values.code),
          color: values.color
        }
      })
      history.push('/settings')
     },
   });

   if (loading) return "Loading...";
   if (error) return <pre>{error.message}</pre>
  return(
    <div>
    <p> {props.location.state} </p>
    <h1 className="title">Update</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <label htmlFor="code">Activation Code</label>
      <input
        id="code"
        name="code"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.code}
      />
      {formik.errors.code ? <div>{formik.errors.code}</div> : null}
      <label htmlFor="color">color</label>
      <input
        id="color"
        name="color"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.color}
      />
      {formik.errors.color ? <div>{formik.errors.color}</div> : null}
      <button type="submit">Apply</button>
    </form>
    </div>
  )
}

export default UpdateOperator
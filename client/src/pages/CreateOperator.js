import React, { useState } from 'react';
import './operator.css'
import { useFormik } from 'formik';
import { CREATE_OPERATOR_MUTATION, OPERATORS_QUERY } from '../api/query'
import { useMutation, gql, useQuery } from '@apollo/client';
import { useHistory, Link } from 'react-router-dom';
// import { OPERATORS_QUERY,DELETE_OPERATOR_MUTATION } from "../api/query.js"
import { CirclePicker } from 'react-color';
const validate = values => {

  const errors = {};

  if (!values.name) {

    errors.name = 'Required';

  }
  if (!values.code) {

    errors.code = 'Required';

  }

  // if (!values.color) {

  //   errors.code = 'Required';

  // }
  return errors
}


function CreateOperator() {
  const [createOperator, { data, loading, error }] = useMutation(CREATE_OPERATOR_MUTATION, {
    refetchQueries: [
      {query: OPERATORS_QUERY}
    ]
  });
  // const [createOperator, { data, loading, error }] = useMutation(
  //   CREATE_OPERATOR_MUTATION, 
  //   {
  //     update (cache, {data}) {
  //       const newOperatorFromResponse = data?.createOperator.operators;
  //       const existingOperator = cache.readQuery({
  //         query: OPERATORS_QUERY,
  //       });

  //       cache.writeQuery({
  //         query: OPERATORS_QUERY,
  //         data: {
  //           operators: [
  //             ...existingOperator?.operators,
  //             newOperatorFromResponse,
  //           ],
  //         }
  //       });
  //     }
  // });
  const history = useHistory()
 const formik = useFormik({
     initialValues: {
       name: '',
       code: '',
       color: '',
     },
     validate,
     onSubmit: values => {
      createOperator({
        variables: {
          name: values.name,
          code: values.code,
          color: selectedColor
        }
      })
      history.push('/settings')
     },
   });
   const [selectedColor, setSelectedColor] = useState('#F76621')
  return(
    <div>
    <Link to='/settings' className="arrow"><i class="fas fa-arrow-left fa-2x"></i> </Link>
    <h1 className="title">Create</h1>
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      <input
        id="code"
        name="code"
        type="number"
        placeholder="Activation Code"
        onChange={formik.handleChange}
        value={formik.values.code}
      />
      {/* {formik.errors.code ? <div>{formik.errors.code}</div> : null}
      <label htmlFor="color">color</label>
      <input
        id="color"
        name="color"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.color}
      /> */}
      {/* {formik.errors.color ? <div>{formik.errors.color}</div> : null} */}
      <div class="color-picker">
      <CirclePicker
       colors = {['#F76621', '#DF0C26', '#2477B1', '#3EE0A8', '#DEAE0E', '#000000', '#BC06DD', '#24B12F', '#93568A', '#06ABDD']} 
       circleSize={22} 
       onChangeComplete={color => setSelectedColor(color.hex)}
       />
       </div>
      <button class="apply" type="submit">Apply</button>
      </div>
    </form>

    </div>
  )
}

export default CreateOperator
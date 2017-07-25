import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../shared/renderField'

const required = value => (value ? undefined : 'Required')

let AddTodoForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Name</label>
        <Field name="name" component={renderField} type="text" validate={required}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodoForm = reduxForm({
  form: 'addtodo'
})(AddTodoForm)


export default AddTodoForm
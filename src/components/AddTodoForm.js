import React from 'react'
import { Field, reduxForm } from 'redux-form'

let AddTodoForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodoForm = reduxForm({
  // a unique name for the form
  form: 'addtodo'
})(AddTodoForm)


export default AddTodoForm
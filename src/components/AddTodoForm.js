import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => (value ? undefined : 'Required')

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        (error &&
          <span>
            {error}
          </span>)}
    </div>
  </div>

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
import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'
import { addTodo } from '../actions'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'


const App = ({handleTodoSubmit, values, todos}) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <AddTodoForm onSubmit={values => handleTodoSubmit(values.name)}/>
      <TodoList todos={todos}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

const mapDispatchToProps = (dispatch) => ({
  handleTodoSubmit: value => dispatch(addTodo(value)),
});

export default reduxForm({ form: 'App' })(connect(mapStateToProps, mapDispatchToProps)(App));

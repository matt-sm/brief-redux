import React from 'react'

let TodoList = ({ todos }) => {
  return (
    <div>
    {
      todos && todos.map((todo, i) => {
        return (
        <div key={i}>
          {todo.text}
        </div>
      )})
    }
    </div>
  )
}

export default TodoList
import React from 'react'

const TodoList = ({todos, handleEdit, handleDelete}) => {
  return (
    <ul className="allTodos">
          {
            todos.map((item) => (
              <li className="singleTodo">
                <span className="todoText" key={item.id}>{item.todo}</span>
                <button onClick={()=>handleEdit(item.id)}>Edit</button>
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
              </li>
          ))
          }
          </ul>
  )
}

export default TodoList

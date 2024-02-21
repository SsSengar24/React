import React from 'react'

const Form = ({handleSubmit, todo, editId, setTodo }) => {
  return (
        <form className="todoForm" onSubmit={handleSubmit}>
              <input type="text" value={todo} onChange={(event)=>setTodo(event.target.value)}></input>
          <button type="submit">{editId ? "Edit" : "Go"}</button>
          </form>
  )
}

export default Form

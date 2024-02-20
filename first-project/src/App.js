import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId) {
      let temp = [...todos];
      temp.forEach((todoA) => {
        console.log('todo', todo)
        console.log('edit id', editId)
        if (todoA.id == editId) {
          todoA.todo = todo;
        }
      })
      setTodos(temp);
      setEditId(null);
      return;
    }
    if (todo !== "") {
      setTodos(
        [{ id: `${todo} -${Date.now()}`, todo }, ...todos]
      )
      setTodo("")
    }
  }
  const handleDelete = (id) => {
    const deletedItem = todos.filter((todo) => todo.id !== id);
    setTodos(deletedItem);
    
  }

  const handleEdit = (id) => { 
    const current = todos.find((todo) => todo.id === id)
    setTodo(current.todo);
    setEditId(id);
  }

  return (
    <div className="App">
      <div className="container">
      <h1>Todo List App</h1>
          <form className="todoForm" onSubmit={handleSubmit}>
              <input type="text" value={todo} onChange={(event)=>setTodo(event.target.value)}></input>
          <button type="submit">{editId ? "Edit" : "Go"}</button>
          </form>
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
      </div>
    </div>
  );
};

export default App;

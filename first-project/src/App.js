import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

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
        if (todoA.id === editId) {
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
        <Form handleSubmit={handleSubmit} todo={todo} editId={editId} setTodo={setTodo} />
        <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;

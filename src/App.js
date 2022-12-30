import Form from "./components/Form";
import { useState } from "react";
import TodoList from "./components/TodoList";
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1 className="header">ToDo App</h1>
      </header>
      <Form setInput={setInput} input={input} setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

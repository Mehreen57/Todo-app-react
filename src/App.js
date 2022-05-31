import React, {useEffect, useState} from 'react';
import './App.css';
import { Header, Form, TodoList } from './components';

const App = () => {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  // run this only once when app loads
  useEffect(() => {
    getTodoFromLocal();
  }, [])

  // Run once when app loads and every time when there is any change in todos ot status
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status])


  // functions
  const filterHandler = () =>{
    switch (status) {
      case 'completed':
       setFilteredTodo(todos.filter(todo => todo.completed === true));
       break;
      case 'incompleted':
        setFilteredTodo(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodo(todos);
        break;
    }
  }

  // save to local storage / set todos;
  const saveToLocal = () =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // get items
  const getTodoFromLocal = () => {
    const getTodoList = localStorage.getItem("todos");
    if(getTodoList === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoListFromLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoListFromLocal)
      setTodos(todoListFromLocal)
    }
  }

  return (
    <div className="App">
      <Header />
      <Form inputText = {inputText} 
        setInputText={setInputText} 
        todos={todos}  
        setTodos={setTodos} 
        setStatus={setStatus}
        />
      <TodoList todos={todos} 
        setTodos={setTodos} 
        filteredTodo={filteredTodo}/>
    </div>
  );
}

export default App;

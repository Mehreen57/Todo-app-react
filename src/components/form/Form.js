import React from 'react';
import './form.css';
import { v4 as uuidv4 } from 'uuid';


function Form({inputText, setInputText, todos, setTodos, setStatus}) {

  const inputHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    // generate unique id for todo lists.
    const uniqueId = uuidv4(); 
    //add todo object on click of button
    const addItem = !inputText ? alert("enter somthing")  :  setTodos([
      ...todos, {id: uniqueId, text: inputText, completed: false }
    ]);
 
    //reset the input field after adding todo
    setInputText("");

    return addItem;
  }

  // filtered todo
  const statusTodo = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
        <input  type="text" className="todo-input" onChange={inputHandler} value={inputText}/>
        <button className="todo-button" type="submit" onClick={submitHandler}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusTodo} name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incompleted">Incompleted</option>
          </select>
          <span><i className="fas fa-chevron-down"></i></span>
        </div>
  </form>
  )
}

export default Form;
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, setTodos, filteredTodo}) =>  {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
          {filteredTodo && filteredTodo.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              todos={todos} 
              setTodos={setTodos}
              text={todo.text}

              />
          ))}
        </ul>
    </div>
  )
}

export default TodoList;
import React, { useState } from 'react';
import { ToDoForm } from './ToDoForm';
import {ToDo} from './ToDo';
import {v4 as uuidv4} from 'uuid';
import { EditToDoForm } from './EditToDoForm';
uuidv4();

export const ToDoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task : todo, completed:false, isEditing: false}]);

    console.log(todos);
  }

 const toggleComplete =  id => {
  setTodos(todos.map( todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))
  console.log("triggered the toogle fucntion");
 }

 const deleteTodo = id => {
  setTodos(todos.filter( todo => todo.id !== id))
  console.log("delete fucn is triggered ");
 }

 const editTodo = id => {
  setTodos(todos.map( todo => todo.id === id ?  {...todo, isEditing: !todo.isEditing} : todo))
 }

 const editTask = (task , id) => {
  setTodos(todos.map( todo => todo.id === id ? {...todo, task , isEditing: !todo.isEditing } : todo ))
 }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>

      <ToDoForm addTodo = {addTodo} />
      {todos.map((todo,index) => (

        todo.isEditing ? (
          <EditToDoForm editTodo={editTask}  task={todo}/>
        ) : (
          <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
        
      )
      )}
      
    </div>
  )
}

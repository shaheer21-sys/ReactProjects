import React,{useState} from 'react';


export const ToDoForm = ({addTodo}) => {

  const [value,setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(value);
    addTodo(value);
    setValue("")
}


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='What is the task Today ?' onChange={(e) => setValue(e.target.value)}  value={value}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

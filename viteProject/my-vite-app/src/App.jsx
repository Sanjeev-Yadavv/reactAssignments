import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodo] = useState([])
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if(newTodo.trim()){
      setTodo([...todos, newTodo]);
      setNewTodo('')
    }
  }

  const handleInputChange = (e) => {
        setNewTodo(e.target.value)
  }

   const handleDelete = (index) => {
      const updatedTodos = todos.filter((_, todoIndex) => todoIndex!==index)
      setTodo(updatedTodos)
   }

  return (
    <>
     <h1>Todo List</h1>
      <input
     type="text"
     value={newTodo}
     onChange={handleInputChange}
     placeholder='Add new Todo'
     /> 

     <button onClick={handleAddTodo}>Add</button>
     <ul>
      {
        todos.map((todo,index) =>(
          <li key={index}>
            {todo}
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))
      }
     </ul>
    </>
  )
}

export default App

import { useState } from "react";
import React from 'react'

const Todoform = (props) => {
    const [input, setinput] = useState('');
    const handleChange = (e) => {
        setinput(e.target.value)
    }
    const handleSubmit = (e) => {
        // first we will use prevent default function so that  becoause on clicking on submit button
        // the whole page gets reloaded and we need to prevent that
        e.preventDefault();  
        

        props.addTask({
            id:Math.floor(Math.random() * 100000),
            text:input , 
            isComplete: false
        })
    }
  return (
    <form className="todo-form">
        <input type="text" placeholder='Add to do' value={input} name="text"  className='todo-input' onChange={handleChange} />
        <button type='submit' onClick={handleSubmit} className='todo-button' > ADD TODO</button>
    </form>
  )
}

export default Todoform
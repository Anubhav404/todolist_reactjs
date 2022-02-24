import React from 'react'
import Todoform from './Todoform';
import { useState } from "react";
import Todo from './Todo';


const Todolist = () => {
    // we are create a state array ehich will hold all the todos in it
    const [todos, settodos] = useState([]);
    // jaise hi todo form k andar ka button click hoga toh is todos state array me jo bhi 
    // text id etc h voh add hota rahega

    //this is adding the todo to the list
    const addTask = (task) => { // yaha pr hum task ko object man rhe
    
        if(!task.text){
            return ;
        }
        const newTodos = [task , ...todos] // yaha pr humne newtodos nam ka naya array banaya h
        settodos(newTodos)
        

    }

    //this is for removing the todo from the list
    const removeTask = id => {
        let updatedTasks =  [...todos].filter((task) => task.id !== id) // jis pr bhi humne click kiya or uski id or jo todos name ki list me add hua h uski id agar 
        // match ho jati h toh voh delete ho jyga
        settodos(updatedTasks);
    }

    //task is completed 
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = true;

            }
            return false
        })
        settodos(updatedTasks);
    }
  return (
      <div>
          <Todoform addTask={addTask} /> 
          {/* hum yaha par add task ko props k thorugh todo form me bhj rhe h */}
          <Todo todos = {todos} completeTask={completeTask} removeTask={removeTask} />
      </div>
     
  )
}

export default Todolist
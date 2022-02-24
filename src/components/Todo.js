import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiTick} from 'react-icons/ti';
const Todo = ({todos  , completeTask , removeTask}) => {

  return ( 
      todos.map( (todo , index) => ( 
          <div className={todo.isComplete ? 'complete  ' : 'task-div' } key={index}>
              <div className="todo-text">
                  {todo.text}
              </div>
              <div className="icons"   key={index} >
                <TiTick onClick={ () => {
                    completeTask(todo.id)
                    
                }} className={todo.isComplete ? 'hide' : 'tick' } ></TiTick>

                <RiCloseCircleLine onClick ={() => {
                    removeTask(todo.id)
                    
                }} className='cross'></RiCloseCircleLine>

              </div>
          </div>
      )) 
  )
}

export default Todo
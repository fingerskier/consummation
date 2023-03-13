import React, {useRef, useState} from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import {addTask, allTasks} from '../data/db'
import EditTask from './EditTask'


export default function() {
  const tasks = useLiveQuery(allTasks)
  
  const newName = useRef()
  
  const [selection, setSelection] = useState()
  
  
  const add = event=>{
    addTask(newName.current.value)
  }
  
  
  return ( <>
    <h3>Tasks Completed</h3>
    
    <ul>
      {
        tasks?.map((X,I)=><li key={I}>
          <a onClick={E=>setSelection(X.id)}>
            {X.name}
          </a>
        </li>)
      }
    </ul>
    
    
    {selection?
      <EditTask id={selection}></EditTask>
    : <></>}
    
    
    <form>
      <label>
        New Task
        
        <input
          ref={newName}
          type="text" 
        />
        
        <button
          onClick={add}
        >Create</button>
      </label>
    </form>
  </> )
}

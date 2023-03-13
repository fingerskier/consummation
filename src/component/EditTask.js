import React, {useEffect, useRef, useState} from 'react'
import {queryTasks, updateTask} from '../data/db'


export default function({id}) {
  const name = useRef()
  const [task, setTask] = useState({})
  
  
  const get = async(parm)=>{
    const result = await queryTasks(parm)
    
    setTask(result)
  }
  
  
  const put = async()=>{
    await updateTask(task.id, {name: name.current.value})
  }
  
  
  useEffect(() => {
    if (id) {
      get({id})
    }
  }, [id])
  
  
  return ( <form>
    <label>
      Name
      <input
        defaultValue={task?.name}
        ref={name}
        type="text"
      />
    </label>
    
    <button onClick={put} type="button">Update</button>
  </form> )
}
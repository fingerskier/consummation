import Dexie from 'dexie'


const db = new Dexie('tasks')


db.version(1).stores({
  tasks: '++id, name',
  risks: '++id, taskID, name, likelihood, impact',
})


const addTask = async(name)=>{
  await db.tasks.add({
    name: name,
    created: (new Date()).toISOString()
  })
}


const allTasks = ()=>db.tasks.toArray()


const queryTasks = async({id, name})=>{
  let result
  
  
  console.log({id, name})
  
  if (id) result = await db.tasks
    .where('id')
    .equals(id)
  
  if (name) result = await db.tasks
    .where('name')
    .equalsIgnoreCase(name)


  result = await result.toArray()

  if (result.length === 1) result = result[0]
  
  console.log(result)
  
  return result
}


const updateTask = async(id, parm)=>{
  return await db.tasks.update(id, parm)
}


export {addTask, allTasks, queryTasks, updateTask}
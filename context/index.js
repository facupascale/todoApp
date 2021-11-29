import React, {createContext, useState, useContext} from 'react'

const TaskContext = createContext()

export const useTaskContext = () => useContext(TaskContext)

export const TaskContextProvider = ({children}) => {

  const [task, setTasks] = useState([])

  function addTask(items) {
    setTasks([...task, items])
  }

  function deleteTask(id) {
    setTasks(task.filter(task => task.id !== id))
  }

  function newTaskList() {
    setTasks([])
  }

  function updateStateComplete(id) {
    const taskFind = task.findIndex((item) => item.id === id)
    task[taskFind].state = true
    setTasks([...task])
  }

  function updateStateIncomplete(id) {
    const taskFind = task.findIndex((item) => item.id === id)
    task[taskFind].state = false
    setTasks([...task])
  }
  return (
    <TaskContext.Provider value={{
      task,
      addTask,
      deleteTask,
      newTaskList,
      updateStateComplete,
      updateStateIncomplete
    }}>
      {children}
    </TaskContext.Provider>
  )
}

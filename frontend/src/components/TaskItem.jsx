import React, { useContext } from 'react'
import Styles from "./task.item.module.css"
import { TaskContext } from '../Contexts/TaskContext'

const TaskItem = ({ _id, title, isCompleted }) => {
  const { updateTask, deleteTask } = useContext(TaskContext)

  function handleDragStart(e) {
    const taskId = _id
    e.dataTransfer.setData("text/plain", taskId);
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      deleteTask(_id)
    }
  }

  const handleUpdate = (e) => {
    if (e.target.tagName === "INPUT") {
      return
    }

    let newTitle = window.prompt("Update Task", title)
    if (newTitle !== title) {
      updateTask(_id, { title: newTitle })
    }
  }
  return (
    <div draggable={true} onDragStart={handleDragStart} onClick={handleUpdate} className={Styles.task}>
      <input onChange={handleChange} type="checkbox" />
      <p>{title}</p>
    </div>
  )
}

export default TaskItem
import React from 'react'
import Styles from "./task.item.module.css"

const TaskItem = () => {
  return (
    <div className={Styles.task}>
        <input type="checkbox" />
        <p>Some Task</p>
    </div>
  )
}

export default TaskItem
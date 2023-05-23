import React, { useContext, useEffect, useState } from 'react'
import Styles from "./list.module.css"
import TaskItem from './TaskItem';
import { TaskContext } from '../Contexts/TaskContext';

const List = ({ _id }) => {
    const { tasks, getTasks, createTask } = useContext(TaskContext)


    const handleAdd = () => {
        let title = window.prompt("Task title")
        if (title) {
            createTask({ listId: _id, title })
        }
    }

    useEffect(() => {
        getTasks(_id)
    }, [])
    return (
        <div className={Styles.list}>
            <h4>List</h4>
            <div>
                {
                    tasks.filter((item)=>item.listId === _id).map((item, idx) => {
                        return <TaskItem key={idx} {...item} />
                    })
                }
            </div>
            <button onClick={handleAdd} >Add Task</button>
        </div>
    )
}

export default List
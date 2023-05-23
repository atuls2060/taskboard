import React, { useContext, useEffect, useState } from 'react'
import Styles from "./list.module.css"
import TaskItem from './TaskItem';
import { TaskContext } from '../Contexts/TaskContext';

const List = ({ _id,idx }) => {
    const { tasks, getTasks, createTask, updateTask } = useContext(TaskContext)


    const handleAdd = () => {
        let title = window.prompt("Task title")
        if (title) {
            createTask({ listId: _id, title })
        }
    }


    function handleDragOver(e) {
        e.preventDefault();
    }


    function handleDrop(e) {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        const newListId = _id
        updateTask(taskId, { listId: newListId },true)
    }


    useEffect(() => {
        getTasks(_id)
    }, [])
    return (
        <div className={Styles.list}>
            <h4>List {idx+1}</h4>
            <div onDrop={handleDrop} onDragOver={handleDragOver}>
                {
                    tasks.filter((item) => item.listId === _id).map((item, idx) => {
                        return <TaskItem key={idx} {...item} />
                    })
                }
            </div>
            <button onClick={handleAdd} >Add Task</button>
        </div>
    )
}

export default List
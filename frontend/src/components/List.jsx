import React, { useContext, useEffect, useState } from 'react'
import Styles from "./list.module.css"
import TaskItem from './TaskItem';
import { TaskContext } from '../Contexts/TaskContext';

const List = ({ _id }) => {
    const { tasks, getTasks } = useContext(TaskContext)

    useEffect(() => {
        getTasks(_id)
    }, [])
    return (
        <div className={Styles.list}>
            <h4>List</h4>
            <div>
                {
                    tasks.map((item, idx) => {
                        return <TaskItem key={idx} {...item} />
                    })
                }
            </div>
        </div>
    )
}

export default List
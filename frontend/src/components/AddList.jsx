import React, { useContext } from 'react'
import Styles from "./addlist.module.css"
import { ListContext } from '../Contexts/ListContext'

const AddList = () => {
    const {createList} = useContext(ListContext)
    const handleAdd = () => {
        createList()
    }

    return (
        <div className={Styles.addlist}>
            <h4>Create New List</h4>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default AddList
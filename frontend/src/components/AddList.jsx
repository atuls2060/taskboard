import React from 'react'
import Styles from "./addlist.module.css"

const AddList = () => {
    const handleAdd = () => {
        
    }

    return (
        <div className={Styles.addlist}>
            <h4>Create New List</h4>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default AddList
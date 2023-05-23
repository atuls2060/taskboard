import axios from "axios";
import { createContext, useState } from "react";


export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        const token = JSON.parse(localStorage.getItem("token"))
        const baseUrl = process.env.REACT_APP_BASE_URL
        try {
            const { data } = await axios.get(`${baseUrl}/tasks`, {
                headers: {
                    'Authorization': token
                }
            })
            setTasks(data)
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }
    const createTask = async (task) => {
        const token = JSON.parse(localStorage.getItem("token"))
        const baseUrl = process.env.REACT_APP_BASE_URL
        try {
            const { data } = await axios.post(`${baseUrl}/tasks`, task, {
                headers: {
                    'Authorization': token
                },
            })
            console.log(data)
            getTasks()
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }
    const updateTask = async (id, updates, dragEvent = false) => {
        const token = JSON.parse(localStorage.getItem("token"))
        const baseUrl = process.env.REACT_APP_BASE_URL
        try {
            const { data } = await axios.patch(`${baseUrl}/tasks/${id}`, updates, {
                headers: {
                    'Authorization': token
                },
            })
            console.log(data)
            if (!dragEvent) {
                alert("Updated")
            }
            getTasks()
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }
    const deleteTask = async (id) => {
        const token = JSON.parse(localStorage.getItem("token"))
        const baseUrl = process.env.REACT_APP_BASE_URL
        try {
            const { data } = await axios.delete(`${baseUrl}/tasks/${id}`, {
                headers: {
                    'Authorization': token
                },
            })
            console.log(data)
            alert("Completed")
            getTasks()
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }


    return <TaskContext.Provider value={{ tasks, getTasks, createTask, updateTask, deleteTask }}>
        {
            children
        }
    </TaskContext.Provider>
}
export default TaskContextProvider
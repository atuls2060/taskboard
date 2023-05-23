import axios from "axios";
import { createContext, useState } from "react";


export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async (listId) => {
        const token = JSON.parse(localStorage.getItem("token"))
        const baseUrl = process.env.REACT_APP_BASE_URL
        try {
            const { data } = await axios.get(`${baseUrl}/tasks`,{listId},{
                headers: {
                    'Authorization': token
                },
            })
            console.log(tasks)
            setTasks(data)
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }


    return <TaskContext.Provider value={{ tasks, getTasks }}>
        {
            children
        }
    </TaskContext.Provider>
}
export default TaskContextProvider
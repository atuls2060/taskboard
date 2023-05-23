import axios from "axios";
import { createContext, useState } from "react";


export const ListContext = createContext();

const ListContextProvider = ({ children }) => {
    const [list, setList] = useState([]);

    const getList = async () => {
        const token = JSON.parse(localStorage.getItem("token"))
        const baseUrl = process.env.REACT_APP_BASE_URL
        try {
            const { data } = await axios.get(`${baseUrl}/list`, {
                headers: {
                    'Authorization': token
                }
            })
            setList(data)
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }

    const createList = async () => {
        const token = JSON.parse(localStorage.getItem("token"))
        const baseUrl = process.env.REACT_APP_BASE_URL
        try {
            const { data } = await axios.post(`${baseUrl}/list`, {}, {
                headers: {
                    'Authorization': token
                }
            })
            alert("List Created")
            console.log(data)
            getList()
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }


    return <ListContext.Provider value={{ list, getList,createList }}>
        {
            children
        }
    </ListContext.Provider>
}
export default ListContextProvider
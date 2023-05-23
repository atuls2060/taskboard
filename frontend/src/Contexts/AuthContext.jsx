import { createContext, useState } from "react";
import axios from "axios"


export const AuthContext = createContext();
const token = JSON.parse(localStorage.getItem("token"));
const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(token !== null);

    const loginUser = async (cred) => {
        const baseUrl = process.env.REACT_APP_BASE_URL
        try {
            const { data } = await axios.post(`${baseUrl}/users/login`, cred)
            localStorage.setItem("token", JSON.stringify(data.token))
            setIsAuth(true);
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }
    const registerUser = async (cred) => {
        const baseUrl = process.env.REACT_APP_BASE_URL

        try {
            const { data } = await axios.post(`${baseUrl}/users/register`, cred)
            localStorage.setItem("token", JSON.stringify(data.token))
            setIsAuth(true);
        } catch (error) {
            console.log("error", error)
            alert(error.response.data.message)
        }
    }

    const logoutUser = () => {
        setIsAuth(false);
        localStorage.removeItem("token")
    }

    return <AuthContext.Provider value={{ isAuth, loginUser, registerUser, logoutUser }}>
        {
            children
        }
    </AuthContext.Provider>
}
export default AuthContextProvider
import React, { useContext } from 'react'
import Styles from "./navbar.module.css"
import { AuthContext } from '../Contexts/AuthContext'

const Navbar = () => {
  const { logoutUser } = useContext(AuthContext)
  return (
    <div className={Styles.navbar}>
      <h3>Welcome</h3>
      <button onClick={logoutUser} >Logout</button>
    </div>
  )
}

export default Navbar
import React, { useContext, useEffect, useState } from 'react'
import Styles from "./auth.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const Register = () => {
  const { isAuth, registerUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(userData)
  }

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  },[isAuth])
  return (
    <div>
      <div className={Styles.form_container}>
        <form onSubmit={handleSubmit} >
          <h3>Register</h3>
          <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} type='email' placeholder='Email' required />
          <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} type='password' placeholder='Password' required />
          <input type='submit' value="Register" />
          <p>Already have an account ? <Link to='/'>Login</Link></p>
        </form>
      </div>
    </div >
  )
}

export default Register
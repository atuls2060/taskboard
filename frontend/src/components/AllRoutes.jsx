import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Board from '../pages/Board'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoutes from './PrivateRoutes'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes><Board /></PrivateRoutes>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AllRoutes
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate.jsx'
import LoginPasswordLost from './LoginPasswordLost.jsx'
import LoginPasswordReset from './LoginPasswordReset.jsx'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="criar" element={<LoginCreate/>} />
        <Route path="perdeu" element={<LoginPasswordLost/>} />
        <Route path="resetar" element={<LoginPasswordReset/>} />
      </Routes>
    </div>
  )
}

export default Login
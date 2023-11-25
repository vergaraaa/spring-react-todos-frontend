import "./TodoApp.css"
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Login } from './Login';
import { Welcome } from './Welcome';

export const TodoApp = () => {
  return (
    <div className='todo-app'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/welcome' element={<Welcome />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

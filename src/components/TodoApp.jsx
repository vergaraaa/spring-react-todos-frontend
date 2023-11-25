import "./TodoApp.css"
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Login } from './Login';
import { Welcome } from './Welcome';
import { Error } from './Error';

export const TodoApp = () => {
  return (
    <div className='todo-app'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

import "./TodoApp.css"
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Login } from './Login';
import { Welcome } from './Welcome';
import { Error } from './Error';
import { ListTodos } from "./ListTodos";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Logout } from "./Logout";

export const TodoApp = () => {
  return (
    <div className='todo-app'>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/welcome/:username' element={<Welcome />} />
          <Route path='/todos' element={<ListTodos />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

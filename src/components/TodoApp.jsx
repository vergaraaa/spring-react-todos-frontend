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
import AuthProvider from "../security/AuthContext";


export const TodoApp = () => {
  return (
    <div className='todo-app'>
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/welcome/:username' element={<Welcome />} />
            <Route path='/todos' element={<ListTodos />} />
            <Route path='/logout' element={<Logout />} />

            <Route path='*' element={<Error />} />
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

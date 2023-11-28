import "./TodoApp.css"
import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Login } from './Login';
import { Welcome } from './Welcome';
import { Error } from './Error';
import { ListTodos } from "./ListTodos";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Logout } from "./Logout";
import AuthProvider, { useAuthContext } from "../security/AuthContext";
import { TodoComponent } from "./TodoComponent";

const AuthenticatedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if(isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />
}

export const TodoApp = () => {
  return (
    <div className='todo-app'>
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />

            {/* PROTECTED ROUTES */}
            <Route path='/welcome/:username' element={
              <AuthenticatedRoute>
                <Welcome />
              </AuthenticatedRoute>
            } />
            <Route path='/todos' element={
              <AuthenticatedRoute>
                <ListTodos />
              </AuthenticatedRoute>
            } />
            <Route path='/todos/:id' element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            } />
            <Route path='/logout' element={
              <AuthenticatedRoute>
                <Logout />
              </AuthenticatedRoute>
            } />

            <Route path='*' element={<Error />} />
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

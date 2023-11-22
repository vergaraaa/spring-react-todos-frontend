import React, { useState } from 'react'

export const Login = () => {

    const [username, setUsername] = useState("vergaraaa");
    const [password, setPassword] = useState("");

    const handleUsernameChanged = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChanged = (e) => {
        setPassword(e.target.value);
    }

  return (
    <div className='òogin'>
        <div className='login-form'>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={handleUsernameChanged} 
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handlePasswordChanged} 
                />
            </div>
            <div>
                <button type="button" name='login'>Login</button>
            </div>
        </div>
    </div>
  )
}

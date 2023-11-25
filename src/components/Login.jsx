import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [username, setUsername] = useState("vergaraaa");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    const navigate = useNavigate();

    const handleUsernameChanged = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChanged = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        if(username === "vergaraaa" && password === "123456") {
            setError(false);
            setSuccess(true);
            navigate("/welcome");
        }
        else {
            setError(true);
            setSuccess(false);
        }
    }

  return (
    <div className='login'>
        { success &&  <div className="success-message">Authenticated succesfully</div>}
        { error && <div className="error-message">Authenticated failed. Please check your credentials</div> }
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
                <button type="button" name='login' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </div>
  )
}

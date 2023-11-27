import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../security/AuthContext';

export const Login = () => {

    const [username, setUsername] = useState("vergaraaa");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    
    const navigate = useNavigate();

    const { login } = useAuthContext();

    const handleUsernameChanged = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChanged = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        if(login(username, password)) {
            navigate(`/welcome/${username}`);
        }
        else {
            setError(true);
        }
    }

  return (
    <div className='login'>
        <h1>Time to Login!</h1>
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

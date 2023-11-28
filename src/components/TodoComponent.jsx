import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTodoFromUser } from '../api/TodoApiService';
import { useAuthContext } from '../security/AuthContext';

export const TodoComponent = () => {

    const { id } = useParams();
    const { username } = useAuthContext();

    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState(null)
    
    useEffect(() => {    
        getTodoFromUser(username, id) 
            .then((res) => { 
                setDescription(res.data.description);
            })
            .catch((error) => error);
    }, [])
    

  return (
    <div className='container'>
        <h1>Enter Todo Details</h1>
        <div>
            <h3>{description}</h3>
        </div>
    </div>
  )
}

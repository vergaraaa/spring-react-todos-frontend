import React, { useEffect, useState } from 'react'
import { getTodosFromUser } from '../api/TodoApiService';

export const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodosFromUser();
    }, [])
    
    const fetchTodosFromUser = () => {
        getTodosFromUser("vergaraaa")
          .then((response) => setTodos(response.data))
          .catch((error) => console.log(error))
          .finally(() => {});
    }

  return (
    <div className='container'>
        <h1>Things you want to do</h1>
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Is done</th>
                        <th>Target date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

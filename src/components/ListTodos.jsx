import React, { useEffect, useState } from 'react'
import { deleteTodoById, getTodosFromUser } from '../api/TodoApiService';
import { useAuthContext } from '../security/AuthContext';

export const ListTodos = () => {

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState("");

    const { username } = useAuthContext();

    useEffect(() => {
        fetchTodosFromUser();
    }, []);
    
    const fetchTodosFromUser = () => {
        getTodosFromUser(username)
          .then((response) => setTodos(response.data))
          .catch((error) => console.log(error))
          .finally(() => {});
    }

    const deleteTodo = (id) => {
        deleteTodoById(username, id)
            .then(() => {
                setMessage(`Todo with id ${id} deleted successfully`);
                
                // refresh todos 
                // first way
                const newTodos = todos.filter((todo) => todo.id !== id);
                setTodos(newTodos);

                // second way
                // fetchTodosFromUser();
            })
            .catch((error) => console.log(error))
            .finally(() => {});
    }

  return (
    <div className='container'>
        <h1>Things you want to do</h1>
        <div>
            {
                message && <div className='alert alert-success'>{message}</div>
            }
            <table className='table'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is done</th>
                        <th>Target date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => deleteTodo(todo.id)}
                                        >Delete</button>
                                    </td>
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

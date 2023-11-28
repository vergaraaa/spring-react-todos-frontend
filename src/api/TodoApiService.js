import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'http://localhost:8080',
    }
);

export const getTodosFromUser = (username) =>
    api.get(`/users/${username}/todos`);

export const deleteTodoById = (username, id) =>
    api.delete(`/users/${username}/todos/${id}`);
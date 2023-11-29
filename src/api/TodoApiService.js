import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'http://localhost:8080',
    }
);

export const getTodosFromUser = (username) =>
    api.get(`/users/${username}/todos`);

export const getTodoFromUser = (username, id) =>
    api.get(`/users/${username}/todos/${id}`);

export const createTodoFromUser = (username, todo) =>
    api.post(`/users/${username}/todos`, todo);

export const updateTodoFromUser = (username, id, todo) =>
    api.put(`/users/${username}/todos/${id}`, todo);

export const deleteTodoById = (username, id) =>
    api.delete(`/users/${username}/todos/${id}`);
import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'http://localhost:8080',
    }
)

export const getHelloWorldBean = () =>
    api.get('/hello-world-bean')

export const getHelloWorldPathVariable = (username) =>
    api.get(`/hello-world/path-variable/${username}`);
import { api } from "./ApiClient";

export const getHelloWorldBean = () =>
    api.get('/hello-world-bean')

export const getHelloWorldPathVariable = (username) =>
    api.get(`/hello-world/path-variable/${username}`);

export const exceuteBasicAuthenticationService = (token) =>
    api.get("/basicauth", {
        headers: {
            Authorization: token,
        }
    });
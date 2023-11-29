import { api } from "./ApiClient";

export const exceuteJwtAuthenticationService = (username, password) =>
    api.post("/authenticate", {
        username,
        password
    });
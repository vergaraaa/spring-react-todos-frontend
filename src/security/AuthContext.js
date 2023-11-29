import { createContext, useContext, useState } from "react";
import { exceuteBasicAuthenticationService } from "../api/HelloWorldApiService";

// Create the context
export const AuthContext = createContext("");

export const useAuthContext = () => useContext(AuthContext);

// Provide context to other components
export default function AuthProvider({ children }) {

  // set state of the context
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null)

  const login = async (username, password) => {
    const baToken = "Basic " + window.btoa(username + ":" + password);

    try {
      const res = await exceuteBasicAuthenticationService(baToken);

      if (res.status === 200) {
        setToken(baToken);
        setUsername(username);
        setIsAuthenticated(true);

        return true;
      }
      else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }


  }

  const logout = () => {
    setToken(null);
    setUsername(null);
    setIsAuthenticated(false);
  }

  const value = {
    isAuthenticated,
    login,
    logout,
    username,
    token,
  }

  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}
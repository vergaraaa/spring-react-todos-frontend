import { createContext, useContext, useState } from "react";

// Create the context
export const AuthContext = createContext("");

export const useAuthContext = () => useContext(AuthContext);

// Provide context to other components
export default function AuthProvider({ children }) {

    // set state of the context
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    
    const login = (username, password) => {
      if(username === "vergaraaa" && password === "123456") {
        setIsAuthenticated(true);
        return true;
      }
      else {
        setIsAuthenticated(false);
        return false;
      }
    }
    
    const logout = () => {
      setIsAuthenticated(false);
    }
    
    const value = {
      isAuthenticated,
      login,
      logout,
    }

    return (
      <AuthContext.Provider value={value} >
        { children } 
    </AuthContext.Provider>
  )
}
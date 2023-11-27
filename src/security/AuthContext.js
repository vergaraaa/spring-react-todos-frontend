import { createContext, useContext, useState } from "react";

// Create the context
export const AuthContext = createContext("");

export const useAuthContext = () => useContext(AuthContext);

// Provide context to other components
export default function AuthProvider({ children }) {

    // set state of the context
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
  }

  return (
    <AuthContext.Provider value={value} >
        { children } 
    </AuthContext.Provider>
  )
}
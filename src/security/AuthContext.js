import { createContext, useContext, useState } from "react";

// Create the context
export const AuthContext = createContext("");

export const useAuthContext = () => useContext(AuthContext);

// Provide context to other components
export default function AuthProvider({ children }) {

    // set state of the context
    const [number, setNumber] = useState(0);

  return (
    <AuthContext.Provider value={{
        number,
        setNumber,
    }} >
        { children } 
    </AuthContext.Provider>
  )
}
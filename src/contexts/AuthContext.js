import React, {
    createContext, useState, useContext
} from 'react';
import localforage from 'localforage'

const AuthContext = createContext({});
export const api = {};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if(username === "umut" && password === "12345"){
            setUser("umut");
        }
    }

    const register = (username, password) => {
        localforage.setItem(username, password);
    }

    return (
        <AuthContext.Provider value={{ user, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
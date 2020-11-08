import React, {
    createContext, useState, useContext, useEffect
} from 'react';
import localforage from 'localforage'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        localforage.getItem(username).then( pass => {
            if(pass === password){
                setUser(username);
                localforage.setItem("lastUser", username);
            }
        })
    }

    const register = (username, password) => {
        localforage.setItem(username, password);
    }

    const logout = () => {
        setUser(null);
        localforage.setItem("lastUser", null);
    }

    useEffect(() => {
        localforage.getItem("lastUser").then(username => {
            setUser(username);
        })
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
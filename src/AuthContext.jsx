import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (username, role) => {
        const newUser = { username, role };
        console.log(`${username} is logind as ${role}`);

        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));

    };

    const logout = () => {
        console.log('loged out');
        setUser(null);
        localStorage.removeItem('user');

    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

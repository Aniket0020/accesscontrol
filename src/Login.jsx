import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('viewer');

    const handleLogin = () => {
        if (username.trim()) {
            login(username, role);
        } else {
            alert('Please enter a username!');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
            </select>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;

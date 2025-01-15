import React from 'react';
import { useAuth } from '../AuthContext';

const Logout = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            {user ? (
                <>
                    <p>Logged in as: {user.username}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
};

export default Logout;

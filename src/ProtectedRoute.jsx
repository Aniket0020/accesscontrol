import React from 'react';
import { useAuth } from './AuthContext';
import { roles } from './Roles';

const ProtectedRoute = ({ allowedActions, children }) => {
    const { user } = useAuth();

    if (!user) {
        return <h3>You must be logged in to view this page.</h3>;
    }

    const userPermissions = roles[user.role] || [];
    const isAllowed = allowedActions.every((action) =>
        userPermissions.includes(action)
    );

    if (!isAllowed) {
        return <h3>Access Denied</h3>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

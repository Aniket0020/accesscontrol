import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const ManageUsers = () => {
    return (
        <ProtectedRoute allowedActions={['manageUsers']}>
            <h2>Manage Users</h2>
            <p>Only admins can see this page.</p>
        </ProtectedRoute>
    );
};

export default ManageUsers;

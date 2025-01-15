import React from 'react';
import ProtectedRoute from '../ProtectedRoute';

const EditContent = () => {
    return (
        <ProtectedRoute allowedActions={['editContent']}>
            <h2>EditContent</h2>
            <p>Welcome to the dashboard!</p>
        </ProtectedRoute>
    );
};

export default EditContent;
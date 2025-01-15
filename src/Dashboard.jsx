import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const Dashboard = () => {
    return (
        <ProtectedRoute allowedActions={['viewDashboard']}>
            <h2>Dashboard</h2>
            <p>Welcome to the dashboard!</p>
        </ProtectedRoute>
    );
};

export default Dashboard;

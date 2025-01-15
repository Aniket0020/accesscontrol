import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ManageUsers from './ManageUser';
import EditContent from './components/EditContent';
import Logout from './components/Logout';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/manage-users">Manage Users</Link>
          <Link to="/EditContent">EditContent</Link>
          <Logout /> {/* Add LogoutButton to the navigation */}
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/EditContent" element={<EditContent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

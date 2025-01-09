import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Login from "./pages/Login";
import Profile from './pages/Profile';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

import SignUpPage from './pages/Auth/SignUpPage';
import LoginPage from './pages/Auth/LoginPage';
import ForgetPasswordPage from './pages/Auth/ForgetPasswordPage';
import AdminPage from './pages/Auth/AdminPage';
import HomePage from './pages/HomePage';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forget-password" element={<ForgetPasswordPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

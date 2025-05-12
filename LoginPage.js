import React, { useState, useEffect, useRef } from 'react';

import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginPage = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        axios.post('http://localhost:5000/api/users/login', form)
            .then(res => {
                alert("Login successful");
                navigate('/stu');
            })
            .catch(err => {
                alert("Login failed: " + err.response.data.message);
            });
    };

    return (
        <div>
            <input
                name="username"
                onChange={handleChange}
                value={form.username}
                placeholder="Enter the username"
            />
            <input
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
                placeholder="Enter the password"
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => navigate("/register")}>Register User</button>
        </div>
    );
};

export default LoginPage;

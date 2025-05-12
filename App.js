import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterUser from './components/RegisterUser';
import StudentManager from './components/StudentManager';

function App() {
  return (
    <BrowserRouter>     
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/stu" element={<StudentManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

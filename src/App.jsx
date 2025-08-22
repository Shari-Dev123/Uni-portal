import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import StudentLogin from "./Pages/Login/StudentLogin.jsx";
import StudentSearch from "./Pages/Student/StudentSearch.jsx";
import TeacherLogin from "./Pages/Teacher/teacherLogin.jsx";
import TeacherDashboard from "./TeacherDashboard/TeacherDashboard.jsx";
import Home from './Components/Home/home.jsx';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/Student/Login" element={<StudentLogin />} />
        <Route path="/Student/Dashboard" element={<StudentSearch />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
         <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </>
  );
};

export default App;

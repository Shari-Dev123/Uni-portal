import React, { useState } from 'react';
import "./TeacherLogin.css"; 
import { useNavigate } from 'react-router-dom';
import { teachers } from '../../Data/teachers.js';


export default function TeacherLogin() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleLogin = () =>{
        const teacher = teachers.find(
            (t) => t.email === email && t.password === password
        )
        if (teacher) {
            localStorage.setItem("teacherName", teacher.name)
            navigate("/teacher/dashboard")
        } else{
            alert("Invalid email or Password")
        }
    }

    return(
        <div className="teacher-login">
            <h2>Teachers Login</h2>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
            <button onClick={handleLogin}>Login</button>
        </div>
    )

}




import React, { useState } from 'react';
import "./StudentLogin.css"; 
import { useNavigate } from 'react-router-dom';
import { StudentData } from '../../Data/StudentData.js';


export default function StudentLogin() {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate();
       

    const handleLogin = () =>{
        const Student = StudentData.find(
            (S) => S.email === email && S.password === password
        )
        if (Student) {
            localStorage.setItem("StudentName", Student.name)
            navigate("/Student/Dashboard")
        } else{
            alert("Invalid email or Password")
        }
    }

    return(
        <div className="student-login">
            <h2>Students Login</h2>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  />
            <button onClick={handleLogin}>Login</button>
        </div>
    )

}




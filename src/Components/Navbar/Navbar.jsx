import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import UOH from "../../assets/UOH.png";
import { teachers } from '../../Data/teachers';
import TeacherLogin from "../../TeacherDashboard/TeacherDashboard.jsx";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
    <img src={UOH} alt="" className='uoh-logo'/>
      </div>
      <nav>
        <Link to="/Student/Login" className="navbar-link">Student</Link>
        <Link to="/teacher/login" className="navbar-link-teacher">Teacher</Link>
      </nav>
    </div>
  )
}

export default Navbar

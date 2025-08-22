import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import timeTableData from "../Data/timeTableData.js";
import "./TeacherDashboard.css"


export default function TeacherDashboard() {
    const [timeTable, setTimeTable] = useState([]);
    const navigate = useNavigate()



    useEffect(() => {
        const teacherName = localStorage.getItem("teacherName")
        if (!teacherName) {
            navigate("/teacher/login")
            return;
        }
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        const today = days[new Date().getDay()];

        const classes = timeTableData.filter(t => t.teacherName === teacherName && t.day === today);
        setTimeTable(classes);

        const todayData = timeTableData.find(t => t.day === today);
        if (todayData) {
            const classes = todayData.periods.filter(p => p.teacher === teacherName);
            setTimeTable(classes);
        } else {
            setTimeTable([]);
        }


        if (todayData) {
            const classes = todayData.periods.filter(p => p.teacher === teacherName);
            setTimeTable(classes.length ? classes : [{ subject: "You don't have any Class Today!", room: "-", time: "-" }]);}


    }, [navigate]);


    return (
        <div className="container">
            <h2>Today's Classes</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Subject</th>
                        <th>Room</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {timeTable.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.department}</td>
                            <td>{item.subject}</td>
                            <td>{item.room}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
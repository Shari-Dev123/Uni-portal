import React from "react";
import { useEffect, useState } from "react";
import timeTableData from "/src/Data/timeTableData.js";
import "./StudentSearch.css";
import { useNavigate } from "react-router-dom";

const StudentSearch = () => {
  const [day, setDay] = useState("");
  const [subject, setSubject] = useState("");
  const [department, setDepartment] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate()


  useEffect(() => {
    const StudentName = localStorage.getItem("StudentName")
    if (!StudentName) {
      navigate("/Student/Login")
      return;
    }
  })

  const handleSearch = () => {
    const dayInput = day.trim().toLowerCase();
    const subjectInput = subject.trim().toLowerCase();
    const departmentInput = department.trim().toLocaleLowerCase();

    if (!dayInput && !subjectInput && !departmentInput) {
      setResults();
      setHasSearched(false)
      return;
    }

    const allPeriods = timeTableData.flatMap((dayEntry) =>
      dayEntry.periods.map((period) => ({
        day: dayEntry.day,
        ...period,
      }))
    );

    const filtered = allPeriods.filter((period) => {
      const matchesDay = dayInput === "" || period.day.toLowerCase() === dayInput;
      const matchesSubject =
        subjectInput === "" || period.subject.toLowerCase().includes(subjectInput);
      const matchesDepartment =
        departmentInput === "" || period.department.toLowerCase().includes(departmentInput);
      return matchesDay && matchesSubject && matchesDepartment;
    });

    setResults(filtered);
    setHasSearched(true)
  };

  return (
    <div className="student">
      <h2>Search Timetable</h2>

      <input
        type="text" placeholder="Day" value={day} onChange={(e) => setDay(e.target.value)} required />
      <input
        type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      <input
        type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />

      <button onClick={handleSearch}>Search</button>

      {hasSearched ? (
         results.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Department</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, idx) => (
              <tr key={idx}>
                <td>{item.day}</td>
                <td>{item.time}</td>
                <td>{item.subject}</td>
                <td>{item.teacher}</td>
                <td>{item.department}</td>
                <td>{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
        ) : (<p>No results found.</p>
      )) : null}
    </div>
  );
};

export default StudentSearch;
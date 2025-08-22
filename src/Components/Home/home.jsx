import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/Student/Login");
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to University of Haripur</h1>
          <p className="hero-subtitle">
            Streamlined student management, course access, and academic resources all in one platform.
          </p>
          <button className="hero-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      <section className="image-section">
        <div className="image-container">
          <img src="https://media.licdn.com/dms/image/v2/C4E12AQFw3-HuFFV9fQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1650126660007?e=2147483647&v=beta&t=GeHi4PlBPkz0zoMICIoI52M22829wDxbvV5y6sIoFPU" alt="University" className="university-image" />
        </div>
      </section>
    </div>
  );
}

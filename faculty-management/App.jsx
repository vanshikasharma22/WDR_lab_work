import React, { useState } from "react";
import CourseNavbar from "./coursemanagement/CourseNavbar";
import FacultyNavbar from "./faculty/FacultyNavbar";

function App() {
  const [active, setActive] = useState("course");

  return (
    <div>
      {/* TOP NAVIGATION */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          background: "#444",
          padding: "10px",
          color: "white",
        }}
      >
        <span style={{ cursor: "pointer" }} onClick={() => setActive("course")}>
          Course Management
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("faculty")}>
          Faculty Management
        </span>
      </nav>

      {/* MODULES */}
      {active === "course" && <CourseNavbar />}
      {active === "faculty" && <FacultyNavbar />}
    </div>
  );
}

export default App;

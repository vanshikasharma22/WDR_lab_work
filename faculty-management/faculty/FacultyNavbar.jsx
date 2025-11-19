import React, { useState } from "react";
import FacultyRegistration from "./FacultyRegistration";
import FacultyList from "./FacultyList";
import FacultyProfile from "./FacultyProfile";
import FacultyUpdate from "./FacultyUpdate";

function FacultyNavbar() {
  const [active, setActive] = useState("list");
  const [faculty, setFaculty] = useState([]);

  // ADD
  const addFaculty = (data) => {
    setFaculty([...faculty, data]);
  };

  // UPDATE
  const updateFaculty = (id, updatedData) => {
    setFaculty(
      faculty.map((f) =>
        f.facultyid === id ? { ...f, ...updatedData } : f
      )
    );
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          background: "#222",
          padding: "10px",
          color: "white",
        }}
      >
        <span style={{ cursor: "pointer" }} onClick={() => setActive("register")}>
          Register
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("list")}>
          List
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("profile")}>
          Profile
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("update")}>
          Update
        </span>
      </nav>

      {/* Main Section */}
      <div style={{ padding: "20px" }}>
        {active === "register" && <FacultyRegistration addFaculty={addFaculty} />}
        {active === "list" && <FacultyList faculty={faculty} />}
        {active === "profile" && <FacultyProfile faculty={faculty} />}
        {active === "update" && (
          <FacultyUpdate faculty={faculty} updateFaculty={updateFaculty} />
        )}
      </div>
    </div>
  );
}

export default FacultyNavbar;

import { useState } from "react";
import StudentRegistration from "./StudentRegistration.jsx";
import StudentUpdate from "./StudentUpdate.jsx";
import StudentDelete from "./StudentDelete.jsx";
import StudentList from "./StudentList.jsx";
import StudentDetails from "./StudentDetails.jsx";

function StudentNavbar() {
  const [active, setActive] = useState("list");

  return (
    <>
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
          Register Student
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("update")}>
          Update Student
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("delete")}>
          Delete Student
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("list")}>
          Student List
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("detail")}>
          Student Details
        </span>
      </nav>

      <div style={{ padding: "20px" }}>
        {active === "register" && <StudentRegistration />}
        {active === "update" && <StudentUpdate />}
        {active === "delete" && <StudentDelete />}
        {active === "list" && <StudentList />}
        {active === "detail" && <StudentDetails />}
      </div>
    </>
  );
}

export default StudentNavbar;

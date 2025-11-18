import React, { useState } from "react";
import CourseRegistration from "./CourseRegistration";
import CourseUpdate from "./CourseUpdate";
import CourseDelete from "./CourseDelete";
import CourseList from "./CourseList";
import CourseDetail from "./CourseDetails";   // NEW IMPORT

function CourseNavbar() {
  const [active, setActive] = useState("list");

  const [courses, setCourses] = useState([]);

  // ADD
  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  // UPDATE
  const updatecourse = (courseid, updatedData) => {
    setCourses(
      courses.map((c) =>
        c.courseid === courseid ? { ...c, ...updatedData } : c
      )
    );
  };

  // DELETE
  const deletecourse = (courseid) => {
    setCourses(courses.filter((c) => c.courseid !== courseid));
  };

  return (
    <div>
      {/* NAVBAR */}
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
          Register Course
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("update")}>
          Update Course
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("delete")}>
          Delete Course
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("list")}>
          Course List
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => setActive("detail")}>
          Course Detail
        </span>
      </nav>

      {/* MAIN CONTENT */}
      <div style={{ padding: "20px" }}>
        {active === "register" && <CourseRegistration addCourse={addCourse} />}

        {active === "update" && (
          <CourseUpdate updatecourse={updatecourse} courses={courses} />
        )}

        {active === "delete" && (
          <CourseDelete deletecourse={deletecourse} courses={courses} />
        )}

        {active === "list" && <CourseList courses={courses} />}

        {active === "detail" && <CourseDetail courses={courses} />}
      </div>
    </div>
  );
}

export default CourseNavbar;

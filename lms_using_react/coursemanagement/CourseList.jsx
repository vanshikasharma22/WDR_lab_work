import React from "react";

function CourseList({courses}) {
  return (
    <div>
      <h3>All Courses</h3>

      {courses.length === 0 ? (
        <p>No courses found</p>
      ) : (
        <ul>
          {courses.map((c) => (
            <li key={c.courseid}>
              ID: {c.courseid}, {c.coursename} — {c.description}, Duration:{" "}
              {c.duration} hrs
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseList;

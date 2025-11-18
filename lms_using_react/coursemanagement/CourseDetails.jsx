import React, { useState } from "react";

function CourseDetails({ courses }) {
  const [id, setId] = useState("");
  const [course, setCourse] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const found = courses.find((c) => c.courseid === id);

    if (!found) {
      setCourse(null);
      setError("Course not found!");
    } else {
      setCourse(found);
      setError("");
    }
  };

  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>Course Details</h3>

      <input
        type="text"
        placeholder="Enter Course ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <br />
      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {course && (
        <div style={{ border: "1px solid black", padding: "15px" }}>
          <p><strong>Course ID:</strong> {course.courseid}</p>
          <p><strong>Name:</strong> {course.coursename}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Duration:</strong> {course.duration} hours</p>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;

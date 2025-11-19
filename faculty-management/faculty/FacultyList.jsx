import React from "react";

function FacultyList({ faculty }) {
  return (
    <div>
      <h2>All Faculty</h2>

      {faculty.length === 0 ? (
        <p>No faculty found</p>
      ) : (
        <ul>
          {faculty.map((f) => (
            <li key={f.facultyid}>
              {f.facultyid} — {f.facultyname} — {f.qualification}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FacultyList;

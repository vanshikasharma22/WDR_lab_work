import React, { useState } from "react";

function FacultyProfile({ faculty }) {
  const [id, setId] = useState("");
  const [fdata, setFdata] = useState(null);

  const search = () => {
    const found = faculty.find((f) => f.facultyid === id);
    setFdata(found || null);
  };

  return (
    <div>
      <h2>Faculty Profile</h2>

      <input
        type="text"
        placeholder="Enter Faculty ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={search}>Search</button>

      <br /><br />

      {fdata ? (
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <p><b>ID:</b> {fdata.facultyid}</p>
          <p><b>Name:</b> {fdata.facultyname}</p>
          <p><b>Age:</b> {fdata.age}</p>
          <p><b>Qualification:</b> {fdata.qualification}</p>
          <p><b>Joined:</b> {fdata.joined_at}</p>
          <p><b>Status:</b> {fdata.status}</p>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default FacultyProfile;

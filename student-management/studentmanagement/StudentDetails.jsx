import { useContext, useState } from "react";
import { StudentContext } from "./StudentContext";

function StudentDetails() {
  const { students } = useContext(StudentContext);

  const [id, setId] = useState("");
  const [student, setStudent] = useState(null);

  const search = () => {
    const found = students.find((s) => s.studentid === id);
    setStudent(found || null);
  };

  return (
    <div>
      <h2>Student Details</h2>

      <input
        type="text"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={search}>Search</button>

      <br /><br />

      {student && (
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <p><strong>ID:</strong> {student.studentid}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Age:</strong> {student.age}</p>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;

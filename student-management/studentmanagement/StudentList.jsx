import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentList() {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h2>All Students</h2>

      {students.length === 0 ? (
        <p>No Students Found</p>
      ) : (
        <ul>
          {students.map((s) => (
            <li key={s.studentid}>
              {s.studentid} — {s.name} — {s.course} — {s.age} yrs
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;

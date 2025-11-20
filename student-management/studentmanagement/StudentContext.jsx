import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  // ADD
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // UPDATE
  const updateStudent = (id, updatedData) => {
    setStudents(
      students.map((s) =>
        s.studentid === id ? { ...s, ...updatedData } : s
      )
    );
  };

  // DELETE
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.studentid !== id));
  };

  return (
    <StudentContext.Provider
      value={{ students, addStudent, updateStudent, deleteStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
}

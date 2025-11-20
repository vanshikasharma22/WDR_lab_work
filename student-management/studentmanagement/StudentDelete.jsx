import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentDelete() {
  const { deleteStudent, students } = useContext(StudentContext);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const exists = students.some((s) => s.studentid === data.studentid);

    if (!exists) {
      alert("Student Not Found!");
      return;
    }

    deleteStudent(data.studentid);
    alert("Student Deleted Successfully!");
    reset();
  };

  return (
    <div>
      <h2>Delete Student</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        Student ID:
        <input {...register("studentid", { required: true })} />
        <br /><br />

        <button>Delete</button>
      </form>
    </div>
  );
}

export default StudentDelete;

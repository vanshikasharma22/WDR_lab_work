import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentUpdate() {
  const { updateStudent, students } = useContext(StudentContext);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const exists = students.some((s) => s.studentid === data.studentid);

    if (!exists) {
      alert("Student Not Found!");
      return;
    }

    updateStudent(data.studentid, data);
    alert("Student Updated Successfully!");
    reset();
  };

  return (
    <div>
      <h2>Update Student</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        Student ID:
        <input {...register("studentid", { required: true })} />
        <br /><br />

        Name:
        <input {...register("name", { required: true })} />
        <br /><br />

        Course:
        <input {...register("course", { required: true })} />
        <br /><br />

        Age:
        <input type="number" {...register("age", { required: true })} />
        <br /><br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default StudentUpdate;

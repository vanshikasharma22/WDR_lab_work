import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentRegistration() {
  const { addStudent } = useContext(StudentContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addStudent(data);
    alert("Student Registered Successfully!");
    reset();
  };

  return (
    <div>
      <h2>Register Student</h2>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentRegistration;

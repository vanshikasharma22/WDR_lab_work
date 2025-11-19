import React from "react";
import { useForm } from "react-hook-form";

function FacultyRegistration({ addFaculty }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addFaculty(data);
    alert("Faculty Registered Successfully!");
    reset();
  };

  return (
    <div>
      <h2>Register Faculty</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        Faculty ID:
        <input
          type="text"
          {...register("facultyid", { required: "ID required" })}
        />
        <p style={{ color: "red" }}>{errors.facultyid?.message}</p>
        <br />

        Faculty Name:
        <input
          type="text"
          {...register("facultyname", { required: "Name required" })}
        />
        <p style={{ color: "red" }}>{errors.facultyname?.message}</p>
        <br />

        Age:
        <input
          type="number"
          {...register("age", { required: "Required" })}
        />
        <br />

        Qualification:
        <input
          type="text"
          {...register("qualification", { required: "Required" })}
        />
        <br />

        Joined At:
        <input type="date" {...register("joined_at", { required: true })} />
        <br />

        Status:
        <select {...register("status")}>
          <option value="active">Active</option>
          <option value="left">Left</option>
        </select>
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FacultyRegistration;

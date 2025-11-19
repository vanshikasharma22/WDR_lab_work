import React from "react";
import { useForm } from "react-hook-form";

function FacultyUpdate({ faculty, updateFaculty }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const exists = faculty.some((f) => f.facultyid === data.facultyid);

    if (!exists) {
      alert("Faculty not found!");
      return;
    }

    updateFaculty(data.facultyid, {
      facultyname: data.facultyname,
      qualification: data.qualification,
      status: data.status,
    });

    alert("Faculty Updated!");
  };

  return (
    <div>
      <h2>Update Faculty</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        Faculty ID:
        <input type="text" {...register("facultyid", { required: true })} />
        <br /><br />

        Name:
        <input type="text" {...register("facultyname")} />
        <br /><br />

        Qualification:
        <input type="text" {...register("qualification")} />
        <br /><br />

        Status:
        <select {...register("status")}>
          <option value="active">Active</option>
          <option value="left">Left</option>
        </select>
        <br /><br />

        <button>Update</button>
      </form>
    </div>
  );
}

export default FacultyUpdate;

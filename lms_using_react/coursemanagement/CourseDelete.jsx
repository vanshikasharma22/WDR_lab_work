import React from "react";
import { useForm } from "react-hook-form";

function CourseDelete({ deletecourse, courses }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit function
  const onSubmit = (data) => {
    const exists = courses.some((c) => c.courseid === data.courseid);

    if (!exists) {
      alert("Course not found!");
      return;
    }

    deletecourse(data.courseid);
    alert("Course deleted successfully!");
    reset();
  };

  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>Delete Course</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* COURSE ID */}
        Course ID:
        <input
          type="text"
          placeholder="Enter Course ID"
          {...register("courseid", {
            required: "Course ID is required",
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: "Only letters and numbers allowed",
            },
            minLength: {
              value: 3,
              message: "Minimum 3 characters required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 characters allowed",
            },
          })}
        />
        {errors.courseid && (
          <p style={{ color: "red" }}>{errors.courseid.message}</p>
        )}
        <br />
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 15px",
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}

export default CourseDelete;

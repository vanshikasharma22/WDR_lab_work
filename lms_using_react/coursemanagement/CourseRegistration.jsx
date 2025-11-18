import React from "react";
import { useForm } from "react-hook-form";

function CourseRegistration({ addCourse }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addCourse(data);
    reset();
    alert("Course Registered!");
  };

  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>Register Course</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* COURSE ID */}
        Course ID:
        <input
          type="text"
          placeholder="Course ID"
          {...register("courseid", {
            required: "Course ID is required",
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: "Only letters & numbers allowed (no special characters)",
            },
          })}
        />
        {errors.courseid && (
          <p style={{ color: "red" }}>{errors.courseid.message}</p>
        )}
        <br />
        <br />
        {/* COURSE NAME */}
        Course Name:
        <input
          type="text"
          placeholder="Course Name"
          {...register("coursename", {
            required: "Course name is required",
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: "Only alphabets allowed (no numbers or symbols)",
            },
            minLength: {
              value: 3,
              message: "Course name must be at least 3 characters",
            },
          })}
        />
        {errors.coursename && (
          <p style={{ color: "red" }}>{errors.coursename.message}</p>
        )}
        <br />
        <br />
        {/* DESCRIPTION */}
        Description:
        <input
          type="text"
          placeholder="Description"
          {...register("description", {
            required: "Description is required",
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: "Only alphabets allowed in description",
            },
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters",
            },
          })}
        />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description.message}</p>
        )}
        <br />
        <br />
        {/* DURATION */}
        Duration (Hours):
        <input
          type="number"
          placeholder="Duration in Hours"
          {...register("duration", {
            required: "Duration is required",
            min: {
              value: 1,
              message: "Min duration is 1 hr",
            },
            max: {
              value: 100,
              message: "Max duration is 100 hrs",
            },
          })}
        />
        {errors.duration && (
          <p style={{ color: "red" }}>{errors.duration.message}</p>
        )}
        <br />
        <br />
        {/* MIN ENROLLMENT */}
        Minimum Enrollment:
        <input
          type="number"
          placeholder="Minimum Enrollment"
          {...register("min_enrollment", {
            required: "Minimum enrollment is required",
            min: {
              value: 1,
              message: "At least 1 student required",
            },
            max: {
              value: 500,
              message: "Max limit is 500 students",
            },
          })}
        />
        {errors.min_enrollment && (
          <p style={{ color: "red" }}>{errors.min_enrollment.message}</p>
        )}
        <br />
        <br />
        {/* DATE */}
        Date (Created / Updated):
        <input
          type="date"
          {...register("created_or_updated", {
            required: "Date is required",
          })}
        />
        {errors.created_or_updated && (
          <p style={{ color: "red" }}>{errors.created_or_updated.message}</p>
        )}
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default CourseRegistration;

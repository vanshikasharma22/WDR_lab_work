import React from "react";
import { useForm } from "react-hook-form";

function CourseUpdate({ updatecourse, courses }) {
  // Initializing useForm with error tracking
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit function
  const onSubmit = (data) => {
    // Check if course exists
    const exists = courses.some((s) => s.courseid === data.courseid);

    if (!exists) {
      alert("Course not found!");
      return;
    }

    // Updating course
    updatecourse(data.courseid, {
      coursename: data.coursename,
      description: data.description,
      duration: data.duration,
    });

    alert("Course updated!");
    reset();
  };

  return (
    <div>
      <h3 style={{ fontSize: "30px" }}>Update Courses</h3>

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
        {/* COURSE NAME */}
        Course Name:
        <input
          type="text"
          placeholder="Course Name"
          {...register("coursename", {
            required: "Course name is required",
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: "Only alphabets allowed (no numbers)",
            },
            minLength: {
              value: 3,
              message: "Minimum 3 characters required",
            },
            maxLength: {
              value: 50,
              message: "Maximum 50 characters allowed",
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
              message: "Only alphabets allowed (no numbers)",
            },
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters",
            },
            maxLength: {
              value: 200,
              message: "Maximum 200 characters allowed",
            },
          })}
        />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description.message}</p>
        )}
        <br />
        <br />
        {/* DURATION */}
        Duration (in hours):
        <input
          type="number"
          placeholder="Duration in Hours"
          {...register("duration", {
            required: "Duration is required",
            min: {
              value: 1,
              message: "Minimum 1 hour required",
            },
            max: {
              value: 100,
              message: "Maximum duration is 100 hours",
            },
          })}
        />
        {errors.duration && (
          <p style={{ color: "red" }}>{errors.duration.message}</p>
        )}
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CourseUpdate;

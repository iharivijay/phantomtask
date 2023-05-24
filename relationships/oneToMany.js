import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
  courseName: String,
});

const Course = mongoose.model("Course", CourseSchema);

const StudentSchema = new Schema({
  name: String,
  course: { type: mongoose.Types.ObjectId, ref: "Course" },
});

const Student = mongoose.model("Student", StudentSchema);

// One to Many Relationship

const englishCourse = Course.create({
  courseName: "English",
});

Student.create({
  name: "John",
  course: englishCourse,
});

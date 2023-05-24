import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
  name: String,
});

const CourseSchema = new Schema({
  courseId: String,
  student: StudentSchema,
});

const Course = mongoose.model("Course", CourseSchema);

// One to One Relationship
Course.create({
  courseId: "1",
  student: { name: "john" },
});

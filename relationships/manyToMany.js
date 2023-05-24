import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
  courseName: String,
});

const Course = mongoose.model("Course", CourseSchema);

const StudentSchema = new Schema({
  name: String,
});

const Student = mongoose.model("Student", StudentSchema);

const StudentEnrolledCoursesSchema = new Schema({
  student: { type: mongoose.Types.ObjectId, ref: "Student" },
  course: { type: mongoose.Types.ObjectId, ref: "Course" },
});

const StudentEnrolledCourses = mongoose.model(
  "StudentEnrolledCourses",
  StudentEnrolledCoursesSchema
);

// Many to Many Relationship

const englishCourse = Course.create({
  courseName: "English",
});

const john = Student.create({
  name: "John",
  course: englishCourse,
});

StudentEnrolledCourses.create({ student: john, course: englishCourse });

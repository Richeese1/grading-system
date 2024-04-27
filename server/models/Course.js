// models/Course.js

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  course_name: String,
  course_code: String,
  instructor: String,
});

const Course = mongoose.model("courses", courseSchema);

module.exports = Course;

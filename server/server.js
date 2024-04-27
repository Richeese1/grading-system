// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/grading-system", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Schema
const courseSchema = new mongoose.Schema({
  course_name: String,
  course_code: String,
  instructor: String,
});
const Course = mongoose.model("Course", courseSchema);

// Routes
app.post("/api/courses", async (req, res) => {
  try {
    const { course_name, course_code, instructor } = req.body;
    const course = new Course({ course_name, course_code, instructor });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
// Update route
app.put("/api/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = req.body;

    const course = await Course.findByIdAndUpdate(id, updatedCourse, {
      new: true,
    });

    res.json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete route
app.delete("/api/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

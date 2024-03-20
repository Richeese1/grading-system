import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./Courses.json";

const CoursesPage = () => {
  const [courses, setCourses] = useState(DUMMY_DATA);
  const [newCourse, setNewCourse] = useState({
    course_name: "",
    course_code: "",
    instructor: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    // Add validation if required
    setCourses([...courses, newCourse]);
    setNewCourse({ course_name: "", course_code: "", instructor: "" });
  };

  return (
    <>
      <Header pageTitle={"Courses Page"} />
      <div className="w-full bg-white shadow-md overflow-hidden">
        <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
          Courses List
        </h2>
        <div className="overflow-x-auto">
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Course Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Course Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Instructor
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.course_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.course_code}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {course.instructor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 px-4">
          {["Course Name", "Course Code", "Instructor"].map((label, index) => (
            <input
              key={index}
              type="text"
              name={label.toLowerCase().replace(" ", "_")}
              value={newCourse[label.toLowerCase().replace(" ", "_")]}
              onChange={handleInputChange}
              placeholder={label}
              className={`w-full ${
                index > 0 ? "mt-2" : ""
              } py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500`}
            />
          ))}
          <button
            className="mt-2 bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddCourse}
          >
            Add Course
          </button>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;

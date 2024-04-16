import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./Courses.json";
import course1 from "./images/course1.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CoursesPage = () => {
  const [courses, setCourses] = useState(DUMMY_DATA);
  const [newCourse, setNewCourse] = useState({
    course_name: "",
    course_code: "",
    instructor: "",
  });
  const [isEditingIndex, setIsEditingIndex] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = () => {
    if (
      newCourse.course_name &&
      newCourse.course_code &&
      newCourse.instructor
    ) {
      setCourses([...courses, newCourse]);
      setNewCourse({ course_name: "", course_code: "", instructor: "" });
      setIsAddModalOpen(false);
    } else {
      alert("Please fill out all fields");
    }
  };

  const handleUpdateCourse = (index) => {
    setIsEditingIndex(index);
  };

  const handleSaveUpdate = (index, fieldName, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][fieldName] = value;
    setCourses(updatedCourses);
    setIsEditingIndex(null);
  };

  const handleCancelUpdate = () => {
    setIsEditingIndex(null);
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  return (
    <>
      <Header pageTitle={"Courses Page"} />
      <div className="w-full bg-white shadow-md overflow-hidden">
        <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
          Courses List
        </h2>
        <div className="overflow-x-auto">
          <div className="max-h-full overflow-y-auto">
            <div class="notification-section bg-gray-100 p-4 rounded-md shadow-md">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium text-gray-800 ml-10 font-poppins">
                  Course Section
                </h3>
              </div>
              <div class="pt-10 ml-32 flex flex-col">
                <div className="inline-flex items-center justify-between">
                  <div className="inline-flex items-center">
                    <img className="w-12" src={course1} />
                    <div class="ml-2">
                      <h3 class="text-lg font-medium text-gray-800 font-poppins">
                        Create Course
                      </h3>
                      <p class="text-gray-600 font-poppins">
                        Notify all students of your course
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center mr-32">
                    <button
                      className=" bg-black hover:bg-gray-900 text-white  py-4 px-4 rounded focus:outline-none ml-2 "
                      onClick={() => setIsAddModalOpen(true)}
                    >
                      Add Course
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/4">
                    Course Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/6">
                    Course Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/6">
                    Instructor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/3">
                    Actions
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
                      {isEditingIndex === index ? (
                        <input
                          type="text"
                          value={course.course_name}
                          onChange={(e) =>
                            handleSaveUpdate(
                              index,
                              "course_name",
                              e.target.value
                            )
                          }
                          className="border-2 border-gray-300 rounded px-2 py-1 w-full focus:outline-none"
                        />
                      ) : (
                        course.course_name
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isEditingIndex === index ? (
                        <input
                          type="text"
                          value={course.course_code}
                          onChange={(e) =>
                            handleSaveUpdate(
                              index,
                              "course_code",
                              e.target.value
                            )
                          }
                          className="border-2 border-gray-300 rounded px-2 py-1 w-full focus:outline-none"
                        />
                      ) : (
                        course.course_code
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isEditingIndex === index ? (
                        <input
                          type="text"
                          value={course.instructor}
                          onChange={(e) =>
                            handleSaveUpdate(
                              index,
                              "instructor",
                              e.target.value
                            )
                          }
                          className="border-2 border-gray-300 rounded px-2 py-1 w-full focus:outline-none"
                        />
                      ) : (
                        course.instructor
                      )}
                    </td>
                    <td>
                      {isEditingIndex === index ? (
                        <>
                          <button
                            className="mt-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-2 rounded m-1"
                            onClick={() => handleSaveUpdate(index)}
                          >
                            Save
                          </button>
                          <button
                            className="mt-2 bg-black hover:bg-gray-900 text-white font-bold py-2 px-2 rounded m-1"
                            onClick={() => handleCancelUpdate()}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1"
                          onClick={() => handleUpdateCourse(index)}
                        >
                          <EditIcon />
                        </button>
                      )}

                      <button
                        className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded m-1"
                        onClick={() => handleDeleteCourse(index)}
                      >
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {isAddModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-md">
                  <h2 className="text-lg font-semibold mb-4">Add New Course</h2>
                  <input
                    type="text"
                    name="course_name"
                    value={newCourse.course_name}
                    onChange={handleInputChange}
                    placeholder="Course Name"
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full mb-2 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="course_code"
                    value={newCourse.course_code}
                    onChange={handleInputChange}
                    placeholder="Course Code"
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full mb-2 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="instructor"
                    value={newCourse.instructor}
                    onChange={handleInputChange}
                    placeholder="Instructor"
                    className="border-2 border-gray-300 rounded px-2 py-1 w-full mb-4 focus:outline-none"
                  />
                  <div className="flex justify-end">
                    <button
                      className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => setIsAddModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                      onClick={handleAddCourse}
                    >
                      Add Course
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;

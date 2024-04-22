import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./students.json";
import { Link } from "react-router-dom";
import student1 from "./images/student1.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../common/Sidebar";

const StudentsPage = () => {
  const [students, setStudents] = useState(DUMMY_DATA);
  const [newStudent, setNewStudent] = useState({ name: "", studentId: "" });
  const [error, setError] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isEditingIndex, setIsEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const validateStudentId = (id) => {
    return /^\d{1,6}$/.test(id);
  };

  const handleAddStudent = () => {
    const { name, studentId } = newStudent;
    if (!name.trim() || !studentId.trim() || !validateStudentId(studentId)) {
      setError("Please enter a valid name and student ID.");
      return;
    }
    const newStudentData = {
      _id: students.length + 1, // Dummy unique ID
      name: name,
      student_number: studentId,
    };
    setStudents([...students, newStudentData]);
    setNewStudent({ name: "", studentId: "" });
    setError("");
    setIsAddModalOpen(false);
  };

  const handleUpdateStudent = () => {
    const updatedStudents = students.map((student) => {
      if (student._id === selectedStudentId) {
        return {
          ...student,
          name: newStudent.name,
          student_number: newStudent.studentId,
        };
      }
      return student;
    });
    setStudents(updatedStudents);
    setIsEditingIndex(null);
    setSelectedStudentId(null);
  };

  const handleEditStudent = (studentId, index) => {
    const selectedStudent = students.find(
      (student) => student._id === studentId
    );
    setNewStudent({
      name: selectedStudent.name,
      studentId: selectedStudent.student_number,
    });
    setIsEditingIndex(index);
    setSelectedStudentId(studentId);
  };

  const handleDeleteStudent = () => {
    const updatedStudents = students.filter(
      (student) => student._id !== selectedStudentId
    );
    setStudents(updatedStudents);
    setIsEditingIndex(null);
    setSelectedStudentId(null);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header pageTitle={"Students Page"} />
          <div className="w-full bg-white shadow-md overflow-hidden">
            <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
              Students List
            </h2>
            <div class="notification-section bg-gray-100 p-4 rounded-md shadow-md">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium text-gray-800 ml-10 font-poppins">
                  Student Section
                </h3>
              </div>
              <div class="pt-10 ml-32 flex flex-col">
                <div className="inline-flex items-center justify-between">
                  <div className="inline-flex items-center">
                    <img className="w-12" src={student1} />
                    <div class="ml-2">
                      <h3 class="text-lg font-medium text-gray-800 font-poppins">
                        Create Student
                      </h3>
                      <p class="text-gray-600 font-poppins">
                        Notify all students of your student
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center mr-32">
                    <button
                      className="bg-black hover:bg-gray-900 text-white  py-4 px-4 rounded focus:outline-none ml-2 "
                      onClick={() => setIsAddModalOpen(true)}
                    >
                      Add Student
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <div className="max-h-full overflow-y-auto">
                <table className="w-full table-auto">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/3">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/6">
                        Student ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/2">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr
                        key={student._id}
                        className="hover:transform hover:scale-95 transition-transform"
                      >
                        <td className="border px-4 py-2 font-poppins font-bold">
                          {isEditingIndex === index ? (
                            <input
                              type="text"
                              value={newStudent.name}
                              onChange={handleInputChange}
                              name="name"
                              className="border-2 border-gray-300 rounded px-2 py-1 w-full focus:outline-none"
                            />
                          ) : (
                            <Link
                              to={`/student/${student._id}`}
                              className="hover:underline text-black font-medium"
                            >
                              {student.name}
                            </Link>
                          )}
                        </td>
                        <td className="border px-4 py-2 font-poppins font-bold">
                          {isEditingIndex === index ? (
                            <input
                              type="text"
                              value={newStudent.studentId}
                              onChange={handleInputChange}
                              name="studentId"
                              className="border-2 border-gray-300 rounded px-2 py-1 w-full focus:outline-none"
                            />
                          ) : (
                            student.student_number
                          )}
                        </td>
                        <td className="border px-4 py-2">
                          {isEditingIndex === index ? (
                            <>
                              <button
                                className="mt-2 bg-black hover:bg-gray-300 text-white font-bold py-2 px-2 rounded m-1"
                                onClick={handleUpdateStudent}
                              >
                                Save
                              </button>
                              <button
                                className="mt-2 bg-black hover:bg-red-900 text-white font-bold py-2 px-2 rounded m-1"
                                onClick={() => setIsEditingIndex(null)}
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1"
                                onClick={() =>
                                  handleEditStudent(student._id, index)
                                }
                              >
                                <EditIcon />
                              </button>

                              <button
                                className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded m-1"
                                onClick={() =>
                                  handleDeleteStudent(student._id, index)
                                }
                              >
                                <DeleteIcon />
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {isAddModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Add New Student</h2>
                <form className="mt-4">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newStudent.name}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="studentId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Student ID:
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={newStudent.studentId}
                      onChange={handleInputChange}
                      className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500-500 sm:text-sm"
                    />
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      className="mr-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={handleAddStudent}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => setIsAddModalOpen(false)} // Close modal
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentsPage;

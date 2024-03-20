import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./students.json";

import { Link } from "react-router-dom";

const StudentsPage = () => {
  const [students, setStudents] = useState(DUMMY_DATA);
  const [newStudent, setNewStudent] = useState({ name: "", studentId: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const validateStudentId = (id) => {
    return /^\d{1,6}$/.test(id);
  };

  const handleAddStudent = () => {
    const { name, studentId } = newStudent;
    if (!name.trim()) {
      setError("Please enter a name.");
      return;
    }
    if (!studentId.trim()) {
      setError("Please enter a student ID.");
      return;
    }
    if (!validateStudentId(studentId)) {
      setError("Student ID must be a number with at most 6 digits.");
      return;
    }
    const newStudentData = {
      _id: { $oid: students.length + 1 }, // Dummy unique ID
      name: name,
      student_number: studentId,
    };
    setStudents([...students, newStudentData]);
    setNewStudent({ name: "", studentId: "" });
    setError("");
  };

  return (
    <>
      <Header pageTitle={"Students Page"} />
      <div className="w-full bg-white shadow-md overflow-hidden">
        <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
          Students List
        </h2>
        <div className="overflow-x-auto">
          <div className="max-h-full overflow-y-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Student ID</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student._id.$oid}
                    className="hover:transform hover:scale-95 transition-transform"
                  >
                    <td className="border px-4 py-2">
                      <Link
                        to={`/student/${student._id.$oid}`}
                        className="hover:underline text-black font-medium"
                      >
                        {student.name}
                      </Link>
                    </td>
                    <td className="border px-4 py-2">
                      {student.student_number}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 px-4">
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="studentId"
            value={newStudent.studentId}
            onChange={handleInputChange}
            placeholder="Student ID"
            className="w-full mt-2 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            className="mt-2 bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddStudent}
          >
            Add Student
          </button>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default StudentsPage;

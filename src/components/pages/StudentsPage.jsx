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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Student ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
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
                    <td className="border px-4 py-2">
                      <button className="mt-2 bg-black hover:bg-red-900 text-white font-bold py-2 px-2 rounded m-1">
                        Add Student
                      </button>
                      <button className="mt-2 bg-black hover:bg-red-900 text-white font-bold py-2 px-2 rounded m-1">
                        Remove Student
                      </button>
                      <button className="mt-2 bg-black hover:bg-red-900 text-white font-bold py-2 px-2 rounded m-1">
                        Update Student
                      </button>
                      <button className="mt-2 bg-black hover:bg-red-900 text-white font-bold py-2 px-2 rounded m-1">
                        Delete Student
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsPage;

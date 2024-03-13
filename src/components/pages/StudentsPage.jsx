import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./students.json";

import { Link } from "react-router-dom";
const StudentsPage = () => {
  const [students, setStudents] = useState(DUMMY_DATA);

  return (
    <>
      <Header pageTitle={"Students Page"} />

      <div className="w-full">
        <h2 className="text-center text-xl font-bold mb-4">Student List</h2>
        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-red-500 border-r-0 px-4 py-2 text-left bg-red-500 text-white">
                Name
              </th>
              <th className="border border-red-500 border-r-0 px-4 py-2 text-left bg-red-500 text-white">
                Student ID
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student._id.$oid}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="border border-r-0 px-4 py-2">
                  <Link
                    to={`/student/${student._id.$oid}`}
                    className="text-blue-500 hover:underline"
                  >
                    {student.name}
                  </Link>
                </td>
                <td className="border border-r-0 px-4 py-2">
                  {student.student_number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentsPage;

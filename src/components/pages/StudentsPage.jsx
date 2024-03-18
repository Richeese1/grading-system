import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./students.json";

import { Link } from "react-router-dom";
const StudentsPage = () => {
  const [students, setStudents] = useState(DUMMY_DATA);

  return (
    <>
      <Header pageTitle={"Students Page"} />

      <div className="w-full bg-white shadow-md overflow-hidden">
        <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
          Students List
        </h2>
        <div className="overflow-x-auto">
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
                  <td className="border px-4 py-2">{student.student_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentsPage;

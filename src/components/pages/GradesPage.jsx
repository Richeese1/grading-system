import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./Grades.json";

import { Link } from "react-router-dom";
const GradesPage = () => {
  const [studentData, setStudentGrades] = useState(DUMMY_DATA);

  return (
    <>
      <Header pageTitle={"Grades Page"} />
      <div className="w-full bg-white shadow-md overflow-hidden">
        <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
          Student Data
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3">Student ID</th>
                <th className="px-6 py-3">Year Level</th>
                <th className="px-6 py-3">Subjects</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index} className="hover:bg-gray-100 transition-colors">
                  <td className="border px-6 py-4">{student.student_id}</td>
                  <td className="border px-6 py-4">{student.year_level}</td>
                  <td className="border px-6 py-4">
                    <ul>
                      {student.subjects.map((subject, subIndex) => (
                        <li key={subIndex}>
                          {subject.subject}: {subject.grade}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GradesPage;

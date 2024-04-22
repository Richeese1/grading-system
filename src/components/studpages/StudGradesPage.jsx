import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "../pages/Grades.json";
import StudSidebar from "../studpages/StudSidebar";

const StudGradesPage = () => {
  const [studentData, setStudentGrades] = useState(DUMMY_DATA);

  return (
    <>
      <div className="flex">
        <StudSidebar />
        <div className="flex flex-col w-full">
          <Header pageTitle={"Grades Page"} />
          <div className="w-full bg-white shadow-md overflow-hidden">
            <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
              Student Data
            </h2>
            <div className="overflow-x-auto">
              <div className="max-h-full overflow-y-auto">
                <table className="w-full table-auto border-collapse border border-gray-300">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Student ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Year Level
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Subjects
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.map((student, studentIndex) => (
                      <tr
                        key={studentIndex}
                        className="hover:bg-gray-100 transition-colors"
                      >
                        <td className="border px-6 py-4">
                          {student.student_id}
                        </td>
                        <td className="border px-6 py-4">
                          {student.year_level}
                        </td>
                        <td className="border px-6 py-4">
                          <ul>
                            {student.subjects.map((subject, subjectIndex) => (
                              <li key={subjectIndex}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default StudGradesPage;

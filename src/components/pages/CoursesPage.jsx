import Header from "../common/Header";
import React, { useState } from "react";
import DUMMY_DATA from "./Courses.json";

const CoursesPage = () => {
  const [courses, setCourses] = useState(DUMMY_DATA);
  return (
    <>
      <Header pageTitle={"Courses Page"} />
      <div className="w-full bg-white shadow-md overflow-hidden">
        <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
          Course List
        </h2>
        <div className="overflow-x-auto">
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
    </>
  );
};

export default CoursesPage;

import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "../pages/Courses.json";
import StudSidebar from "../studpages/StudSidebar";

const StudCoursesPage = () => {
  const [courses, setCourses] = useState(DUMMY_DATA);

  return (
    <>
      <div className="flex">
        <StudSidebar />
        <div className="flex flex-col w-full">
          <Header pageTitle={"Courses Page"} />
          <div className="w-full bg-white shadow-md overflow-hidden">
            <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
              Courses List
            </h2>
            <div className="overflow-x-auto">
              <div className="max-h-full overflow-y-auto">
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
                  <tbody className="bg-white divide-y divide-gray-200"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudCoursesPage;

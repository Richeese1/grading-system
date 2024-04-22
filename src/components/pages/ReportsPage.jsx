import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./Report.json";
import Sidebar from "../common/Sidebar";

const ReportsPage = () => {
  const [students, setStudents] = useState(DUMMY_DATA);
  const handlePrint = () => {
    window.print();
  };
  const handleDownload = () => {
    // Implement download functionality here
    console.log("Download functionality");
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header pageTitle={"Reports Page"} />
          <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
            Students Reports
          </h2>
          <div className="container mx-auto">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Student ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Missing Schoolworks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.name}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.student_id}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.missing_schoolworks}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <button
                        className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={handlePrint}
                      >
                        Print
                      </button>
                      <button
                        className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                        onClick={handleDownload}
                      >
                        Download
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

export default ReportsPage;

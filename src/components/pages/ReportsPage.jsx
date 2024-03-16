import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./Report.json";

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
      <Header pageTitle={"Reports Page"} />
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold my-4">Student List</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Student ID</th>
              <th className="border border-gray-400 px-4 py-2">
                Missing Schoolworks
              </th>
              <th className="border border-gray-400 px-4 py-2">Actions</th>
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
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={handlePrint}
                  >
                    Print
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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
    </>
  );
};

export default ReportsPage;
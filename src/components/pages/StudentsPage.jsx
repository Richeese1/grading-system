import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./students.json";

import { Link } from "react-router-dom";
const StudentsPage = () => {
  const [students, setStudents] = useState(DUMMY_DATA);

  return (
    <>
      <Header pageTitle={"Students Page"} />

      <div>
        <h2>Student List</h2>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Student ID
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id.$oid}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {student.student_number}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  <Link to={`/student/${student._id.$oid}`}>
                    {student.name}
                  </Link>
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

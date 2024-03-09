import React from "react";
import DUMMY_DATA from "./students.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

const StudentItemPage = () => {
  const [data, setData] = useState(DUMMY_DATA);

  const { oid } = useParams();
  const student = data.find((item) => item._id.$oid === oid);

  return (
    <div>
      <p>{"name: " + student.name}</p>
      <p>{"student number: " + student.student_number}</p>
    </div>
  );
};

export default StudentItemPage;

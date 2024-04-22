import React, { useState } from "react";
import Header from "../common/Header";
import DUMMY_DATA from "./Grades.json";
import grade1 from "./images/grades1.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../common/Sidebar";

const GradesPage = () => {
  const [studentData, setStudentGrades] = useState(DUMMY_DATA);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editStudentIndex, setEditStudentIndex] = useState(null);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  const [editedGrade, setEditedGrade] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newStudentId, setNewStudentId] = useState("");
  const [newYearLevel, setNewYearLevel] = useState("");
  const [newSubjectName, setNewSubjectName] = useState("");
  const [newSubjectGrade, setNewSubjectGrade] = useState("");
  const [isAddSubjectPopupOpen, setIsAddSubjectPopupOpen] = useState(false); // Add state for the Add Subject popup

  const handleEditGrade = (studentIndex, subjectIndex) => {
    setEditStudentIndex(studentIndex);
    setSelectedSubjectIndex(subjectIndex);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = () => {
    const updatedStudentData = [...studentData];
    updatedStudentData[editStudentIndex].subjects[selectedSubjectIndex].grade =
      editedGrade;
    setStudentGrades(updatedStudentData);
    setIsEditModalOpen(false);
    setEditedGrade("");
  };

  const handleInputChange = (e) => {
    setEditedGrade(e.target.value);
  };

  const handleAddStudent = () => {
    const newStudent = {
      student_id: newStudentId,
      year_level: newYearLevel,
      subjects: [],
    };
    setStudentGrades([...studentData, newStudent]);
    setIsAddModalOpen(false);
    setNewStudentId("");
    setNewYearLevel("");
  };

  const handleAddSubject = (studentIndex) => {
    const updatedStudentData = [...studentData];
    updatedStudentData[studentIndex].subjects.push({
      subject: newSubjectName,
      grade: newSubjectGrade,
    });
    setStudentGrades(updatedStudentData);
    setNewSubjectName("");
    setNewSubjectGrade("");
    setIsAddSubjectPopupOpen(false); // Close the Add Subject popup after adding subject
  };

  const handleDeleteGrade = (index) => {
    const updatedGrades = [...studentData];
    updatedGrades.splice(index, 1);
    setStudentGrades(updatedGrades);
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header pageTitle={"Grades Page"} />
          <div className="w-full bg-white shadow-md overflow-hidden">
            <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
              Student Data
            </h2>
            <div class="notification-section bg-gray-100 p-4 rounded-md shadow-md">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-medium text-gray-800 ml-10 font-poppins">
                  Grade Section
                </h3>
              </div>
              <div class="pt-10 ml-32 flex flex-col">
                <div className="inline-flex items-center justify-between">
                  <div className="inline-flex items-center">
                    <img className="w-12" src={grade1} />
                    <div class="ml-2">
                      <h3 class="text-lg font-medium text-gray-800 font-poppins">
                        Create Grade
                      </h3>
                      <p class="text-gray-600 font-poppins">
                        Notify all students of your grade
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center mr-32">
                    <button
                      className="bg-black hover:bg-gray-900 text-white  py-4 px-4 rounded focus:outline-none ml-2 "
                      onClick={() => setIsAddModalOpen(true)}
                    >
                      Add Student
                    </button>
                    <button
                      className="bg-black hover:bg-gray-900 text-white  py-4 px-4 rounded focus:outline-none ml-2 "
                      onClick={() => setIsAddSubjectPopupOpen(true)}
                    >
                      Add Grades
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                        <td className="border px-6 py-4">
                          <button
                            className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1"
                            onClick={() => handleEditGrade(studentIndex)}
                          >
                            <EditIcon />
                          </button>
                          <button
                            className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded m-1"
                            onClick={() => handleDeleteGrade(studentIndex)}
                          >
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {isEditModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Edit Grade</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Subject:
                    </label>
                    <select
                      value={selectedSubjectIndex}
                      onChange={(e) =>
                        setSelectedSubjectIndex(Number(e.target.value))
                      }
                      className="border p-2 w-full"
                    >
                      {studentData[editStudentIndex].subjects.map(
                        (subject, index) => (
                          <option key={index} value={index}>
                            {subject.subject}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      New Grade:
                    </label>
                    <input
                      type="text"
                      value={editedGrade}
                      onChange={handleInputChange}
                      className="border p-2 w-full"
                    />
                  </div>
                  <button
                    className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded m-1"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-1"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
          {isAddModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Add Student</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Student ID:
                    </label>
                    <input
                      type="text"
                      value={newStudentId}
                      onChange={(e) => setNewStudentId(e.target.value)}
                      className="border p-2 w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Year Level:
                    </label>
                    <input
                      type="text"
                      value={newYearLevel}
                      onChange={(e) => setNewYearLevel(e.target.value)}
                      className="border p-2 w-full"
                    />
                  </div>
                  <button
                    className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded m-1"
                    onClick={handleAddStudent}
                  >
                    Add Student
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-1"
                    onClick={() => setIsAddModalOpen(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
          {isAddSubjectPopupOpen && ( // Render the Add Subject popup when isAddSubjectPopupOpen is true
            <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Add Subject</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Subject Name:
                    </label>
                    <input
                      type="text"
                      value={newSubjectName}
                      onChange={(e) => setNewSubjectName(e.target.value)}
                      className="border p-2 w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Subject Grade:
                    </label>
                    <input
                      type="text"
                      value={newSubjectGrade}
                      onChange={(e) => setNewSubjectGrade(e.target.value)}
                      className="border p-2 w-full"
                    />
                  </div>
                  <button
                    className="bg-black hover:bg-red-900 text-white font-bold py-2 px-4 rounded m-1"
                    onClick={() => {
                      handleAddSubject(editStudentIndex);
                      setIsAddSubjectPopupOpen(false); // Close the popup after adding subject
                    }}
                  >
                    Add Subject
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded m-1"
                    onClick={() => setIsAddSubjectPopupOpen(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GradesPage;

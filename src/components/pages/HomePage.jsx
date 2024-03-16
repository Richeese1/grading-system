import React from "react";
import Header from "../common/Header";
import ann from "./images/ann.png";
import add from "./images/add.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

const HomePage = () => {
  const grades = [
    { date: "January 1, 2024", message: "Release of Grades" },
    { date: "January 2, 2024", message: "Release of Grades" },
    { date: "January 3, 2024", message: "Release of Grades" },
    { date: "January 4, 2024", message: "Release of Grades" },
    { date: "January 5, 2024", message: "Release of Grades" },
  ];
  return (
    <>
      <Header pageTitle={"Home Page"} />
      <div className="mx-0 mt-4 p-4 bg-gray-100 border-b border-gray-600 justify-between">
        <h2 className="text-xl font-bold mb-2">Announcement</h2>
      </div>
      <div class="notification-section bg-gray-100 p-4 rounded-md shadow-md">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-800 ml-10">
            Announcement Section
          </h3>
        </div>
        <div class="pt-10 ml-32 flex flex-col">
          <div className="inline-flex items-center justify-between">
            <div className="inline-flex items-center">
              <img className="w-12" src={ann} />
              <div class="ml-2">
                <h3 class="text-lg font-medium text-gray-800">
                  Create Announcement
                </h3>
                <p class="text-gray-600">
                  Notify all students of your announcement
                </p>
              </div>
            </div>
            <div className="inline-flex items-center mr-32">
              <img className="w-12" src={add} />
              <button className="bg-black hover:bg-red-900 text-white font-bold py-3 px-3 rounded focus:outline-none ml-2">
                ADD NEW ANNOUNCEMENT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 class="text-lg font-medium text-gray-800 m-auto ">Message</h3>
        <h3 class="text-lg font-medium text-gray-800 m-auto">Posted</h3>
      </div>
      <div className="">
        <table className="table-fixed min-w-full border border-gray-500 shadow-md rounded-lg">
          <thead className="w-full mt-2 border-gray-300"></thead>
          <tbody>
            {grades.map((grade) => (
              <tr
                key={grade.date}
                className="border-b border-gray-400 hover:bg-gray-100 "
              >
                <td className="text-right  pr-20">{grade.message}</td>
                <td className="text-right  pl-32">{grade.date}</td>
                <button className="bg-black text-white px-4 py-2 rounded-md ml-5 mt-5 mb-5 hover:bg-red-900">
                  Details
                </button>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;

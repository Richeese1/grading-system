import React from "react";
import Header from "../common/Header";
import ann from "./images/ann.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import StudSidebar from "../studpages/StudSidebar";

const StudHomePage = () => {
  const grades = [
    { date: "January 1, 2024", message: "Release of Grades" },
    { date: "January 2, 2024", message: "Release of Grades" },
    { date: "January 3, 2024", message: "Release of Grades" },
    { date: "January 4, 2024", message: "Release of Grades" },
    { date: "January 5, 2024", message: "Release of Grades" },
  ];
  return (
    <>
      <div className="flex">
        <StudSidebar />
        <div className="flex flex-col w-full">
          <Header pageTitle={"Home Page"} />
          <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white ">
            Announcement
          </h2>
          <div class="notification-section bg-gray-100 p-4 rounded-md shadow-md">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-medium text-gray-800 ml-10 font-poppins">
                Announcement Section
              </h3>
            </div>
            <div class="pt-10 ml-32 flex flex-col">
              <div className="inline-flex items-center justify-between">
                <div className="inline-flex items-center">
                  <img className="w-12" src={ann} />
                  <div class="ml-2">
                    <h3 class="text-lg font-medium text-gray-800 font-poppins">
                      Check Announcement
                    </h3>
                    <p class="text-gray-600 font-poppins">
                      Don't forget to check announcement daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200 flex justify-between">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider m-auto">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider m-auto">
                    Posted
                  </th>
                </tr>
              </thead>
            </table>
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
                    <td className="text-right  pr-20 font-poppins font-bold">
                      {grade.message}
                    </td>
                    <td className="text-right  pl-32 font-poppins font-bold">
                      {grade.date}
                    </td>
                    <button className="bg-black text-white px-4 py-2 rounded-md ml-5 mt-5 mb-5 hover:bg-red-900 font-poppins">
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
        </div>
      </div>
    </>
  );
};

export default StudHomePage;

import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";
import Notification from "./Profile/Notification";
import UserMenuButton from "./Profile/UserMenuButton";
import StudentDashboardItem from "./Profile/AdminDashboardItem";
import home from "./Profile/images/home.png";
import STCLARE from "./Profile/images/STCLARE.png";
import course from "./Profile/images/course.png";
import profile from "./Profile/images/profile.png";
import grades from "./Profile/images/grades.png";
import report from "./Profile/images/report.png";
import settings from "./Profile/images/settings.png";
import admin from "./Profile/images/admin.png";

const Sidebar = () => {
  return (
    <div className="bg-red-900 text-white h-screen flex flex-col justify-between sticky top-0">
      <div className="p-4">
        <div className="flex items-center w-full p-4 pl-6">
          <div className="flex items-center justify-center">
            <img className="w-8" src={STCLARE} />
          </div>
          <div className="flex items-center ml-auto">
            <Notification></Notification>
            <UserMenuButton></UserMenuButton>
          </div>
        </div>
        <Profile imageUrl={admin} name="Admin" />
        <div className="-ml-14">
          <StudentDashboardItem />
        </div>
        <div className="flex flex-col items-center border-b border-black-600"></div>
        <ul className="space-y-2 pt-5">
          <li>
            <Link
              to="/admin-dashboard"
              className="hover:text-gray-300 bg-red rounded-lg shadow-md p-2  flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={home} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/admin-courses"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={course} />
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/admin-students"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={profile} />
              Students
            </Link>
          </li>
          <li>
            <Link
              to="/admin-grades"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={grades} />
              Grades
            </Link>
          </li>
          <li>
            <Link
              to="/admin-reports"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={report} />
              Reports
            </Link>
          </li>
          <li>
            <Link
              to="/admin-settings"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={settings} />
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <div>
          <Link
            to="/admin-logs"
            className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center font-poppins"
          >
            Logs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

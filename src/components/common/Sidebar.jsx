import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";
import Notification from "./Profile/Notification";
import UserMenuButton from "./Profile/UserMenuButton";
import StudentDashboardItem from "./Profile/StudentDashboardItem";
import home from "./Profile/images/home.png";
import STCLARE from "./Profile/images/STCLARE.png";
import course from "./Profile/images/course.png";
import profile from "./Profile/images/profile.png";
import grades from "./Profile/images/grades.png";
import report from "./Profile/images/report.png";
import settings from "./Profile/images/settings.png";

const Sidebar = () => {
  return (
    <div className="bg-red-900 text-white h-screen flex flex-col justify-between ">
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
        <Profile
          imageUrl="url_to_your_image.jpg"
          name="Example name"
          gmail="example@gmail.com"
        />
        <div className="-ml-14">
          <StudentDashboardItem />
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 bg-red rounded-lg shadow-md p-2  flex items-center"
            >
              <img className="w-7 mr-8" src={home} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center"
            >
              <img className="w-7 mr-8" src={course} />
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/students"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center"
            >
              <img className="w-7 mr-8" src={profile} />
              Students
            </Link>
          </li>
          <li>
            <Link
              to="/grades"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center"
            >
              <img className="w-7 mr-8" src={grades} />
              Grades
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center"
            >
              <img className="w-7 mr-8" src={report} />
              Reports
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center"
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
            to="/logs"
            className="block hover:text-red-800 bg-red rounded-lg shadow-md p-4"
          >
            Logs
          </Link>
        </div>
        <p className="text-sm">
          Your Company Name &copy; 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

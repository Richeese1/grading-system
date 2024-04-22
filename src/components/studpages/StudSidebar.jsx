import React from "react";
import { Link } from "react-router-dom";
import Profile from "../common/Profile/Profile";
import Notification from "../common/Profile/Notification";
import UserMenuButton from "../common/Profile/UserMenuButton";
import StudDashboardItem from "../studpages/StudDashboardItem";
import home from "../common/Profile/images/home.png";
import STCLARE from "../common/Profile/images/STCLARE.png";
import course from "../common/Profile/images/course.png";
import profile from "../common/Profile/images/profile.png";
import grades from "../common/Profile/images/grades.png";
import report from "../common/Profile/images/report.png";
import settings from "../common/Profile/images/settings.png";
import admin from "../common/Profile/images/admin.png";

const StudSidebar = () => {
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
        <Profile imageUrl={admin} name="Student" />
        <div className="-ml-14">
          <StudDashboardItem />
        </div>
        <div className="flex flex-col items-center border-b border-black-600"></div>
        <ul className="space-y-2 pt-5">
          <li>
            <Link
              to="/student-home"
              className="hover:text-gray-300 bg-red rounded-lg shadow-md p-2  flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={home} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/student-courses"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={course} />
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/student-grades"
              className=" hover:text-gray-300 bg-red rounded-lg shadow-md p-2 flex items-center font-poppins"
            >
              <img className="w-7 mr-8" src={grades} />
              Grades
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudSidebar;

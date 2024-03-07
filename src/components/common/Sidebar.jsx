import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";
const Sidebar = () => {
  return (
    <div className="bg-red-900 text-white h-screen w-64 flex flex-col justify-between">
      <div className="p-4">
        <Profile
          imageUrl="url_to_your_image.jpg"
          name="Example name"
          gmail="example@gmail.com"
        />
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="block hover:text-gray-300">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/students" className="block hover:text-gray-300">
              Students
            </Link>
          </li>
          <li>
            <Link to="/grades" className="block hover:text-gray-300">
              Grades
            </Link>
          </li>
          <li>
            <Link to="/reports" className="block hover:text-gray-300">
              Reports
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block hover:text-gray-300">
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-4">
        <div>
          <Link to="/logs" className="block hover:text-red-800">
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

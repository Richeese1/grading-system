import React from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const SettingsPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header pageTitle={"Settings Page"} />
          <div>
            <h2 className="text-center text-2xl font-bold py-4 bg-red-900 text-white">
              Settings
            </h2>
            <div className="container mx-auto py-8">
              <div className="bg-white shadow-md rounded px-8 py-6 mb-6">
                <h2 className="text-lg font-bold mb-4">General Settings</h2>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="systemName"
                  >
                    System Name:
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="systemName"
                    type="text"
                    placeholder="Grading System"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="timeZone"
                  >
                    Time Zone:
                  </label>
                  <select
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="timeZone"
                  >
                    <option value="1">Select Time Zone</option>
                    <option value="2">Time Zone 1</option>
                    <option value="3">Time Zone 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="bg-white shadow-md rounded px-8 py-6 mb-6">
                <h2 className="text-lg font-bold mb-4">User Management</h2>
                <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
                  Create New Admin Account
                </button>
                <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Manage Users
                </button>
              </div>
              <div className="bg-white shadow-md rounded px-8 py-6 mb-6">
                <h2 className="text-lg font-bold mb-4">Course Management</h2>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="defaultGradingScale"
                  >
                    Default Grading Scale:
                  </label>
                  <select
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="defaultGradingScale"
                  >
                    <option value="1">Select Scale</option>
                    <option value="2">Scale 1</option>
                    <option value="3">Scale 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Default Course Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;

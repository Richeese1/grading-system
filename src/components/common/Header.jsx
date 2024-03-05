import React from "react";

const Header = ({ pageTitle }) => {
  // Function to get current time
  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="ml-3 flex justify-between">
        {/* Left side: Page Title */}
        <h1 className="text-xl font-bold">{pageTitle}</h1>

        {/* Right side: Search button and time */}
        <div className="flex items-center gap-5">
          {/* Current Time */}
          <p>{getCurrentTime()}</p>

          {/* Search button (You can replace this with your actual search component) */}
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md mr-4">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

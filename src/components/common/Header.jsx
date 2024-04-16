import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ pageTitle }) => {
  // Function to get current time
  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };

  return (
    <header className="bg-white text-black py-3 border-b-2 border-gray-600 top-0">
      <div className="ml-3 flex justify-between">
        {/* Left side: Page Title */}
        <button>
          <MenuIcon />
        </button>

        {/* Right side: Search button and time */}
        <div className="flex items-center gap-5">
          {/* Current Time */}
          <p>{getCurrentTime()}</p>
          {/* Search button (You can replace this with your actual search component) */}
          <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md mr-4">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

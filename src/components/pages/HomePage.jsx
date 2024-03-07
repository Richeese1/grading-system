import React from "react";
import Header from "../common/Header";

const HomePage = () => {
  return (
    <>
      <Header pageTitle={"Home Page"} />
      <div className="container mx-0 mt-4 p-4 bg-gray-100 border-b border-gray-600 justify-between">
        <h2 className="text-xl font-bold mb-2">Announcement</h2>
        <p></p>
      </div>
    </>
  );
};

export default HomePage;

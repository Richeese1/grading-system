import React from "react";
import Header from "../common/Header";

const HomePage = () => {
  return (
    <>
      <Header pageTitle={"Home Page"} />
      <div>
        <h1 className="text-red-700 text-5xl">Home Page</h1>
        {/* Content for Home Page */}
      </div>
    </>
  );
};

export default HomePage;

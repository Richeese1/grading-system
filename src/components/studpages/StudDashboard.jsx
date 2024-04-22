import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import StudentsPage from "../pages/StudentsPage";
import GradesPage from "../pages/GradesPage";
import ReportsPage from "../pages/ReportsPage";
import SettingsPage from "../pages/SettingsPage";
// import Header from "./components/common/Header";
import Footer from "../common/Footer";
import StudSidebar from "../studpages/StudSidebar";
import StudentItemPage from "../pages/StudentItemPage";
import LogsPage from "../pages/LogsPage";
import StudHomePage from "../studpages/StudHomePage";
import StudCoursesPage from "../studpages/StudCoursePage";
import StudGradesPage from "../studpages/StudGradesPage";
const AdminDashboard = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <Routes>
          <Route exact path="/" element={<StudHomePage />} />
          <Route path="/student-courses" element={<StudCoursesPage />} />
          <Route path="/student-grades" element={<StudGradesPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;

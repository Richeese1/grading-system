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
import Sidebar from "../common/Sidebar";
import StudentItemPage from "../pages/StudentItemPage";
import LogsPage from "../pages/LogsPage";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/grades" element={<GradesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="/student/:oid" element={<StudentItemPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default AdminDashboard;

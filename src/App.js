import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CoursesPage from "./components/pages/CoursesPage";
import StudentsPage from "./components/pages/StudentsPage";
import GradesPage from "./components/pages/GradesPage";
import ReportsPage from "./components/pages/ReportsPage";
import SettingsPage from "./components/pages/SettingsPage";
// import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Sidebar from "./components/common/Sidebar";
import StudentItemPage from "./components/pages/StudentItemPage";
import LogsPage from "./components/pages/LogsPage";
import StudHomePage from "./components/studpages/StudHomePage";
import StudGradesPage from "./components/studpages/StudGradesPage";
import Login from "./components/pages/Login/LoginPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import StudSidebar from "./components/studpages/StudSidebar";
import StudCoursesPage from "./components/studpages/StudCoursePage";
import StudDashboard from "./components/studpages/StudDashboard";
const App = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/admin-courses" element={<CoursesPage />} />
        <Route path="/admin-home" element={<HomePage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-students" element={<StudentsPage />} />
        <Route path="/admin-grades" element={<GradesPage />} />
        <Route path="/admin-reports" element={<ReportsPage />} />
        <Route path="/admin-logs" element={<LogsPage />} />
        <Route path="/admin-settings" element={<SettingsPage />} />
        <Route path="/student-home" element={<StudHomePage />} />
        <Route path="/student-grades" element={<StudGradesPage />} />
        <Route path="/student-dashboard" element={<StudDashboard />} />
        <Route path="/student-courses" element={<StudCoursesPage />} />
        <Route path="/student-sidebar" element={<StudSidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

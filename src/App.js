import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <Router basename={process.env.REACT_APP_BASE_URL}>
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
    </Router>
  );
};

export default App;

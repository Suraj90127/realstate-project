import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AddHighlightPoint from "../components/AddHighlightPoint";
import AddLocationAdvantagePoint from "../components/AddLocationAdvantagePoint";
import AddQuestion from "../components/AddQuestion";
import AddAboutDeveloper from "../components/AddAboutDeveloper";
import Dashboard from "./Dashboard";

const AddPoint = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleButtonClick = (view) => {
    setCurrentView(view);
    setSidebarOpen(false); // Close the sidebar when a view is selected
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex bg-gray-800 h-screen overflow-hidden">
      <button
        className="block lg:hidden p-4 text-white absolute top-0 right-0 z-20"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div
        className={`lg:w-1/4 bg-[#283046] p-4 shadow-2xl fixed lg:static top-0 left-0 h-full z-10 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <button
          className="w-full mb-4 py-2 hover:bg-gray-500 px-5 text-start text-white rounded-md"
          onClick={() => handleButtonClick("dashboard")}
        >
          Add Property
        </button>
        <button
          className="w-full mb-4 py-2 hover:bg-gray-500 px-5 text-start text-white rounded-md"
          onClick={() => handleButtonClick("highlight")}
        >
          Add HighlightPoint
        </button>
        <button
          className="w-full mb-4 py-2 hover:bg-gray-500 px-5 text-start text-white rounded-md"
          onClick={() => handleButtonClick("locationAdvantage")}
        >
          Add LocationAdvantagePoint
        </button>
        <button
          className="w-full mb-4 py-2 hover:bg-gray-500 px-5 text-start text-white rounded-md"
          onClick={() => handleButtonClick("question")}
        >
          Add Question
        </button>
        <button
          className="w-full py-2 hover:bg-gray-500 px-5 text-start text-white rounded-md"
          onClick={() => handleButtonClick("aboutDeveloper")}
        >
          Add AboutDeveloper
        </button>
      </div>

      <div className="w-full lg:w-3/4 overflow-y-auto ml-auto">
        {currentView === "dashboard" && <Dashboard />}
        {currentView === "highlight" && <AddHighlightPoint />}
        {currentView === "locationAdvantage" && <AddLocationAdvantagePoint />}
        {currentView === "question" && <AddQuestion />}
        {currentView === "aboutDeveloper" && <AddAboutDeveloper />}
      </div>
    </div>
  );
};

export default AddPoint;

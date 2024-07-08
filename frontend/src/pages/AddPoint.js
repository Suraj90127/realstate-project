import React, { useState } from "react";
import AddHighlightPoint from "../components/AddHighlightPoint";
import AddLocationAdvantagePoint from "../components/AddLocationAdvantagePoint";
import AddQuestion from "../components/AddQuestion";
import AddAboutDeveloper from "../components/AddAboutDeveloper";
import Dashboard from "./Dashboard";

const AddPoint = () => {
  const [currentView, setCurrentView] = useState("dashboard"); // Set initial state to "dashboard"

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="flex bg-gray-800 h-screen overflow-hidden">
      {/* Left side: Buttons */}
      <div className="w-1/4 bg-[#283046] p-4 shadow-2xl">
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

      {/* Right side: Input fields and component based on button click */}
      <div className="w-3/4 overflow-y-auto">
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

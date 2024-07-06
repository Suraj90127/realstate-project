import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import AboutusPage from "./pages/AboutusPage";

function App() {
  return (
    <>
      <div className="m-0 p-0 overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutusPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="m-0 p-0 overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

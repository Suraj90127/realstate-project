import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import AboutusPage from "./pages/AboutusPage";
import DeveloperPage from "./pages/DeveloperPage";
import BlogNews from "./pages/BlogNews";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import Project from "./pages/Project";
import PropertyDetail from "./pages/PropertyDetail";
import DeveloperDetail from "./pages/DeveloperDetail";
import Commercial from "./pages/Commercial";

function App() {
  return (
    <>
      <div className="m-0 p-0 overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutusPage />}></Route>
          <Route path="/developer" element={<DeveloperPage />}></Route>
          <Route path="/blog&news" element={<BlogNews />}></Route>
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/propertyDetail" element={<PropertyDetail />}></Route>
          <Route path="/developerDetail" element={<DeveloperDetail />}></Route>
          <Route path="/commercial" element={<Commercial />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

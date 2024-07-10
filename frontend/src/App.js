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

import ProjectPage from "./pages/ProjectPage";
import Dashboard from "./pages/Dashboard";
import Admindashboard from "./pages/AdminDashboard";
import Project from "./pages/Project";
import PropertyDetail from "./pages/PropertyDetail";
import PropertySerch from "./pages/PropertySerch";
import Commercial from "./pages/Commercial";

function App() {
  return (
    <>
      <div className="m-0 p-0 overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutusPage />}></Route>
          {/* <Route path="/project" element={<ProjectPage />}></Route> */}
          <Route path="/developer" element={<DeveloperPage />}></Route>
          <Route path="/blog&news" element={<BlogNews />}></Route>
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/dashbord" element={<Admindashboard />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/commercial" element={<Commercial />}></Route>
          <Route path="/project/search?" element={<PropertySerch />}></Route>
          <Route path="/propertyDetail?" element={<PropertyDetail />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

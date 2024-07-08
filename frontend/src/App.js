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
<<<<<<< HEAD
import ProjectPage from "./pages/ProjectPage";
import Dashboard from "./pages/Dashboard";
import AddPoint from "./pages/AddPoint";
=======
import Project from "./pages/Project";
import PropertyDetail from "./pages/PropertyDetail";
>>>>>>> 1fe5676cbd0cdcff9b8f7a54d389a70c3a0ac274

function App() {
  return (
    <>
      <div className="m-0 p-0 overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutusPage />}></Route>
          <Route path="/project" element={<ProjectPage />}></Route>
          <Route path="/developer" element={<DeveloperPage />}></Route>
          <Route path="/blog&news" element={<BlogNews />}></Route>
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />}></Route>
<<<<<<< HEAD
          {/* <Route path="/dashbord" element={<Dashboard />}></Route> */}
          <Route path="/dashbord" element={<AddPoint />}></Route>
=======
          <Route path="/project" element={<Project />}></Route>
          <Route path="/propertyDetail" element={<PropertyDetail />}></Route>
>>>>>>> 1fe5676cbd0cdcff9b8f7a54d389a70c3a0ac274
        </Routes>
      </div>
    </>
  );
}

export default App;

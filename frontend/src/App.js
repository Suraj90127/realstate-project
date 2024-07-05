import "./App.css";
import React from 'react';
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Router>
  );
}

export default App;

const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ServicesPage = () => <div>Services Page</div>;
const ProjectsPage = () => <div>Projects Page</div>;
const ContactPage = () => <div>Contact Page</div>;

import React from "react";
import bg from "../Assets/desktop-banner.jpg";
import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogNews = () => {
  return (
    <div>
      <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Blog & News
        </h1>
      </div>
      <Blogs />
      <Footer />
    </div>
  );
};

export default BlogNews;

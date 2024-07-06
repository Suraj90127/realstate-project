import React from "react";
import bg from "../Assets/desktop-banner.jpg";
import Blogs from "../components/Blogs";

const BlogNews = () => {
  return (
    <div>
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Blog & News
        </h1>
      </div>
        <Blogs />
    </div>
  );
};

export default BlogNews;

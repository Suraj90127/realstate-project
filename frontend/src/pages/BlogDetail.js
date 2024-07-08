import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const location = useLocation();
  const { data } = location.state || { data: {} };

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <span className="text-muted-foreground mb-2">{data.date}</span>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <p>{data.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

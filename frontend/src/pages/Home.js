import React from "react";
import "./Home.css";
import bg from "../Assets/propzilla-photo.webp";
import { IoSearch } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import Testimonials from "../components/Testimonials";
import Developer from "../components/Developer";
import Whychooseus from "../components/Whychooseus";
import Whychoosetop from "../components/whychoosetop";
import Luxury from "../components/Luxury";
import Blogs from "../components/Blogs";
import Projectslider from "../components/Projectslider";
import Popularplace from "../components/Popularplace";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Commercial",
    imgSrc: "https://placehold.co/300x400",
    altText: "Commercial Building",
  },
  {
    title: "Residential",
    imgSrc: "https://placehold.co/300x400",
    altText: "Residential Building",
  },
  {
    title: "Builder Floors",
    imgSrc: "https://placehold.co/300x400",
    altText: "Builder Floors",
  },
  {
    title: "Leased",
    imgSrc: "https://placehold.co/300x400",
    altText: "Leased Building",
  },
  {
    title: "Pre-Leased",
    imgSrc: "https://placehold.co/300x400",
    altText: "Pre-Leased Building",
  },
];
const Home = () => {
  return (
    <div>
      <div className="header">
        <img src={bg} alt="" />
        <p className="sm:text-[40px] md:text-[60px] text-white text-center">
          FIND THE PROPERTY
        </p>
        <h1 className="sm:text-[50px] md:text-[60px] text-[#fead26] font-bold text-center">
          OF YOUR DREAMS
        </h1>
        <div className="searchbox w-auto flex flex-wrap justify-center items-center p-5 h-auto bg-[#ffffff9f]">
          <select className="h-[60px] text-[20px] md:w-[120px] sm:w-[100%] bg-white sm:p-3 md:p-0">
            <option>Location</option>
            <option>Gurjaon</option>
            <option>Delhi</option>
            <option>Noida</option>
            <option>Banglore</option>
            <option>Pune</option>
          </select>
          <input
            className="h-[60px]  md:w-[600px] sm:w-[100%] text-[20px] border bg-white"
            type="text"
            placeholder="Enter an Address here, City or Area"
          />
          <button className="h-[60px] w-[60px] bg-[#fead26] text-[white] text-[20px] flex justify-center items-center">
            <IoSearch />
          </button>
        </div>
      </div>

      {/* 2nd section */}
      <Whychoosetop />
      <Whychooseus />
      <Popularplace />
      <Projectslider />
      {/* Our services */}
      <div className="bg-[#fead26] py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary-foreground mb-8 text-white">
          OUR <span className="text-black">SERVICES</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg relative">
              <img
                src={service.imgSrc}
                alt={service.altText}
                className="w-full h-full object-cover"
              />
              <div className="p-4 text-center bottom-0 w-full absolute z-10">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <Link to="/commercial"><button className="mt-2 bg-[#fead26] text-white text-[15px] py-2 px-4 rounded">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      <Luxury />
      <Testimonials />
      <section class="video-section">
        <div class="video-icon">
          <a
            target="_blank"
            href="https://www.youtube.com/embed/vEeLG5hdvQM"
            data-fancybox=""
          >
            <FaCirclePlay className="text-white text-[50px] hover:text-[#fead26]" />
          </a>
        </div>
      </section>
      <Developer />
      <Blogs />
    </div>
  );
};

export default Home;

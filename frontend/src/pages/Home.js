import React, { useEffect, useState } from "react";
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProperties,
  clearMessages,
} from "../store/reducer/propertyReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.property);

  const [allProperty, setAllProperty] = useState([]);
  const [citise, setCitise] = useState();
  const [inputValue, setInputValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  console.log("cites", selectedCity);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    setAllProperty(properties);
  }, [properties]);

  console.log("home", allProperty);

  return (
    <div>
      <Navbar />
      <div className="header">
        <img src={bg} alt="" />
        <p className="sm:text-[40px] md:text-[60px] text-white text-center">
          FIND THE PROPERTY
        </p>
        <h1 className="sm:text-[50px] md:text-[60px] text-[#fead26] font-bold text-center">
          OF YOUR DREAMS
        </h1>
        <div className="searchbox w-auto flex flex-wrap justify-center items-center p-5 h-auto bg-[#ffffff9f]">
          <select className="h-[60px] text-[20px] md:w-[120px] sm:w-[100%] bg-white sm:p-3 md:p-0 focus:outline-none focus:outline">
            <option>Location</option>
            {allProperty.map((c, i) => (
              <option key={i}>{c.city}</option>
            ))}
          </select>
          <input
            className="h-[60px] px-5  md:w-[600px] sm:w-[100%] text-[20px] border focus:border-none focus:outline bg-white focus:outline-none"
            type="text"
            placeholder="Enter an Address here, City or Area"
            list="property-options"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <datalist id="property-options">
            {properties.map((property, i) => (
              <div>
                <option key={i} value={property.name} />
              </div>
            ))}
            {properties.map((property, i) => (
              <option key={i + properties.length} value={property.city} />
            ))}
          </datalist>
          <Link to={`/project/search?name=${inputValue}&&city=${selectedCity}`}>
            <button className="h-[60px] w-[60px] bg-[#fead26] text-[white] text-[20px] flex justify-center items-center">
              <IoSearch />
            </button>
          </Link>
        </div>
      </div>

      {/* 2nd section */}
      <Whychoosetop />
      <Whychooseus />
      <Popularplace allProperty={allProperty} />
      <Projectslider allProperty={allProperty} />
      {/* Our services */}
      <div className="bg-[#fead26] py-10">
        <div className="container1 w-[95%] mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-8 text-white">
            OUR <span className="text-black">SERVICES</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {allProperty
              .filter(
                (service) => service.resourcetype === "OUR SERVICES PROPERTIS"
              )
              .slice(0, 5)
              .map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-lg relative"
                >
                  <img
                    src={service.images[0]}
                    alt={service.service}
                    className="w-full h-[25rem] object-cover"
                  />
                  <div className="p-4 text-center bottom-0 w-full absolute z-10">
                    <h3 className="text-xl font-semibold text-white">
                      {service.service}
                    </h3>
                    <Link to={`/commercial?service=${service.service}`}>
                      <button className="mt-2 bg-[#fead26] text-white text-[15px] py-2 px-4 rounded">
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
      <Developer allProperty={allProperty} />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "./Home.css";
import bg from "../Assets/desktop-banner.jpg";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { MdOutlineDoorSliding } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import img1 from "../Assets/signature-global-titanium.webp";
import logo from "../Assets/signature-global-titanium-logo.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineWhatsapp } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import { PiMapPinSimpleArea } from "react-icons/pi";

import {
  fetchProperties,
  clearMessages,
} from "../store/reducer/propertyReducer";

const whatsappUrl =
  "https://wa.me/918765432100?text=Hello, I'm interested in your property!";
const Project = () => {
  const dispatch = useDispatch();
  const { properties, successMessage, errorMessage, loading } = useSelector(
    (state) => state.property
  );

  const [allProperty, setAllProperty] = useState([]);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    setAllProperty(properties);
  }, [properties]);

  console.log("home", allProperty);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="project">
      <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Project
        </h1>
      </div>

      {properties.map((property) => (
        <div
          key={property.id}
          className="flex flex-wrap border border-gray-300 rounded-lg overflow-hidden mb-4 w-[90%] mx-auto my-5"
        >
          <div className="h-[auto] sm:w-[100%] lg:w-[25%] object-cover">
            <img
              src={property.images[1]}
              alt="property"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="flex flex-col h-[auto] sm:w-[100%] lg:w-[75%] p-2">
            <div className="flex justify-between">
              <div className="flex flex-col p-2">
                <h2 className="text-black font-semibold text-[17px]">
                  {property.name}
                </h2>
                <p>{property.location}</p>
              </div>
              {/* <div className="h-[80px] w-[200px]">
                <img
                  src={property.logoUrl}
                  alt="logo"
                  className="object-cover"
                />
              </div> */}
            </div>
            <div className="flex flex-wrap gap-4 p-2">
              <p className="flex items-center gap-2">
                <FaBuilding />
                {property.apartments}
              </p>
              <p className="flex items-center gap-2">
                <FaBed />
                {property.bhk}
              </p>
              <p className="flex items-center gap-2">
                <PiMapPinSimpleArea />
                {property.area}
              </p>
              <p className="flex items-center gap-1">
                <MdOutlineCurrencyRupee />
                {property.price}
              </p>
              <p className="flex items-center gap-2">
                <IoKeySharp />
                {property.date}
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineDoorSliding />
                {property.launch}
              </p>
            </div>
            <div className="flex gap-4 p-2">
              <h3 className="flex items-center gap-2 font-semibold text-[17px]">
                <IoMdInformationCircle />
                Rera ID
              </h3>
              <p>N/A</p>
            </div>
            <div className="flex flex-wrap border-t-2 p-2 gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[white] flex items-center text-center sm:w-[100%] md:w-[auto] gap-2 md:h-[32px] sm:h-[40px] justify-center  text-[#20a520] border-[#27b827] border sm:px-3 lg:px-7 py-1 rounded-[10px]"
              >
                <MdOutlineWhatsapp className="text-[20px]" />
                Whatsapp
              </a>
              <Link
                to={`/propertyDetail?nameslug=${property.nameslug}`}
                className="sm:w-[100%]  md:w-auto"
              >
                <button className="bg-[#fead26] sm:w-[100%] sm:h-[40px] md:w-[auto] items-center md:h-[32px] text-[white] border-[#fead26] border sm:px-3 lg:px-7 py-2 rounded-[10px] flex justify-center gap-1">
                  <IoInformationCircleSharp className="text-[20px]" />
                  View Detail
                </button>
              </Link>
              <a
                href="tel:+919627648487"
                className="bg-[#fead26] sm:w-[100%] sm:h-[40px] md:w-[auto] items-center md:h-[32px] text-[white] border-[#fead26] border sm:px-3 lg:px-7 py-2 rounded-[10px] justify-center  flex gap-1"
              >
                <MdCall className="text-[20px]" />
                <span className="sm:hidden md:block">Get</span> Call
              </a>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Project;

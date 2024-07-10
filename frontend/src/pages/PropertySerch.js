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
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PropertySerch = () => {
  const { properties, successMessage, errorMessage, loading } = useSelector(
    (state) => state.property
  );

  console.log("project", properties);
  const [allProperty, setAllProperty] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get("city");

  const filteredProperties = properties.filter(
    (property) => property.city === city
  );

  useEffect(() => {
    setAllProperty(properties);
  }, [properties]);
  console.log("home", allProperty);

  return (
    <div className="project">
      <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Project
        </h1>
      </div>

      {filteredProperties.map((property) => (
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
                <FaBed />
                {property.apartments}
              </p>
              <p className="flex items-center gap-2">{property.bhk}</p>
              <p className="flex items-center gap-2">{property.area}</p>
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
              <p>{property.reraId}</p>
            </div>
            <div className="flex border-t-2 p-2 gap-5">
              <button className="bg-[white] sm:h-[40px] md:h-auto text-[#20a520] border-[#27b827] border sm:px-3 lg:px-7 py-2 rounded-[10px]">
                Whatsapp
              </button>
              <Link to={`/propertyDetail?nameslug=${property.nameslug}`}>
                <button className="bg-[#fead26] sm:h-[40px] md:h-auto text-[white] border-[#fead26] border sm:px-3 lg:px-7 py-2 rounded-[10px] flex gap-1">
                  <span className="sm:hidden md:block">View</span> Detail
                </button>
              </Link>
              <button className="bg-[#fead26] sm:h-[40px] md:h-auto text-[white] border-[#fead26] border sm:px-3 lg:px-7 py-2 rounded-[10px] flex gap-1">
                <span className="sm:hidden md:block">Get</span> Call
              </button>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default PropertySerch;

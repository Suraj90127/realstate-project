import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Transition } from "@headlessui/react";
import "./Home.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { CSSTransition } from "react-transition-group";
import {
  fetchProperties,
  clearMessages,
} from "../store/reducer/propertyReducer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import BreadCrumb from "../components/BreadCrumb";
import contect from "../Assets/contect.webp";

const PropertyDetail = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const [openIndex, setOpenIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [addActiveClass, setAddActiveClass] = useState();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [videoError, setVideoError] = useState(false);
  const [propertyName, setPropertyName] = useState("");

  const handleVideoError = () => {
    setVideoError(true);
  };

  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.property);

  const [allProperty, setAllProperty] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nameslug = searchParams.get("nameslug");

  const filteredProperties = properties.filter(
    (property) => property.nameslug === nameslug
  );

  useEffect(() => {
    if (filteredProperties.length > 0) {
      setPropertyName(filteredProperties[0].name);
    }
  }, [filteredProperties]);
  console.log("filteredProperties", propertyName);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    setAllProperty(properties);
  }, [properties]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.Color = "gray";
    } else {
      document.body.style.backgroundColor = "";
    }

    return () => {
      // Clean up the background color when the component unmounts or showPopup changes
      document.body.style.backgroundColor = "";
    };
  }, [showPopup]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contect",
        formData
      );
      console.log("Form data submitted successfully:", response.data);
      // Optionally clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <div className="projectDetail bg-[#f8f8f8] mt-[70px] flex w-[100%]">
        <div className="sm:( ml-[0%] w-[100%]) md:ml-[5%] relative md:w-[90%]   bg-[#f8f8f8] text-start">
          <BreadCrumb
            title={propertyName}
            title2={"/ Projects"}
            url={"/project"}
          />

          <div className="flex justify-center w-full h-screen mx-auto">
            <div className="h-full overflow-auto flex-1 no-scrollbar">
              {filteredProperties.map((pro, i) => (
                <div className="max-w-5xl  p-4">
                  <div className="container mx-auto px-2">
                    <Slider {...settings}>
                      {pro.images.map(
                        (image, index) =>
                          index < 3 && (
                            <div key={index} className="p-2 h-[450px] w-[100%]">
                              <img
                                src={pro.images[index + 2]}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          )
                      )}
                    </Slider>
                  </div>

                  <div
                    className="grid sm:grid-row-4 md:grid-cols-4 gap-4 mt-4 p-4 bg-card text-card-foreground rounded-lg shadow bg-white"
                    id="overview"
                  >
                    <div className="text-center sm:border-b-2 md:border-r-2">
                      <h3 className="text-lg font-semibold text-[#fead26] ">
                        PRICE
                      </h3>
                      <p className="text-muted-foreground">
                        {pro.price}* Onwards
                      </p>
                    </div>
                    <div className="text-center sm:border-b-2 md:border-r-2">
                      <h3 className="text-lg font-semibold text-[#fead26]">
                        SIZES
                      </h3>
                      <p className="text-muted-foreground">
                        {pro.area} Sq.Ft.* Onwards
                      </p>
                    </div>
                    <div className="text-center sm:border-b-2 md:border-r-2">
                      <h3 className="text-lg font-semibold text-[#fead26]">
                        CONFIGURATIONS
                      </h3>
                      <p className="text-muted-foreground">
                        {pro.bhk} BHK Apartments
                      </p>
                    </div>
                    <div className="text-center ">
                      <h3 className="text-lg font-semibold text-[#fead26]">
                        STATUS
                      </h3>
                      <p className="text-muted-foreground">{pro.launch}</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-card-foreground p-4 rounded-lg shadow-md mt-[20px] sm:hidden md:block sticky  top-0">
                    <div className="flex ">
                      <a
                        href="#home"
                        className="font-semibold hover:text-white hover:bg-[#fead26] px-4 py-2 rounded-md transition-colors duration-300 ease-in-out"
                      >
                        Home
                      </a>
                      <a
                        href="#overview"
                        className="font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2"
                      >
                        Overview
                      </a>
                      <a
                        href="#hightlight"
                        className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2"
                      >
                        Highlights
                      </a>
                      <a
                        href="#amenities"
                        className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2"
                      >
                        Amenities
                      </a>
                      <a
                        href="#gallery"
                        className="font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2"
                      >
                        Gallery
                      </a>
                      <a
                        href="#price"
                        className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2"
                      >
                        Price
                      </a>
                      <a
                        href="#floor"
                        className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2"
                      >
                        Floor Plan
                      </a>
                      <a
                        href="#location"
                        className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2"
                      >
                        Location
                      </a>
                      <a
                        href="#faq"
                        className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2"
                      >
                        FAQ
                      </a>
                    </div>
                  </div>

                  <div
                    className="bg-white text-card-foreground p-6 rounded-lg shadow-lg"
                    id="home"
                  >
                    <h2 className="text-xl font-bold mb-4 bg-[#e9e9ed] px-2 py-2 rounded-[5px]">
                      {pro.name} Overview
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {pro.discription}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <button className="bg-[#fead26] text-white p-3 rounded-lg flex items-center justify-center shadow-lg font-medium">
                        <span>RERA ID</span>
                      </button>
                      <div className="bg-[#f2f6f7] text-muted-foreground p-3 rounded-lg flex items-center justify-center shadow-lg  font-medium">
                        <span>Possession: Feb, 2029</span>
                      </div>
                      <div className="bg-[#f2f6f7] text-muted-foreground p-3 rounded-lg flex items-center justify-center shadow-lg font-medium">
                        <span>Status: New Launch</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-[#f2f6f7] text-muted-foreground p-3 rounded-lg flex items-center justify-center shadow-lg font-medium">
                        <span>Total Project Area: 23 acres</span>
                      </div>
                      <div className="bg-[#f2f6f7] text-muted-foreground p-3 rounded-lg flex items-center justify-center shadow-lg font-medium">
                        <span>Towers: 12</span>
                      </div>
                      <div className="bg-[#f2f6f7] text-muted-foreground p-3 rounded-lg flex items-center justify-center shadow-lg font-medium">
                        <span>Floors: G + 40</span>
                      </div>
                      <div className="bg-[#f2f6f7] text-muted-foreground p-3 rounded-lg flex items-center justify-center shadow-lg font-medium">
                        <span>Units: 1104</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-[20px] mb-[20px] ">
                    <button
                      className="bg-[#fead26] flex items-center gap-3 text-white font-semibold h-[40px] px-3 rounded-sm"
                      id="hightlight"
                      onClick={() => setShowPopup(!showPopup)}
                    >
                      <IoDocumentTextSharp />
                      Enquire Now
                    </button>
                  </div>

                  <div className="bg-white text-card-foreground p-4 rounded-lg shadow-md  mx-auto my-8">
                    <h2 className="text-2xl font-bold mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Signature Global Titanium SPR Highlights
                    </h2>
                    <div className="flex flex-col p-4 justify-center md:items-center md:flex-row">
                      <ul className="flex-1 space-y-2 pr-4 ">
                        {pro.highlights.map((h, i) => (
                          <li className="flex items-center gap-2">
                            <VscDebugBreakpointLog />
                            {h.highlightspoint}
                          </li>
                        ))}
                      </ul>
                      <div className="flex-1 mt-4 md:mt-0 h-[350px]">
                        <img
                          src={pro.images[2]}
                          alt="Image of Signature Global Titanium SPR Highlights"
                          className="rounded-lg w-full object-cover h-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-4 bg-[white] text-card-foreground"
                    id="amenities"
                  >
                    <h2 className="text-2xl font-bold mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Signature Global Titanium SPR Amenities
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {pro.amenitiesimages.map((ai) => (
                        <div className="border border-border rounded-lg overflow-hidden">
                          <img
                            src={ai}
                            alt="Basketball"
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-2 text-center font-semibold">
                            Basketball
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="flex justify-center mt-[20px] mb-[20px] "
                    id="gallery"
                  >
                    <button
                      className="bg-[#fead26] flex items-center gap-3 text-white font-semibold h-[40px] px-3 rounded-sm"
                      onClick={() => setShowPopup(!showPopup)}
                    >
                      <IoDocumentTextSharp /> Download Broucher
                    </button>
                  </div>
                  <div className="p-6 bg-card rounded-lg shadow-md bg-white">
                    <h2 className="text-2xl font-bold mb-4  bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Signature Global Titanium SPR Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {pro.gallery.map((gi) => (
                        <div>
                          <img
                            src={gi}
                            alt="Living room with modern furniture"
                            className="rounded-lg h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="bg-white p-4 rounded-lg shadow-md mt-[20px]"
                    id="price"
                  >
                    <h2 className="text-lg font-bold text-card-foreground mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Signature Global Titanium SPR Price List
                    </h2>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#fead26] text-primary-foreground">
                          <th className="p-2 border border-border">BEDROOMS</th>
                          <th className="p-2 border border-border">SIZES</th>
                          <th className="p-2 border border-border">PRICE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border border-border">
                            {pro.bhk} BHK
                          </td>
                          <td className="p-2 border border-border">
                            {pro.area} Sq. Ft.
                          </td>
                          <td className="p-2 border border-border">
                            On Request
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-center mt-[20px] mb-[20px] ">
                    <button
                      className="bg-[#fead26] text-white font-semibold h-[40px] px-3 rounded-sm"
                      onClick={() => setShowPopup(!showPopup)}
                    >
                      Shadule a Site Visit
                    </button>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md" id="floor">
                    <h2 className="text-2xl font-bold mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Signature Global Titanium SPR Floor Plan
                    </h2>
                    <div className="flex space-x-4 mb-4">
                      <button className="bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary py-2 px-4 rounded-lg">
                        Floor Plan
                      </button>
                      <button className="bg-muted text-muted-foreground dark:bg-muted-foreground dark:text-muted py-2 px-4 rounded-lg">
                        Master Plan
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {pro.floorplan.map((fi, i) => (
                        <div>
                          <img
                            src={fi}
                            alt="Floor plan image 1"
                            className="rounded-lg shadow-md"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="bg-white text-card-foreground p-4 rounded-lg shadow-md mx-auto my-8"
                    id="location"
                  >
                    <h2 className="text-2xl font-bold mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Location Advantage
                    </h2>
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 mt-4 md:mt-0 h-[350px]">
                        <img
                          src={pro.images[0]}
                          alt="Image of Signature Global Titanium SPR Highlights"
                          className="rounded-lg w-full h-full object-cover"
                        />
                      </div>
                      <ul className="flex-1 space-y-2 pl-4 ">
                        {pro.locationadvantage.map((item, i) => (
                          <li className="flex items-center gap-2">
                            <VscDebugBreakpointLog />
                            {item.locationadvantagepoint}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className=" p-2 mx-auto mt-10 bg-white" id="faq">
                    <h2 className="text-2xl font-bold mb-5 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Frequently Asked Questions
                    </h2>
                    {pro.questions.map((faq, index) => (
                      <div key={index} className="mb-2 border-b">
                        <button
                          className="w-full text-left py-2 px-4 flex justify-between items-center"
                          onClick={() => toggleFAQ(index)}
                        >
                          <span>
                            {index + 1}. {faq.que}
                          </span>
                          <span>{openIndex === index ? "-" : "+"}</span>
                        </button>
                        <Transition
                          show={openIndex === index}
                          enter="transition-opacity duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition-opacity duration-300"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="px-4 pb-2 text-gray-600">
                            {faq.ans}
                          </div>
                        </Transition>
                      </div>
                    ))}
                  </div>
                  <div className=" p-2 mx-auto mt-10 bg-white">
                    <h2 className="text-2xl font-bold mb-5 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Signature Global Titanium SPR Video
                    </h2>
                    <div className="video-player">
                      {!videoError ? (
                        <video controls onError={handleVideoError}>
                          <source src={pro.videos[0]} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <p>Video not found or could not be loaded.</p>
                      )}
                    </div>
                  </div>
                  {pro.aboutdevelor.map((ad, i) => (
                    <div className="bg-white p-6 rounded-lg shadow-md mt-[20px]">
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-foreground text-left bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                          About Developer
                        </h2>
                      </div>
                      <div className="flex flex-col md:flex-row md:justify-around mb-6">
                        <div className="text-center mb-4 md:mb-0">
                          <span className="text-4xl font-bold text-[#fead26]">
                            {ad.exp}+
                          </span>
                          <p className="text-muted-foreground">
                            Years of Experience
                          </p>
                        </div>
                        <div className="text-center mb-4 md:mb-0">
                          <span className="text-4xl font-bold text-[#fead26]">
                            {ad.project}+
                          </span>
                          <p className="text-muted-foreground">
                            Total Projects
                          </p>
                        </div>
                        <div className="text-center">
                          <span className="text-4xl font-bold text-[#fead26]">
                            {ad.client}
                          </span>
                          <p className="text-muted-foreground">Total Cities</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row items-start">
                        <img
                          src={ad.image}
                          alt="Company Logo"
                          className="w-auto h-[50px] object-cover mr-6 mb-4 md:mb-0 md:mr-12"
                        />
                        <div className="text-muted-foreground">
                          <p className="mb-4">{ad.about}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className=" p-2 mx-auto mt-10 bg-white">
                    <h2 className="text-2xl font-bold mb-5 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">
                      Related Projects
                    </h2>
                    <div className="video-player">
                      {!videoError ? (
                        <video controls onError={handleVideoError}>
                          <source src="" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <p>File Not Found</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="max-w-6xl  p-4 sm:block lg:hidden">
                <div className=" p-4 bg-white h-[600px] rounded-lg shadow-md mt-4">
                  {filteredProperties.map((pro) => (
                    <div className="text-center mb-4">
                      <h1 className="text-3xl font-bold text-[#fead26]">
                        Titanium <span className="text-primary">SPR</span>
                      </h1>
                      <p className="text-muted-foreground">
                        {" "}
                        <span>{pro.location}</span>, <span>{pro.city}</span>{" "}
                      </p>
                    </div>
                  ))}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email ID"
                        className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="flex mb-4">
                      <select className="w-1/3 p-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>India (+91)</option>
                      </select>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile"
                        className="w-2/3 p-2 border border-border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>
                    <div className="mb-4 flex items-start">
                      <input type="checkbox" id="terms" className="mr-2" />
                      <label htmlFor="terms" className="text-muted-foreground">
                        By submitting this form I agree to{" "}
                        <a href="#" className="text-primary underline">
                          Terms of Use
                        </a>
                      </label>
                    </div>
                    <button className="w-full bg-[#fead26] text-white py-2 rounded-md">
                      Request a Call Back
                    </button>
                  </form>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="flex space-x-4 text-[30px] text-[#303030]">
                      <a
                        href="https://www.facebook.com/share/ShvzJdDvycne15UQ/?mibextid=qi2Omg"
                        target="_blank"
                        className="hover:underline hover:text-[#fead26]"
                      >
                        <FaFacebookSquare />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/themaxify/"
                        target="_blank"
                        className="hover:underline hover:text-[#fead26]"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="#"
                        className="hover:underline hover:text-[#fead26]"
                      >
                        <FaYoutube />
                      </a>
                      <a
                        href="https://www.instagram.com/maxifywebsolutions?igsh=MXFmeHJ5eXlicjhrMQ=="
                        target="_blank"
                        className="hover:underline hover:text-[#fead26]"
                      >
                        <FaInstagramSquare />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-6xl  p-4 sm:hidden lg:block">
              <div className=" p-4 bg-white h-[600px] rounded-lg shadow-md mt-4">
                {filteredProperties.map((pro) => (
                  <div className="text-center mb-4">
                    <h1 className="text-3xl font-bold text-[#fead26]">
                      Titanium <span className="text-primary">SPR</span>
                    </h1>
                    <p className="text-muted-foreground">
                      {" "}
                      <span>{pro.location}</span>, <span>{pro.city}</span>{" "}
                    </p>
                  </div>
                ))}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email ID"
                      className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex mb-4">
                    <select className="w-1/3 p-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>India (+91)</option>
                      <option>USA (+1)</option>
                    </select>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Mobile"
                      className="w-2/3 p-2 border border-border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  <div className="mb-4 flex items-start">
                    <input type="checkbox" id="terms" className="mr-2" />
                    <label htmlFor="terms" className="text-muted-foreground">
                      By submitting this form I agree to{" "}
                      <a href="#" className="text-primary underline">
                        Terms of Use
                      </a>
                    </label>
                  </div>
                  <button className="w-full bg-[#fead26] text-white py-2 rounded-md">
                    Request a Call Back
                  </button>
                </form>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="flex space-x-4 text-[30px] text-[#303030]">
                    <a
                      href="https://www.facebook.com/share/ShvzJdDvycne15UQ/?mibextid=qi2Omg"
                      target="_blank"
                      className="hover:underline hover:text-[#fead26]"
                    >
                      <FaFacebookSquare />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/themaxify/"
                      target="_blank"
                      className="hover:underline hover:text-[#fead26]"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/maxifywebsolutions?igsh=MXFmeHJ5eXlicjhrMQ=="
                      target="_blank"
                      className="hover:underline hover:text-[#fead26]"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="#"
                      className="hover:underline hover:text-[#fead26]"
                    >
                      <FaInstagramSquare />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CSSTransition
        in={showPopup}
        timeout={500}
        classNames="popup-transition"
        unmountOnExit
      >
        <div className="max-w-6xl sm:hidden lg:block absolute top-5 right-[25%] border-[10px] border-yellow-500 rounded-lg bg-white">
          <div
            className="absolute -right-4 -top-4 p-1 rounded-full bg-yellow-500 text-black text-2xl cursor-pointer"
            onClick={() => setShowPopup(false)}
          >
            <RxCross2 />
          </div>
          <div className="border-b-2 text-center py-5">
            <h3 className="text-2xl text-black font-semibold roboto-bold">
              Download Brochure
            </h3>
            <p className="roboto-bold mt-3">
              Contact our Specialist on <span>+91 9876543210</span> or kindly
              provide your details below
            </p>
          </div>
          <div className="flex py-1 px-3">
            {filteredProperties.map((pro) => (
              <div className="image flex flex-col justify-center" key={pro.id}>
                <img className="w-80" src={pro.gallery[0]} alt="" />
              </div>
            ))}

            <div className="p-4 bg-white h-auto rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email ID"
                    className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex mb-4">
                  <select className="w-1/3 p-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>India (+91)</option>
                    <option>USA (+1)</option>
                  </select>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile"
                    className="w-2/3 p-2 border border-border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div className="mb-4 flex ">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-muted-foreground">
                    I Agree Terms & Coditions
                  </label>
                </div>
                <button className="w-full bg-[#fead26] text-white py-2 rounded-md">
                  Request a Call Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </CSSTransition>
      <Footer />
    </div>
  );
};

export default PropertyDetail;

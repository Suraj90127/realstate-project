import React from "react";
import "./component.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-[100%] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <img src={logo} alt="" className="mb-3" />
            <p>
              PROPZILLA is a real estate advisory firm that provides honest
              information and services to make the property buying process
              easier for the buyers.
            </p>
          </div>

          {/* Property in India */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4 w-[70%] bg-[#3c3c3c] border-l-4 border-[#fead26] px-3">
              Property in India
            </h2>
            <ul>
              <li>
                <Link
                  to={`/project/search?name=&&city=Banglore`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Bangalore
                </Link>
              </li>
              <li>
                <Link
                  to={`/project/search?name=&&city=Delhi`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Delhi
                </Link>
              </li>
              <li>
                <Link
                  to={`/project/search?name=&&city=Goa`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Goa
                </Link>
              </li>
              <li>
                <Link
                  to={`/project/search?name=&&city=Gurgaon`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Gurgaon
                </Link>
              </li>
            </ul>
          </div>

          {/* Residential Properties */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4 w-[70%] bg-[#3c3c3c] border-l-4 border-[#fead26] px-3">
              Residential Properties
            </h2>
            <ul>
              <li>
            <Link
                  to={`/propertyDetail?nameslug=Ambience-Tiverton`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Residental Ambinance-Tiverton
                </Link>
                </li>
                <li>
                <Link
                  to={`/propertyDetail?nameslug=OC-Received-Godrej-South-Estate`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Residental Godrej South
                </Link>
                </li>
            </ul>
          </div>

          {/* Commercial Properties */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4 w-[70%] bg-[#3c3c3c] border-l-4 border-[#fead26] px-3">
              Commercial Properties
            </h2>
            <ul>
              <li>
              <Link
                  to={`/propertyDetail?nameslug=Emaar-Business-District-EBD-75A`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Commercial Emaar Business
                </Link>
              </li>
              <li>
              <Link
                  to={`/propertyDetail?nameslug=Embassy-Lake`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Commercial Embassy Lake
                </Link>
              </li>
              <li>
              <Link
                  to={`/propertyDetail?nameslug=Krisumi-Waterfall-Residences`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Commercial Krisumi Waterfall
                </Link>
              </li>
              <li>
              <Link
                  to={`/propertyDetail?nameslug=Century-Ethos`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Commercial Century Ethos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap justify-between">
            {/* Top Property Searches */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h2 className="text-lg font-bold mb-4 w-[70%] bg-[#3c3c3c] border-l-4 border-[#fead26] px-3">
                Top Property Searches
              </h2>
              <ul>
                <li>
                <Link
                  to={`/propertyDetail?nameslug=Emaar-Business-District-EBD-75A`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property of Gurgaon
                </Link>
                </li>
                <li>
                <Link
                  to={`/project/search?name=&&city=Delhi`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property of Delhi
                </Link>
                </li>
                <li>
                <Link
                  to={`/project/search?name=&&city=Mumbai`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property of Mumbai
                </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h2 className="text-lg font-bold mb-4 w-[70%] bg-[#3c3c3c] border-l-4 border-[#fead26] px-3">
                Contact Info
              </h2>
              <p>
                Corporate Office: Unit No 728 & 727, 2nd Floor, Suncity Success
                Tower, Golf Course Ext. Road, Sector 65, Gurugram
              </p>
              <p>Sales & Support: 1800 123 4567</p>
              <p>Email: info@propzilla.in</p>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h2 className="text-lg font-bold mb-4 w-[70%] bg-[#3c3c3c] border-l-4 border-[#fead26] px-3">
                Follow Us
              </h2>
              <div className="flex space-x-4 text-[30px] text-[#d1d1d1]">
                <a href="https://www.facebook.com/share/ShvzJdDvycne15UQ/?mibextid=qi2Omg" target="_blank" className="hover:underline hover:text-[#fead26]">
                  <FaFacebookSquare />
                </a>
                <a href="https://www.linkedin.com/company/themaxify/" target="_blank" className="hover:underline hover:text-[#fead26]">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  <FaYoutube />
                </a>
                <a href="https://www.instagram.com/maxifywebsolutions?igsh=MXFmeHJ5eXlicjhrMQ==" target="_blank" className="hover:underline hover:text-[#fead26]">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-[100%] border-t flex justify-around items-center flex-wrap border-gray-700  text-center">
          <p className="mt-4">
            &copy; 2024 PROPZILLA INFRATECH PRIVATE LIMITED
          </p>
          {/* <div className="mt-4">
            <a href="#" className="hover:underline hover:text-[#fead26]">
              About us
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline hover:text-[#fead26]">
              Contact Us
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline hover:text-[#fead26]">
              Careers
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline hover:text-[#fead26]">
              Blog
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline hover:text-[#fead26]">
              Site Map
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline hover:text-[#fead26]">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline hover:text-[#fead26]">
              Disclaimer
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

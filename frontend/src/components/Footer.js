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
                  to={`/project/search?city=Bangalore`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Bangalore
                </Link>
              </li>
              <li>
                <Link
                  to={`/project/search?city=Delhi`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Delhi
                </Link>
              </li>
              <li>
                <Link
                  to={`/project/search?city=Goa`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Goa
                </Link>
              </li>
              <li>
                <Link
                  to={`/project/search?city=Gurgaon`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Gurgaon
                </Link>
              </li>
              <li>
                <Link
                  to={`/project/search?city=Himachal Pradesh`}
                  className="hover:underline hover:text-[#fead26]"
                >
                  Property in Himachal Pradesh
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
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  Birla Navya
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  Birla Niyara
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  BPTP Fortuna
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  BPTP The Amario
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  Central Park Bellavista Towers
                </a>
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
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  Adani Downtown Avenue
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  AIPL Autograph
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  AIPL Business Club
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  AIPL Joy Central
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  AIPL Joy District
                </a>
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
                  <a href="#" className="hover:underline hover:text-[#fead26]">
                    Luxury Projects in Gurgaon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-[#fead26]">
                    Luxury Flats in Gurgaon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-[#fead26]">
                    Luxury Homes in Gurgaon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-[#fead26]">
                    Luxury Apartments in Hebbal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-[#fead26]">
                    Luxury Villas in Bangalore
                  </a>
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
          <div className="mt-4">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

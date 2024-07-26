import { useEffect } from "react";
import bg from "../Assets/desktop-banner.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./Home.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="developer-header">
          <img src={bg} alt="" />
          <h1 className="text-4xl font-bold text-center mb-8 text-white">
            CONTACT US
          </h1>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="container sm:px-0  md:px-5 py-24 mx-auto flex sm:flex-wrap sm:flex-col-reverse md:flex-row md:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 md:w-1/2 sm:w-[100%] sm:mt-5 md:mt-0 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:info@maxifysolution.com"
                    className="cursor-pointer"
                  >
                    info@maxifysolution.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <a href="tel:+919627648487" className="cursor-pointer">
                    <h2 className="text-sm font-medium text-slate-700">
                      +91 9627-648-487
                    </h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-center text-2xl mb-1 font-bold title-font">
                GET IN TOUCH WITH US!
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600"></p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#fead26] focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#fead26] focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="number"
                  className="leading-7 text-sm text-gray-600"
                >
                  Mobile No.
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#fead26] focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#fead26] focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-[#fead26] border-0 py-2 px-6 focus:outline-none hover:[#fead26] rounded text-lg">
                Request a Call Back
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;


import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Transition } from '@headlessui/react';
import "./Home.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
  ];
  const faqs = [
    {
      question: "What is the Signature Global Titanium Location?",
      answer:
        "Signature Global Titanium address is Sector 71, Gurgaon. Signature Global Titanium by Signature Global is located at the posh locality that is for the people who want to enjoy a luxurious life. You can find the directions to reach at Signature Global Titanium in the location map.",
    },
    {
      question: "What is the Signature Global Titanium Starting Price?",
      answer:
        "Signature Global Titanium Price List shows that the apartments starting from 4.60 Cr* Onwards. The complete payment plan of Signature Global Titanium has listed the total cost, base price and launch price of the project. To know Signature Global Titanium price history get in touch with us.",
    },
    {
      question: "What are Signature Global Titanium Sizes?",
      answer:
        "The project is spread over 23 Acres* of land area and the units are available in various sizes which are mentioned in Signature Global Titanium Floor plan. The layout shows that the starting size of the apartments is 2600 Sq.Ft. Onwards. Download the master plan for the better understanding of the project. Call us for the Signature Global Titanium total area and carpet area.",
    },
    {
      question: "Where to Download Signature Global Titanium Photos & Videos?",
      answer:
        "Signature Global Titanium images are available here at Propzilla in the gallery section. Download the pics from the picture gallery for the more visual understanding of the project. You can also watch the Signature Global Titanium YouTube videos at Propzilla Youtube Channel.",
    },
  ];

const PropertyDetail = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      };

      const [openIndex, setOpenIndex] = useState(null);

      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      const [videoError, setVideoError] = useState(false);

      const handleVideoError = () => {
        setVideoError(true);
      };
  return (
    <div>
      <Navbar />
    <div className="projectDetail bg-[#f8f8f8] flex justify-center ">
    <div className="bg-[#f8f8f8]  mt-[70px] flex relative">
      <div className="max-w-6xl  p-4">
          
      <div className="container mx-auto px-2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
          
          <div className="grid sm:grid-row-4 md:grid-cols-4 gap-4 mt-4 p-4 bg-card text-card-foreground rounded-lg shadow bg-white">
            <div className="text-center sm:border-b-2 md:border-r-2">
              <h3 className="text-lg font-semibold text-[#fead26] ">PRICE</h3>
              <p className="text-muted-foreground">4.60 Cr* Onwards</p>
            </div>
            <div className="text-center sm:border-b-2 md:border-r-2">
              <h3 className="text-lg font-semibold text-[#fead26]">SIZES</h3>
              <p className="text-muted-foreground">2600 Sq.Ft.* Onwards</p>
            </div>
            <div className="text-center sm:border-b-2 md:border-r-2">
              <h3 className="text-lg font-semibold text-[#fead26]">CONFIGURATIONS</h3>
              <p className="text-muted-foreground">3.5 & 4.5 BHK Apartments</p>
            </div>
            <div className="text-center ">
              <h3 className="text-lg font-semibold text-[#fead26]">STATUS</h3>
              <p className="text-muted-foreground">New Launch</p>
            </div>
          </div>
          
        <div className="bg-white dark:bg-card-foreground p-4 rounded-lg shadow-md mt-[20px] sm:hidden md:block sticky top-[70px]">
              <div className="flex ">
                <a href="#" className="font-semibold hover:text-white hover:bg-[#fead26] px-4 py-2 rounded-md transition-colors duration-300 ease-in-out">
                  Home
                </a>
                <a href="#" className="font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2">
                  Overview
                </a>
                <a href="#" className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2">
                  Highlights
                </a>
                <a href="#" className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2">
                  Amenities
                </a>
                <a href="#" className="font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2">
                  Gallery
                </a>
                <a href="#" className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2">
                  Price
                </a>
                <a href="#" className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2">
                  Floor Plan
                </a>
                <a href="#" className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2">
                  Location
                </a>
                <a href="#" className=" font-semibold hover:text-white hover:bg-[#fead26] transition-colors duration-300 ease-in-out px-4 py-2">
                  FAQ
                </a>
              </div>
            </div>

            <div className="bg-white text-card-foreground p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4 bg-[#e9e9ed] px-2 py-2 rounded-[5px]">Signature Global Titanium SPR Overview</h2>
              <p className="text-muted-foreground mb-4">
                Signature Global Titanium SPR in Sector 71, Gurgaon, offers a prime opportunity for homebuyers. Developed by Signatureglobal India Limited, this project features apartments currently available
                for sale. It's under construction and is expected to be completed by Feb, 2029. As a RERA-registered housing society, Signature Global Titanium SPR provides full project details on the state
                RERA website, ensuring transparency and reliability for buyers. The RERA registration number is RC/REP/HARERA/GGM/831/563/2024/58, dated June 3, 2024.
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
            <button className="bg-[#fead26] text-white font-semibold h-[40px] px-3 rounded-sm">Enquire Now</button>
            </div>

            <div className="bg-white text-card-foreground p-4 rounded-lg shadow-md  mx-auto my-8">
                  <h2 className="text-2xl font-bold mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Signature Global Titanium SPR Highlights</h2>
                  <div className="flex flex-col md:flex-row">
                    <ul className="flex-1 space-y-2 pr-4 ">
                      <li> 5-star IGBC Green Rating</li>
                      <li> Sky Terrace on the 30th floor of every tower</li>
                      <li> 5-tier security system</li>
                      <li> Home automation with video door phone (VDP)</li>
                      <li> 7 swimming pools, including 2 heated pools</li>
                      <li> Multi-use court for volleyball, badminton, basketball, and practice cricket pitch, plus 55+ sports activities</li>
                      <li> Multiple water features</li>
                      <li> 65% open and green spaces</li>
                      <li> 5 dedicated elevators for every 2 apartments</li>
                      <li> Extra spacious decks</li>
                      <li> EV charging bays and dedicated car washing facility</li>
                    </ul>
                    <div className="flex-1 mt-4 md:mt-0">
                      <img src="https://placehold.co/600x400" alt="Image of Signature Global Titanium SPR Highlights" className="rounded-lg w-full h-auto" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[white] text-card-foreground">
                  <h2 className="text-2xl font-bold mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Signature Global Titanium SPR Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border border-border rounded-lg overflow-hidden">
                      <img src="https://placehold.co/300x200" alt="Basketball" className="w-full h-48 object-cover" />
                      <div className="p-2 text-center font-semibold">Basketball</div>
                    </div>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <img src="https://placehold.co/300x200" alt="Cricket" className="w-full h-48 object-cover" />
                      <div className="p-2 text-center font-semibold">Cricket</div>
                    </div>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <img src="https://placehold.co/300x200" alt="Badminton Court" className="w-full h-48 object-cover" />
                      <div className="p-2 text-center font-semibold">Badminton Court</div>
                    </div>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <img src="https://placehold.co/300x200" alt="Tennis Court" className="w-full h-48 object-cover" />
                      <div className="p-2 text-center font-semibold">Tennis Court</div>
                    </div>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <img src="https://placehold.co/300x200" alt="Indoor Games Room" className="w-full h-48 object-cover" />
                      <div className="p-2 text-center font-semibold">Indoor Games Room</div>
                    </div>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <img src="https://placehold.co/300x200" alt="Kids Play Area" className="w-full h-48 object-cover" />
                      <div className="p-2 text-center font-semibold">Kids Play Area</div>
                    </div>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <img src="https://placehold.co/300x200" alt="SPA" className="w-full h-48 object-cover" />
                      <div className="p-2 text-center font-semibold">SPA</div>
                    </div>
                    <div className="border border-border rounded-lg overflow-hidden">
                      <img src="https://placehold.co/300x200" alt="Gym" className="w-full h-48 object-cover" />
                      <div className="p-2 text-center font-semibold">Gym</div>
                    </div>
                  </div>
                </div>
                
            <div className="flex justify-center mt-[20px] mb-[20px] ">
            <button className="bg-[#fead26] text-white font-semibold h-[40px] px-3 rounded-sm">Download Broucher</button>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md bg-white">
                  <h2 className="text-2xl font-bold mb-4  bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Signature Global Titanium SPR Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src="https://placehold.co/300x200" alt="Living room with modern furniture" className="rounded-lg" />
                    <img src="https://placehold.co/300x200" alt="Swimming pool with palm trees" className="rounded-lg" />
                    <img src="https://placehold.co/300x200" alt="Balcony view of high-rise buildings" className="rounded-lg" />
                    <img src="https://placehold.co/300x200" alt="Aerial view of landscaped garden" className="rounded-lg" />
                    <img src="https://placehold.co/300x200" alt="Bedroom with large windows" className="rounded-lg" />
                    <img src="https://placehold.co/300x200" alt="Modern bathroom with bathtub" className="rounded-lg" />
                    <img src="https://placehold.co/300x200" alt="High-rise buildings with swimming pool" className="rounded-lg" />
                    <img src="https://placehold.co/300x200" alt="Luxury living room with city view" className="rounded-lg" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md mt-[20px]">
              <h2 className="text-lg font-bold text-card-foreground mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Signature Global Titanium SPR Price List</h2>
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
                    <td className="p-2 border border-border">3.5 BHK</td>
                    <td className="p-2 border border-border">2600 – 2800 Sq. Ft.</td>
                    <td className="p-2 border border-border">On Request</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-border">4.5 BHK</td>
                    <td className="p-2 border border-border">3200 – 3300 Sq. Ft.</td>
                    <td className="p-2 border border-border">On Request</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-[20px] mb-[20px] ">
            <button className="bg-[#fead26] text-white font-semibold h-[40px] px-3 rounded-sm">Shadule a Site Visit</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Signature Global Titanium SPR Floor Plan</h2>
                  <div className="flex space-x-4 mb-4">
                    <button className="bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary py-2 px-4 rounded-lg">Floor Plan</button>
                    <button className="bg-muted text-muted-foreground dark:bg-muted-foreground dark:text-muted py-2 px-4 rounded-lg">Master Plan</button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <img src="https://placehold.co/800x600" alt="Floor plan image 1" className="rounded-lg shadow-md" />
                    <img src="https://placehold.co/800x600" alt="Floor plan image 2" className="rounded-lg shadow-md" />
                    <img src="https://placehold.co/800x600" alt="Floor plan image 3" className="rounded-lg shadow-md" />
                  </div>
                </div>
                <div className="bg-white text-card-foreground p-4 rounded-lg shadow-md mx-auto my-8">
                  <h2 className="text-2xl font-bold mb-4 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Signature Global Titanium SPR Highlights</h2>
                  <div className="flex justify-center items-center flex-col md:flex-row">
                    
                  <div className="flex-1 mt-4 md:mt-0">
                      <img src="https://placehold.co/600x400" alt="Image of Signature Global Titanium SPR Highlights" className="rounded-lg w-full h-auto" />
                    </div>
                    <ul className="flex-1 space-y-2 pl-4 ">
                      <li> 5-star IGBC Green Rating</li>
                      <li> Sky Terrace on the 30th floor of every tower</li>
                      <li> 5-tier security system</li>
                      <li> Home automation with video door phone (VDP)</li>
                      <li> 7 swimming pools, including 2 heated pools</li>
                      <li> Multi-use court for volleyball, badminton, basketball, and practice cricket pitch, plus 55+ sports activities</li>
                      <li> Multiple water features</li>
                      <li> 65% open and green spaces</li>
                      <li> 5 dedicated elevators for every 2 apartments</li>
                      <li> Extra spacious decks</li>
                      <li> EV charging bays and dedicated car washing facility</li>
                    </ul>
                  </div>
                </div>
                <div className=" p-2 mx-auto mt-10 bg-white">
      <h2 className="text-2xl font-bold mb-5 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 border-b">
          <button
            className="w-full text-left py-2 px-4 flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span>{index + 1}. {faq.question}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
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
              {faq.answer}
            </div>
          </Transition>
        </div>
      ))}
    </div>
                <div className=" p-2 mx-auto mt-10 bg-white">
      <h2 className="text-2xl font-bold mb-5 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Signature Global Titanium SPR Video</h2>
      <div className="video-player">
      { !videoError ? (
        <video controls onError={handleVideoError}>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Video not found or could not be loaded.</p>
      )}
    </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md mt-[20px]">
                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-foreground text-left bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">About Developer</h2>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-around mb-6">
                    <div className="text-center mb-4 md:mb-0">
                      <span className="text-4xl font-bold text-[#fead26]">16+</span>
                      <p className="text-muted-foreground">Years of Experience</p>
                    </div>
                    <div className="text-center mb-4 md:mb-0">
                      <span className="text-4xl font-bold text-[#fead26]">25+</span>
                      <p className="text-muted-foreground">Total Projects</p>
                    </div>
                    <div className="text-center">
                      <span className="text-4xl font-bold text-[#fead26]">4</span>
                      <p className="text-muted-foreground">Total Cities</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start">
                    <img src="https://placehold.co/100x100?text=Logo" alt="Company Logo" className="w-24 h-24 mr-6 mb-4 md:mb-0 md:mr-12" />
                    <div className="text-muted-foreground">
                      <p className="mb-4">Signature Global is the Largest real estate development company in Delhi-NCR, focused on affordable and mid segment housing (LIG and MIG) in terms of unit supplied (in the below Rs.80 lakh price category) between 2019 and 2021 with a market share of 19%.</p>
                      <p className="mb-4">The company commenced its operations in 2014 through its subsidiary, Signature Builders Private Limited, with the launch of our Solera project on 6.13 acres of land in Gurugram, Haryana. We have grown our operations over the years and in less than a decade, and as of March 31, 2022, we had sold 23,453 residential and commercial units, all within the Delhi NCR region, with an aggregate Saleable Area of 14.59 million square feet.</p>
                      <p>Strategically focused on Government of India and state government policies supporting affordable housing, specifically the Affordable Housing Policy, 2013 notified by the Town and Country Planning Department, Government of Haryana (“AHP”) and the Affordable Plotted Housing Policy or the Deen Dayal Jan Awas Yojana (“DDJAY - APHP”). Most of our Completed Projects, Ongoing Projects and Forthcoming Projects are located in Gurugram and Sohna in Haryana.</p>
                    </div>
                  </div>
                </div>

                <div className=" p-2 mx-auto mt-10 bg-white">
      <h2 className="text-2xl font-bold mb-5 bg-[#e9e9ed]  px-2 py-2 rounded-[5px]">Related Projects</h2>
      <div className="video-player">
      { !videoError ? (
        <video controls onError={handleVideoError}>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>File Not Found</p>
      )}
    </div>
    </div>
    <div className=" p-4 bg-white h-[600px] rounded-lg shadow-md mt-4">
              <div className="text-center mb-4">
                <h1 className="text-3xl font-bold text-[#fead26]">
                  Titanium <span className="text-primary">SPR</span>
                </h1>
                <p className="text-muted-foreground"> Sector 71, Gurgaon</p>
              </div>
              <form>
                <div className="mb-4">
                  <input type="text" placeholder="Full Name" className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Email ID" className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="flex mb-4">
                  <select className="w-1/3 p-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>India (+91)</option>
                  </select>
                  <input type="text" placeholder="Mobile" className="w-2/3 p-2 border border-border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Message" className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <div className="mb-4 flex items-start">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-muted-foreground">
                    By submitting this form I agree to{' '}
                    <a href="#" className="text-primary underline">
                      Terms of Use
                    </a>
                  </label>
                </div>
                <button className="w-full bg-[#fead26] text-white py-2 rounded-md"> Request a Call Back</button>
              </form>
              <div className="mt-4 flex justify-center space-x-2">
              <div className="flex space-x-4 text-[30px] text-[#303030]">
                <a href="#" className="hover:underline hover:text-[#fead26]"><FaFacebookSquare /></a>
                <a href="#" className="hover:underline hover:text-[#fead26]"><FaLinkedin /></a>
                <a href="#" className="hover:underline hover:text-[#fead26]"><FaYoutube /></a>
                <a href="#" className="hover:underline hover:text-[#fead26]"><FaInstagramSquare /></a>
              </div>
              </div>
            </div>
        </div>
        {/*  */}
        
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default PropertyDetail
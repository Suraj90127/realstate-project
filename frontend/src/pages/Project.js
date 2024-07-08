import React from 'react';
import bg from "../Assets/desktop-banner.jpg";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { MdOutlineDoorSliding } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import img1 from "../Assets/signature-global-titanium.webp"
import logo from "../Assets/signature-global-titanium-logo.png"
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const properties = [
  {
    id: 1,
    title: "Signature Global Titanium SPR",
    location: "Sector 71, Gurgaon",
    apartments: "3.5 & 4.5 BHK",
    area: "2600 Sq.Ft.",
    price: "₹ 4.60 Cr* Onwards",
    reraId: "RC/REP/HARERA/GGM/",
    possessionDate: "Feb, 2029",
    status: "New Launch",
    imageUrl: img1, // Replace with actual image URL
    logoUrl: logo, // Replace with actual logo URL
  },
  {
    id: 2,
    title: "Smart World The Edition",
    location: "Sector 66, Golf Course Ext. Road, Gurgaon",
    apartments: "3.5 & 4.5 BHK",
    area: "2945 Sq. Ft.",
    price: "₹ 6.15 Cr* Onwards",
    reraId: "GGM/756/488/2023/100",
    possessionDate: "Feb, 2031",
    status: "New Launch",
    imageUrl: img1, 
    logoUrl: logo,
  },
];

const Project = () => {
  return (
    <div>
        <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Project
        </h1>
      </div>

      {properties.map((property) => (
        <div key={property.id} className="flex flex-wrap border border-gray-300 rounded-lg overflow-hidden mb-4 w-[80%] mx-[10%] mt-3">
          <div className="h-[auto] sm:w-[100%] lg:w-[25%] object-cover">
            <img src={property.imageUrl} alt="property" className='w-[100%] h-[100%] object-cover' />
          </div>
          <div className="flex flex-col h-[auto] sm:w-[100%] lg:w-[75%] p-2">
            <div className="flex justify-between">
              <div className='flex flex-col p-2'>
                <h2 className="text-black font-semibold text-[17px]">{property.title}</h2>
                <p>{property.location}</p>
              </div>
              <div className="h-[80px] w-[200px]">
                <img src={property.logoUrl} alt="logo" className="object-cover" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 p-2">
              <p className="flex items-center gap-2"><FaBuilding />Apartments</p>
              <p className="flex items-center gap-2"><FaBed />{property.apartments}</p>
              <p className="flex items-center gap-2">{property.area}</p>
              <p className="flex items-center gap-2"><MdOutlineCurrencyRupee />{property.price}</p>
              <p className="flex items-center gap-2"><IoKeySharp />{property.possessionDate}</p>
              <p className="flex items-center gap-2"><MdOutlineDoorSliding />{property.status}</p>
            </div>
            <div className="flex gap-4 p-2">
              <h3 className="flex items-center gap-2 font-semibold text-[17px]"><IoMdInformationCircle />Rera ID</h3>
              <p>{property.reraId}</p>
            </div>
            <div className="flex border-t-2 p-2 gap-5">
              <button className="bg-[white] sm:h-[40px] md:h-auto text-[#20a520] border-[#27b827] border sm:px-3 lg:px-7 py-2 rounded-[10px]">Whatsapp</button>
              <button className="bg-[#fead26] sm:h-[40px] md:h-auto text-[white] border-[#fead26] border sm:px-3 lg:px-7 py-2 rounded-[10px] flex gap-1"><span className="sm:hidden md:block">View</span> Detail</button>
              <button className="bg-[#fead26] sm:h-[40px] md:h-auto text-[white] border-[#fead26] border sm:px-3 lg:px-7 py-2 rounded-[10px] flex gap-1"><span className="sm:hidden md:block">Get</span> Call</button>
            </div>
          </div>
        </div>
      ))}
      
      <Footer />
    </div>
  );
};

export default Project;

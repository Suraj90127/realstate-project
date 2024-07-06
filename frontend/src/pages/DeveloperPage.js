import React, { useState } from "react";
import "./Home.css";
import bg from "../Assets/desktop-banner.jpg";
import Luxury from "../components/Luxury";
import Testimonials from "../components/Testimonials";
import Developer from "../components/Developer";
import logo from "../Assets/suncity-logo.webp"

const cities = ["All", "Gurgaon", "Delhi", "Noida", "Bangalore", "Himachal Pradesh", "Pune", "Goa", "Mumbai"];

const developers = [
  { name: "Risland", city: "Gurgaon", image: logo },
  { name: "Raheja", city: "Delhi", image: "link-to-raheja-image.jpg" },
  { name: "DLF", city: "Delhi", image: "link-to-dlf-image.jpg" },
  { name: "Godrej Properties", city: "Mumbai", image: "link-to-godrej-image.jpg" },
  { name: "Bhutani Infra", city: "Noida", image: "link-to-bhutani-image.jpg" },
  { name: "Acropolis", city: "Noida", image: "link-to-acropolis-image.jpg" },
  { name: "Purple", city: "Noida", image: "link-to-purple-image.jpg" },
  { name: "Tata Housing", city: "Noida", image: "link-to-tata-image.jpg" },
  { name: "Kalpa-Taru", city: "Noida", image: "link-to-kalpa-taru-image.jpg" },
  { name: "Paras Buildtech", city: "Noida", image: "link-to-paras-image.jpg" },
  { name: "Laureate Buildwell", city: "Noida", image: "link-to-laureate-image.jpg" },
  { name: "Gulshan", city: "Noida", image: "link-to-gulshan-image.jpg" },
];
const DeveloperPage = () => {
    const [selectedCity, setSelectedCity] = useState("All");

  const filteredDevelopers = selectedCity === "All"
    ? developers
    : developers.filter(developer => developer.city === selectedCity);
  return (
    <div className="developer-page">
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
                    DEVELOPERS
                  </h1>
      </div>

      <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8 mt-8">
                    SELECT THE <span className="text-[#fead26]">CITY</span>
                  </h1>
      <div className="flex justify-center flex-wrap mb-8">
        {cities.map((city, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 mb-2 font-semibold border-b-4 ${
              selectedCity === city ? "border-orange-500" : "border-transparent"
            } hover:border-orange-500`}
            onClick={() => setSelectedCity(city)}
          >
            {city}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredDevelopers.map((developer, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg">
            <img
              src={developer.image}
              alt={developer.name}
              className="w-full h-32 sm:h-40 object-contain mb-4"
            />
            <div className="text-center text-lg font-bold">{developer.name}</div>
          </div>
        ))}
      </div>
    </div>
    <Luxury />
    <Testimonials />
    <Developer />
    </div>
  )
}

export default DeveloperPage

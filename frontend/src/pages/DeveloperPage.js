import React, { useEffect, useState } from "react";
import "./Home.css";
import bg from "../Assets/desktop-banner.jpg";
import Luxury from "../components/Luxury";
import Testimonials from "../components/Testimonials";
import Developer from "../components/Developer";
import logo from "../Assets/suncity-logo.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProperties,
  clearMessages,
} from "../store/reducer/propertyReducer";
import { Link } from "react-router-dom";

const cities = [
  "All",
  "Gurgaon",
  "Delhi",
  "Noida",
  "Bangalore",
  "Himachal Pradesh",
  "Pune",
  "Goa",
  "Mumbai",
];

const developers = [
  { name: "Risland", city: "Gurgaon", image: logo },
  { name: "Raheja", city: "Delhi", image: "link-to-raheja-image.jpg" },
  { name: "DLF", city: "Delhi", image: "link-to-dlf-image.jpg" },
  {
    name: "Godrej Properties",
    city: "Mumbai",
    image: "link-to-godrej-image.jpg",
  },
  { name: "Bhutani Infra", city: "Noida", image: "link-to-bhutani-image.jpg" },
  { name: "Acropolis", city: "Noida", image: "link-to-acropolis-image.jpg" },
  { name: "Purple", city: "Noida", image: "link-to-purple-image.jpg" },
  { name: "Tata Housing", city: "Noida", image: "link-to-tata-image.jpg" },
  { name: "Kalpa-Taru", city: "Noida", image: "link-to-kalpa-taru-image.jpg" },
  { name: "Paras Buildtech", city: "Noida", image: "link-to-paras-image.jpg" },
  {
    name: "Laureate Buildwell",
    city: "Noida",
    image: "link-to-laureate-image.jpg",
  },
  { name: "Gulshan", city: "Noida", image: "link-to-gulshan-image.jpg" },
];
const DeveloperPage = () => {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState("All");
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
  // console.log("home", allProperty);

  const filteredDevelopers =
    selectedCity === "All"
      ? allProperty
      : allProperty.filter((developer) => developer.city === selectedCity);

  console.log("filteredDevelopers", filteredDevelopers);

  return (
    <div>
      <Navbar />
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
                  selectedCity === city
                    ? "border-orange-500"
                    : "border-transparent"
                } hover:border-orange-500`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-5 gap-3 justify-self-center w-[95%] my-10">
            {filteredDevelopers.map((d, i) => (
              <Link to={`/developerDetail?city=${d.city}`} key={i}>
                {d.aboutdevelor && d.aboutdevelor.length > 0 && (
                  <div>
                    {d.aboutdevelor.map((data, j) => (
                      <div
                        key={j}
                        className="my-2 border w-full flex justify-center py-5"
                      >
                        <img
                          src={data.image}
                          alt="Developer logo"
                          className="h-[70px] w-[150px] object-cover "
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
        <Luxury />
        <Testimonials />
        <Developer allProperty={allProperty} />
      </div>
      <Footer />
    </div>
  );
};

export default DeveloperPage;

import React, { useEffect, useState } from "react";
import bg from "../Assets/desktop-banner.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProperties,
  clearMessages,
} from "../store/reducer/propertyReducer";

const properties = [
  {
    title: "Ambience Caitriona",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Caitriona",
    status: "Ready To Move",
    location: "Sector 24, DLF Phase 3, Gurgaon",
    type: "Residential",
    bhk: "4 & 5 BHK",
    price: "14 Cr* Onwards",
    area: "6700 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Creacions",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Creacions",
    status: "Ready To Move",
    location: "Sector 22, Gurgaon",
    type: "Residential",
    bhk: "2, 3, 4 & 5 BHK",
    price: "2.10 Cr* Onwards",
    area: "1380 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Tiverton",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Tiverton",
    status: "Ready To Move",
    location: "Sector 50, Noida",
    type: "Residential",
    bhk: "3 & 4 BHK",
    price: "3.15 Cr* Onwards",
    area: "2548 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Tiverton",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Tiverton",
    status: "Ready To Move",
    location: "Sector 50, Noida",
    type: "Residential",
    bhk: "3 & 4 BHK",
    price: "3.15 Cr* Onwards",
    area: "2548 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Tiverton",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Tiverton",
    status: "Ready To Move",
    location: "Sector 50, Noida",
    type: "Residential",
    bhk: "3 & 4 BHK",
    price: "3.15 Cr* Onwards",
    area: "2548 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Tiverton",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Tiverton",
    status: "Ready To Move",
    location: "Sector 50, Noida",
    type: "Residential",
    bhk: "3 & 4 BHK",
    price: "3.15 Cr* Onwards",
    area: "2548 Sq. Ft.* Onwards",
  },
];

const Commercial = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.property);

  const [allProperty, setAllProperty] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const service = searchParams.get("service");

  const filteredProperties = properties.filter(
    (property) => property.service === service
  );

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    setAllProperty(properties);
  }, [properties]);
  console.log("home", allProperty);
  

  return (
    <div>
      <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          COMMERCIAL PROPERTIES FOR SALE
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-4">
        <div className="w-[80%] my-10 bg-yellow-100 shadow-2xl p-3">
          <p>
            A commercial property is a building or space that is used mainly for
            the purposes of conducting business or for the conduct of other
            commercial activities. There are many types of commercial real
            estate, including office buildings, retail outlets, warehouses,
            industrial buildings, and other types of commercial real estate.
            Commercial properties provide businesses with space to operate and
            generate revenue.
          </p>
          <p className="mt-5">
            There are a number of commercial properties available for sale in
            India listed below. It includes all new launch, pre launch, under
            construction, premium, under construction commercial property.
          </p>
        </div>
        {filteredProperties.map((property, index) => (
          <div
            key={index}
            className="w-full max-w-sm md:max-w-md lg:w-[25%] bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden relative"
          >
            <img
              className="w-full h-60 object-cover"
              src={property.images[0]}
              alt={property.name}
            />
            <div className="p-4">
              <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold mb-2">
                {property.launch}
              </span>
              <h2 className="text-lg font-bold mb-2">{property.name}</h2>
              <p className="text-muted-foreground text-sm mb-2">
                <i className="fas fa-map-marker-alt"></i> {property.location}
              </p>
              <p className="text-muted-foreground text-sm mb-2">
                <i className="fas fa-building"></i> {property.apartments}
              </p>
              <p className="text-muted-foreground text-sm mb-2">
                <i className="fas fa-bed"></i> {property.bhk}
              </p>
              <p className="text-muted-foreground text-sm mb-2">
                <i className="fas fa-rupee-sign"></i> {property.price} Onwards
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                <i className="fas fa-ruler-combined"></i> {property.area}
              </p>
              <div className="flex justify-between">
                <button className="bg-[#fead26] text-white px-4 py-2 rounded-lg">
                  Enquire Now
                </button>
                <Link to={`/propertyDetail?nameslug=${property.nameslug}`}>
                  <button className="hover:text-[#fead26] border border-[#fead26] bg-[#fead26] text-white hover:bg-transparent px-4 py-2 rounded-lg hover:bg-secondary/80">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Commercial;

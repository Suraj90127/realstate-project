import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./component.css";

const data = [
  {
    title: "Century Eden",
    location: "Yelahanka-Doddaballapura Road, Bangalore",
    price: "₹ 62 Lakh* Onwards",
    image: slider,
  },
  {
    title: "Krisumi Waterfall Residences",
    location: "Sector 36A, Gurgaon",
    price: "₹ 310 Cr* Onwards",
    image: slider,
  },
  {
    title: "Embassy Lake Terraces",
    location: "NH-7, Hebbal, Bangalore",
    price: "₹ 6.20 Cr* Onwards",
    image: slider,
  },
  {
    title: "Embassysss Lake Terraces",
    location: "NH-7, Hebbal, Bangalore",
    price: "₹ 22.20 Cr* Onwards",
    image: slider,
  },
  // Add more items as needed
];

const Projectslider = ({ allProperty }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="project-slider">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          FEATURED <span className="text-[#fead26]">PROJECTS</span>
        </h1>
        <div
          ref={containerRef}
          className="carousel scrollbar-hide  flex w-[95%] snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth"
        >
          {allProperty.map(
            (slide, index) =>
              slide.resourcetype === "FEATURED PROJECTS PROPERTIS" && (
                <div
                  key={index}
                  className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-cover bg-center md:w-[calc(33.33%-(32px/3))]"
                  style={{
                    backgroundImage: `url(${slide.images && slide.images[0]})`,
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                    <h3 className="text-xl font-bold">{slide.name}</h3>
                    <p className="text-sm">{slide.location}</p>
                    <p className="text-sm font-semibold">{slide.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projectslider;

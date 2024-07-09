import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../Assets/delhi-city-places-small.webp";
import img2 from "../Assets/goa-city-places-small.webp";
import img3 from "../Assets/noida-city-places-small.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./component.css";
import { Link, useNavigate } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Popularplace = ({ allProperty }) => {
  const [citis, setCitis] = useState();
  const navigate = useNavigate();

  const search = () => {
    navigate(`/products/search?city=${citis}`);
  };

  console.log("object", allProperty);
  return (
    <div className="bg-[#f8f8f8] slider">
      <div className="container mx-auto px-4 py-6 bg-[#f8f8f8]">
        <h1 className="text-4xl font-bold text-center mb-8">
          MOST POPULAR <span className="text-[#fead26]">PLACES</span>
        </h1>
        <Slider {...settings}>
          {allProperty.map((place, index) => (
            <Link
              to={`/project/search?city=${place.city}`}
              key={index}
              className="p-2"
            >
              <div
                className="relative h-full overflow-hidden rounded-lg shadow-lg"
                onClick={() => setCitis(place.city)}
              >
                <img
                  src={place.images[0]}
                  alt={place.name}
                  className="w-full h-full object-cover"
                  // onClick={search}
                />
                <div className="absolute bottom-0 left-0 right-0 text-white font-bold text-[20px] p-2 text-center">
                  <span>{place.qut}</span> <span> {place.city}</span>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Popularplace;

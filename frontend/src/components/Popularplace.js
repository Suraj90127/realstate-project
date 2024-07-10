import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Popularplace = ({ allProperty }) => {
  const [citis, setCitis] = React.useState();
  const navigate = useNavigate();

  const search = () => {
    navigate(`/project/search?city=${citis}`);
  };

  // Assuming allProperty contains an array of objects with 'image' and 'city' properties
  const topRowImages = allProperty.slice(0, 3);
  const bottomRowImages = allProperty.slice(3);

  return (
    <div className="bg-[#f8f8f8]">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          MOST POPULAR <span className="text-[#fead26]">PLACES</span>
        </h1>

        {/* Top Row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {topRowImages.map((place, index) => (
            <div key={index}>
              <img
                src={place.images}
                alt={place.city}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
                onClick={() => setCitis(place.city)}
              />
            </div>
          ))}
        </div>

        {/* Bottom Row Slider */}
        <Slider {...settings}>
          {bottomRowImages.map((place, index) => (
            <Link to={`/project/search?city=${place.city}`} key={index} className="p-2">
              <div className="relative">
                <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                  <div className="absolute bg-gradient-to-b from-[#ffffff00] to-[black] hover:bg-[#feaf26d7] h-full w-full"></div>
                  <img
                    src={place.images} 
                    alt={place.city}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-white font-bold sm:text-[18px] md:text-[20px] lg-text-[24px] p-2 text-center bg-opacity-50">
                    <span>{place.qut}</span> <span> {place.city}</span> {/* Assuming 'qut' is the property for 'quote' */}
                  </div>
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

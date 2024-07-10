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
      <div className="containe w-[90%] mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          MOST POPULAR <span className="text-[#fead26]">PLACES</span>
        </h1>

        {/* Top Row */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          {allProperty.map(
            (place, index) =>
              index < 3 && (
                <Link
                  to={`/project/search?city=${place.city}`}
                  key={index}
                  className={`relative ${
                    index === 0 ? "col-span-6" : "col-span-3"
                  }`}
                >
                  <img
                    className={`w-full h-[23rem] rounded-lg shadow-lg cursor-pointer text-white`}
                    src={place.images[0]}
                    alt={place.city}
                    onClick={() => setCitis(place.city)}
                  />
                  <div className="absolute bottom-10 left-[35%]  text-white">
                    <p className="text-xl font-semibold flex justify-center">
                      {place.city}
                    </p>
                    <p>
                      <span>{place.qut} + Property</span>{" "}
                    </p>
                  </div>
                </Link>
              )
          )}
        </div>

        {/* Bottom Row Slider */}
        <Slider {...settings}>
          {allProperty.map((place, index) => (
            <Link
              to={`/project/search?city=${place.city}`}
              key={index}
              className="rounded-lg"
            >
              <div className="relative">
                <div className="lg:h-[350px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                  <div className="absolute bg-gradient-to-b from-[#ffffff00] to-[black] hover:bg-[#feaf26d7] h-full w-full"></div>
                  <img
                    src={place.images[0]}
                    alt={place.city}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute bottom-10 left-[35%]  text-white">
                    <p className="text-xl font-semibold flex justify-center">
                      {place.city}
                    </p>
                    <p>
                      <span>{place.qut} + Property</span>{" "}
                    </p>
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

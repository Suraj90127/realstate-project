import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./component.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
      <div className="container w-[90%] mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          FEATURED <span className="text-[#fead26]">PROJECTS</span>
        </h1>
        <Slider {...settings}>
          {allProperty
            .filter(
              (service) =>
                service.resourcetype === "FEATURED PROJECTS PROPERTIS"
            )
            .slice(0, 5)
            .map((slide, index) => (
              <div
                key={index}
                className="slider-item h-[500px] w-[400px] rounded-lg"
              >
                <div
                  className="slider-item-image h-full w-full object-cover relative rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${slide.images[1]})`,
                    // Adjust height as needed
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="slider-item-content gap-1 absolute w-full bottom-0 p-5 text-white bg-[#00000096]">
                    <h3 className="text-2xl font-bold">{slide.name}</h3>
                    <p className="text-xl my-2">{slide.location}</p>
                    <p className="text-md font-semibold">{slide.price}</p>
                    <Link to={`/propertyDetail?nameslug=${slide.nameslug}`}>
                      <button className="bg-[#fead26] text-white px-6 py-3 my-2 rounded-[4px]">
                        View Detail
                      </button>
                    </Link>
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

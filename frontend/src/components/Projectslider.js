import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./component.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projectslider = ({ allProperty }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <Slider {...settings}>
          {allProperty.map((slide, index) => (
            <div key={index} className="slider-item h-[500px] w-[400px]">
              <div
                className="slider-item-image h-full w-full object-cover relative"
                style={{
                  backgroundImage: `url(${slide.images})`,
                   // Adjust height as needed
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="slider-item-content gap-1 absolute w-full bottom-0 p-5 text-white bg-[#00000096]">
                  <h3 className="text-2xl font-bold">{slide.title}</h3>
                  <p className="text-xl my-2">{slide.location}</p>
                  <p className="text-md font-semibold">{slide.price}</p>
                  <button className="bg-[#fead26] text-white px-6 py-3 my-2 rounded-[4px]">View Detail</button>
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

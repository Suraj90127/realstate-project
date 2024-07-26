import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import "./component.css";
import reviews from "../Assets/reviews.jpg";

const testimonials = [
  {
    text: "If you are looking to buy a property, youll find a better deal with Propzilla. Their extensive knowledge of the real estate sector, combined with their professionalism and helpfulness, ensures a great experience. Thank you for being supportive and responsive.",
    name: "Sharat Goyal",
    avatar: reviews,
  },
  {
    text: "Propzilla made my home-buying experience seamless and stress-free. Their team is incredibly knowledgeable and always available to answer any questions.",
    name: "Aman Verma",
    avatar: reviews,
  },
  {
    text: "I highly recommend Propzilla for anyone looking to buy or sell property. Their expertise and customer service are outstanding.",
    name: "Rohit Sharma",
    avatar: reviews,
  },
];
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div>
      <div className="relative flex justify-center w-[100%] mx-auto bg-[#eaeaea] text-card-foreground p-6 rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center sm:w-[100%] md:w-[70%] justify-between">
          <button
            onClick={() =>
              showSlide(
                (currentSlide - 1 + testimonials.length) % testimonials.length
              )
            }
            className="bg-[#fead26] text-primary-foreground p-2 text-white hover:bg-primary/80"
          >
            <FaArrowLeft />
          </button>
          <div className="flex flex-col items-center space-y-4 transition-transform duration-500 ease-in-out">
            <div className="text-primary text-4xl">
              <FaQuoteLeft />
            </div>
            <p className="text-muted-foreground text-lg text-center italic w-[80%]">
              {testimonials[currentSlide].text}
            </p>
            <div className="flex flex-col items-center space-x-4">
              <img
                alt="user-avatar"
                src={testimonials[currentSlide].avatar}
                className="rounded-full border-4 border-[#fead26] border-primary"
              />
              <div>
                <p className="font-semibold text-xl">
                  {testimonials[currentSlide].name}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => showSlide((currentSlide + 1) % testimonials.length)}
            className="bg-[#fead26] text-white text-primary-foreground p-2 hover:bg-primary/80"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

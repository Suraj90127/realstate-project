import React, { useRef, useState, useEffect } from 'react';
import slider from '../Assets/embassy-boulevard-featured.webp'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import './component.css'

const data = [
  {
    title: 'Century Eden',
    location: 'Yelahanka-Doddaballapura Road, Bangalore',
    price: '₹ 62 Lakh* Onwards',
    image: slider
  },
  {
    title: 'Krisumi Waterfall Residences',
    location: 'Sector 36A, Gurgaon',
    price: '₹ 310 Cr* Onwards',
    image: slider
  },
  {
    title: 'Embassy Lake Terraces',
    location: 'NH-7, Hebbal, Bangalore',
    price: '₹ 6.20 Cr* Onwards',
    image: slider
  },
  {
    title: 'Embassysss Lake Terraces',
    location: 'NH-7, Hebbal, Bangalore',
    price: '₹ 22.20 Cr* Onwards',
    image: slider
  },
  // Add more items as needed
];


const Projectslider = () => {
    const containerRef = useRef(null);
    const [centerSlideIndex, setCenterSlideIndex] = useState(0);
    const breakpoint = 768;
    const slidesPerPage = 3;
  
    const totalSlidesCount = data.length;
    let touchStartX = 0;
    let touchEndX = 0;
  
    const scrollBySlide = (amount) => {
      containerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    };
  
    const updateActiveDot = (centerSlideIndex) => {
      const isMobileView = containerRef.current.offsetWidth <= breakpoint;
      const dotsCount = isMobileView ? totalSlidesCount : totalSlidesCount - 2;
      const slidesCount = isMobileView ? 1 : dotsCount - slidesPerPage;
      const pageIndex = centerSlideIndex - slidesCount;
      if (pageIndex >= 0 && pageIndex < dotsCount) {
        setCenterSlideIndex(pageIndex);
      }
    };
  
    const getCenterSlideIndex = () => {
      const slideWidth = containerRef.current.children[0].offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;
      return Math.round((containerRef.current.scrollLeft + Math.floor(containerWidth / 2)) / slideWidth);
    };
  
    const handlePrevClick = () => {
      scrollBySlide(-containerRef.current.children[0].offsetWidth);
      updateActiveDot(getCenterSlideIndex() - 1);
    };
  
    const handleNextClick = () => {
      scrollBySlide(containerRef.current.children[0].offsetWidth);
      updateActiveDot(getCenterSlideIndex() + 1);
    };
  
    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
    };
  
    const handleTouchMove = (event) => {
      touchEndX = event.touches[0].clientX;
    };
  
    const handleTouchEnd = () => {
      let centerSlideIndex;
      const swipeThreshold = 50;
  
      if (touchStartX - touchEndX > swipeThreshold) {
        centerSlideIndex = getCenterSlideIndex() + 1;
      } else {
        centerSlideIndex = getCenterSlideIndex() - 1;
      }
  
      updateActiveDot(centerSlideIndex);
      touchStartX = 0;
      touchEndX = 0;
    };
  
    useEffect(() => {
      const container = containerRef.current;
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
      container.addEventListener('touchend', handleTouchEnd);
  
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }, []);
  return (
    <div className="slider">
       <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#eaeaea]">
       <h1 className="text-4xl font-bold text-center mb-8">
                    OUR <span className="text-[#fead26]">PROJECTS</span>
                  </h1>
      <div
        ref={containerRef}
        className="carousel scrollbar-hide  flex w-[80%] snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth"
      >
        {data.map((slide, index) => (
          <div
            key={index}
            className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-cover bg-center md:w-[calc(33.33%-(32px/3))]"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h3 className="text-xl font-bold">{slide.title}</h3>
              <p className="text-sm">{slide.location}</p>
              <p className="text-sm font-semibold">{slide.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination my-4 flex gap-2">
        {data.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 ease-out duration-300 rounded-full bg-black ${index === centerSlideIndex ? 'w-8' : ''} ${index >= slidesPerPage ? 'hidden md:block' : ''}`}
          ></span>
        ))}
      </div>

      <div className='flex gap-5'>
        <button onClick={handlePrevClick} className="prev-btn bg-[#fead26] text-white p-2"><FaAngleLeft /></button>
        <button onClick={handleNextClick} className="next-btn bg-[#fead26] text-white p-2"><FaAngleRight /></button>
      </div>
    </div>
    </div>
  )
}

export default Projectslider

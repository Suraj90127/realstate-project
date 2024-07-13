import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import banner from "../Assets/AboutBanner.jpg";
import Whychooseus from "../components/Whychooseus";
import propzilla from "../Assets/propzilla-office.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import awa1 from "../Assets/awa1.jpg";
import awa2 from "../Assets/awa2.jpg";
import awa3 from "../Assets/awa3.jpg";
import awa4 from "../Assets/awa4.jpg";
import Luxury from "../components/Luxury";
import Testimonials from "../components/Testimonials";
import Developer from "../components/Developer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const AboutusPage = () => {
  const { properties, successMessage, errorMessage, loading } = useSelector(
    (state) => state.property
  );

  console.log("home2", properties);
  const [allProperty, setAllProperty] = useState([]);

  useEffect(() => {
    setAllProperty(properties);
  }, [properties]);
  console.log("home", allProperty);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1600, // xl
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991, // md-lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // sm-md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-[#f8f8f8]">
        <Meta title="About-us" />
        <div>
          <div className="main w-full h-{30rem}">
            <div className="top-banner relative">
              <div className="banner brightness-50">
                <img className="w-full h-{10rem}" src={banner} alt="" />
              </div>
              <div className="absolute bottom-10 left-10 text-white text-xl">
                <BreadCrumb title="About Us" />
              </div>
            </div>
          </div>

          <div className="welcome-section bg-[#fdfcfc]">
            <div className="container-secti w-[95%] mx-auto py-16">
              <div className="grid grid-cols-12 gap-[5%]">
                <div className="lg:col-span-7 sm:col-span-12">
                  <div className="element-container">
                    <h6 className="text-3xl font-semibold mb-2 roboto-regular">
                      Overview
                    </h6>

                    <p className="  mt-6 text-justify text-[17px] font-[400] roboto-regular text-gray-600">
                      PROPZILLA is a real estate advisory firm that provides
                      honest information and services to make the property
                      buying process easier for buyers. We help property buyers
                      end to end, starting from property search till purchase.
                      Understanding the client’s needs and accordingly help
                      buyers with the ideal investment opportunity. We are
                      driven by the fundamental values of customer satisfaction,
                      credibility and professionalism. We help buyers and
                      sellers to buy, rent and sell properties in India with
                      major focus on Gurgaon, Delhi and Bangalore.
                    </p>
                    <p className="text-justify mt-5 text-[17px] font-[400] roboto-regular text-gray-600">
                      We at Propzilla, are committed to fulfill the needs of the
                      customers and provide them a platform that offers the
                      maximum benefits. We believe in serving with honesty and
                      treating our customers with respect and fairness.
                      Propzilla Infratech’s motto is to “Bridging Dreams To
                      Reality” - offering informative and accurate services in
                      the real estate industry. With unparalleled services the
                      company continuously achieving new milestones and works to
                      be the first priority for investors.
                    </p>
                  </div>
                </div>
                {/* <!-- ... --> */}
                <div className="lg:col-span-5 sm:col-span-12 sm:mt-4">
                  <div className="element-container lg:w-full lg:h-[100%] lg:overflow-hidden">
                    <div className="img-box sm:mb-20 lg:mb-0">
                      <img src={propzilla} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* counter components  */}
            </div>
            <div>
              <Whychooseus />
            </div>
            {/* our missen section */}
            <div className="bg-[#fbf9f9]">
              <div className="w-[95%] mx-auto py-10">
                <div className="grid grid-cols-12 gap-6">
                  <div className="md:col-span-6 sm:col-span-12">
                    <div className="missen-div">
                      <h3 className="text-4xl font-semibold text-[#fdad26]">
                        Our Mission
                      </h3>
                      <p className="mt-5 text-[17px] font-[500]">
                        Our mission is to maximize client satisfaction by
                        offering them priority service. We consistently strive
                        to deliver quality service and are always willing to go
                        extra mile for customers. With the purpose to become
                        India’s most appreciated real estate company, we work
                        with dedication and honesty
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-6 sm:col-span-12">
                    <div className="missen-div">
                      <h3 className="text-4xl font-semibold text-[#fdad26]">
                        Our Vision
                      </h3>
                      <p className="mt-5 text-[17px] font-[500]">
                        Our vision is to become a preferred choice for people
                        who want to buy or sell property. We believe in making
                        customers for life. We work together to achieve more and
                        support one another to fulfill common goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* slider */}
            <div className="w-[95%] mx-auto">
              <div className="heading text-center text-4xl font-bold">
                <h3 className="">
                  <span>AWARDS</span> <span>&</span>{" "}
                  <span className="text-[#fead26]">RECOGNITION</span>
                </h3>
              </div>
              <div className="slider my-10">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div className="slick-slide">
                      <img src={awa1} alt="Slide 1" />
                      <div className="bg-black text-white">
                        <p className="py-3 px-20">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          hsyd hss
                        </p>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <img src={awa2} alt="Slide 2" />
                      <div className="bg-black text-white">
                        <p className="py-3 px-20">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          hsjs nsub
                        </p>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <img src={awa3} alt="Slide 3" />
                      <div className="bg-black text-white">
                        <p className="py-3 px-20">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          jhhssg hdy
                        </p>
                      </div>
                    </div>
                    <div className="slick-slide">
                      <img src={awa4} alt="Slide 4" />
                      <div className="bg-black text-white">
                        <p className="py-3 px-20">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          jhgty
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div>
              <Luxury />
            </div>
            <div>
              <Testimonials />
            </div>
            <div>
              <Developer allProperty={allProperty} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutusPage;

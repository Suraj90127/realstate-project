import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../Assets/6703c1aa45e86001fdcf1ff6d3563e63.jpg";
import Luxury from "../components/Luxury";
import Developer from "../components/Developer";
import Testimonials from "../components/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  fetchProperties,
  clearMessages,
} from "../store/reducer/propertyReducer";

const DeveloperDetail = () => {
  const [allProperty, setAllProperty] = useState([]);

  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.property);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get("city");

  const filteredProperties = allProperty.filter(
    (property) => property.city === city
  );

  console.log("developer detailes", filteredProperties);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    setAllProperty(properties);
  }, [properties]);

  console.log("aaaaaaa", allProperty);

  return (
    <div>
      <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-[2rem] font-bold text-center mb-8 text-white">
          PROJECTS BY AMBIENCE GROUP
        </h1>
      </div>
      <div className="flex justify-center bg-gray-100">
        <div className="max-w-7xl mt-5 p-4">
          {filteredProperties.map(
            (item, i) =>
              i < 1 && (
                <div className="bg-white text-card-foreground p-5 rounded-lg shadow-md">
                  {item.aboutdevelor.map((d, i) => (
                    <div>
                      <div className="flex justify-around items-center mb-4">
                        <div className="text-center flex gap-2">
                          <span className="text-3xl font-bold text-[#fead26]">
                            {d.exp}+
                          </span>
                          <p className="text-[20px] font-bold mt-1">
                            Years of Experience
                          </p>
                        </div>
                        <div className="text-center flex gap-2">
                          <span className="text-3xl font-bold text-[#fead26]">
                            {d.project}+
                          </span>
                          <p className="text-[20px] font-bold mt-2">
                            Total Projects
                          </p>
                        </div>
                        <div className="text-center flex gap-2">
                          <span className="text-3xl font-bold text-[#fead26]">
                            {d.client}
                          </span>
                          <p className="text-[20px] font-bold mt-2">
                            Total Cities
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5 mt-10">
                        <div className="border-[1px] border-black p-3">
                          <img
                            src={d.image}
                            alt="Company Logo"
                            className="mr-4 h-[70px] w-[150px]"
                          />
                        </div>
                        <div className="w-[70%] text-base font-[500] ">
                          <p>{d.about}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
          )}
          {/*  */}
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {filteredProperties.map((item, i) => (
              <div
                key={i}
                className="w-[31%] bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden relative"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.images[0]}
                  alt="Ambience Caitriona"
                />
                <div className="p-4">
                  <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold mb-2">
                    Ready To Move
                  </span>
                  <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                  <p className="text-muted-foreground text-sm mb-2">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{item.location} </span> <span>{item.city}</span>
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    <i className="fas fa-building"></i> {item.launch}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    <i className="fas fa-bed"></i> {item.bhk} BHK
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    <i className="fas fa-rupee-sign"></i> {item.price}* Onwards
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    <i className="fas fa-ruler-combined"></i> {item.area} Sq.
                    Ft.* Onwards
                  </p>
                  <div className="flex justify-between">
                    <button className="bg-[#fead26] text-white px-2 py-2 rounded-lg ">
                      Enquire Now
                    </button>
                    <Link to={`/propertyDetail?nameslug=${item.nameslug}`}>
                      <button className="hover:text-[#fead26] border border-[#fead26] bg-[#fead26] text-white hover:bg-transparent px-4 py-2 rounded-lg hover:bg-secondary/80">
                        More Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Luxury />
      <Testimonials />
      <Developer allProperty={allProperty} />
      <Footer />
    </div>
  );
};

export default DeveloperDetail;

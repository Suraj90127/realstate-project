import {useEffect} from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import banner from "../Assets/project-banner.jpg";
import bg from "../Assets/desktop-banner.jpg";
import "./Home.css";
import img1 from "../Assets/project1.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Meta title="About-us" />
      <div>
        <div className="main w-full h-{30rem}">
          <div className="top-banner">
            <div className="developer-header">
              <img src={bg} alt="" />
              <h1 className="text-4xl font-bold text-center mb-0 text-white">
                Property In India
              </h1>
            </div>
            <div className="absolute bottom-10 left-10 text-white text-xl">
              <BreadCrumb title="Property In India" />
            </div>
          </div>
        </div>
        {/* property section */}

        <div>
          <div className="w-[95%] mx-auto">
            <div className="grid grid-cols-12 border-2">
              <div className="col-span-4">
                <img src={img1} alt="" />
              </div>
              <div className="col-span-8"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;

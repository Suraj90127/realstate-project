import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";
import bg from "../Assets/desktop-banner.jpg";
import header from "../Assets/modern-balcony-single-blog.jpg"
import img1 from "../Assets/cosy-decor-balcony.jpg"
import img2 from "../Assets/minimalist-theme-balcony.jpg"
import img3 from "../Assets/floral-aesthetics-balcony.jpg"

import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";

const sections = [
  {
    id: 1,
    title: "Floral Aesthetics",
    description:
      "Incorporating floral aesthetics into your balcony decor helps to add freshness and a splash of colours to your space. You can go for exotic flower plants like roses, lavender, marigolds etc. Invest in quirky planter designs to add a touch of nature to make your balcony inviting.",
    imageUrl: img1,
    imageAlt: "A beautifully decorated balcony with flowers and plants",
  },
  // Add more sections here
  {
    id: 2,
    title: "Cozy Seating",
    description:
      "Add cozy seating options like a swing, a small sofa, or comfortable chairs to make your balcony a relaxing spot. Include some cushions and throws for added comfort.",
    imageUrl: img2,
    imageAlt: "A balcony with cozy seating arrangements",
  },
  {
    id: 3,
    title: "Lighting",
    description:
      "Proper lighting can transform your balcony into a perfect evening retreat. Use fairy lights, lanterns, or LED candles to create a warm and inviting ambiance.",
    imageUrl: img3,
    imageAlt: "A balcony with beautiful lighting",
  },
  // Add more sections as needed
];

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contect",
        formData
      );
      console.log("Form data submitted successfully:", response.data);
      // Optionally clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Blog & News
        </h1>

        <BreadCrumb title="blog" title2={"/ Projects"} url={"/project"} />
      </div>
      <div className="flex w-[90%] mx-auto justify-center bg-[#f8f8f8]">
        <div className="h-screen mt-5">
          <div className="max-w-6xl mx-auto h-full overflow-auto flex-1 no-scrollbar p-4 bg-card text-card-foreground rounded-lg shadow-md">
            <img
              className="w-full h-64 object-cover rounded-t-lg"
              src={header}
              alt="Modern balcony with plants and furniture"
            />
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-2">
                15 Modern Balcony Decoration Ideas for Your Homes in India
              </h1>
              <div className="flex items-center mb-4">
                <span className="mr-2">0</span>
                <button className="bg-[#fead26] text-white hover:bg-secondary/80 px-2 py-1 rounded flex items-center">
                  Share
                </button>
                <div className="flex ml-4 space-x-2">
                  <img
                    undefinedhidden="true"
                    alt="facebook-icon"
                    src="https://openui.fly.dev/openui/24x24.svg?text=📘"
                  />
                  <img
                    undefinedhidden="true"
                    alt="twitter-icon"
                    src="https://openui.fly.dev/openui/24x24.svg?text=🐦"
                  />
                  <img
                    undefinedhidden="true"
                    alt="linkedin-icon"
                    src="https://openui.fly.dev/openui/24x24.svg?text=🔗"
                  />
                  <img
                    undefinedhidden="true"
                    alt="email-icon"
                    src="https://openui.fly.dev/openui/24x24.svg?text=✉"
                  />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Traditionally balconies are an extension of our homes. However,
                with right design and decor pieces, they can be transformed into
                a beautiful and functional outdoor haven. Modern balcony decor
                ideas are perfect to transform a small balcony into an inviting
                and stylish space.
              </p>
              <p className="text-muted-foreground">
                When designing your balcony consider the overall space and the
                amount of natural lighting it receives. Minimalist and small
                furniture works perfectly for balconies that are small. Same
                way, you can introduce a mini garden to your balcony if it
                receives an ample amount of natural to enhance the overall
                aesthetic appeal of your balcony. Built-in seating areas,
                aesthetic furniture, and recessed lighting are some of the cool
                ways to create a personalised balcony space.
              </p>
            </div>
            <div>
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="p-4 bg-card rounded-lg dark:bg-card dark:bg-opacity-80 mb-4"
                >
                  <h2 className="text-xl font-bold text-primary">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {section.description}
                  </p>
                  <img
                    className="mt-4 w-full rounded-lg"
                    src={section.imageUrl}
                    alt={section.imageAlt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl  p-4 sm:hidden lg:block">
          <div className=" p-4 bg-white h-[600px] rounded-lg shadow-md mt-4">
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold text-[#fead26]">
                Get in touch with us!
              </h3>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex mb-4">
                <select className="w-1/3 p-2 border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>India (+91)</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className="w-2/3 p-2 border border-border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full p-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <div className="mb-4 flex items-start">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-muted-foreground">
                  By submitting this form I agree to{" "}
                  <a href="#" className="text-primary underline">
                    Terms of Use
                  </a>
                </label>
              </div>
              <button className="w-full bg-[#fead26] text-white py-2 rounded-md">
                Request a Call Back
              </button>
            </form>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="flex space-x-4 text-[30px] text-[#303030]">
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  <FaFacebookSquare />
                </a>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  <FaYoutube />
                </a>
                <a href="#" className="hover:underline hover:text-[#fead26]">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

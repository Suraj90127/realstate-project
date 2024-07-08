<<<<<<< HEAD
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaInstagramSquare } from "react-icons/fa";
>>>>>>> 1fe5676cbd0cdcff9b8f7a54d389a70c3a0ac274

import bg from "../Assets/desktop-banner.jpg";

const sections = [
  {
    id: 1,
    title: "Floral Aesthetics",
    description: "Incorporating floral aesthetics into your balcony decor helps to add freshness and a splash of colours to your space. You can go for exotic flower plants like roses, lavender, marigolds etc. Invest in quirky planter designs to add a touch of nature to make your balcony inviting.",
    imageUrl: "https://placehold.co/800x400",
    imageAlt: "A beautifully decorated balcony with flowers and plants"
  },
  // Add more sections here
  {
    id: 2,
    title: "Cozy Seating",
    description: "Add cozy seating options like a swing, a small sofa, or comfortable chairs to make your balcony a relaxing spot. Include some cushions and throws for added comfort.",
    imageUrl: "https://placehold.co/800x400",
    imageAlt: "A balcony with cozy seating arrangements"
  },
  {
    id: 3,
    title: "Lighting",
    description: "Proper lighting can transform your balcony into a perfect evening retreat. Use fairy lights, lanterns, or LED candles to create a warm and inviting ambiance.",
    imageUrl: "https://placehold.co/800x400",
    imageAlt: "A balcony with beautiful lighting"
  },
  // Add more sections as needed
];
const BlogDetail = () => {

  return (
<<<<<<< HEAD
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <span className="text-muted-foreground mb-2">{data.date}</span>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <p>{data.content}</p>
=======
    <div className="">
      <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Blog & News
        </h1>
      </div>
      <div className="flex justify-center bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto p-4 bg-card text-card-foreground rounded-lg shadow-md">
                  <img className="w-full h-64 object-cover rounded-t-lg" src="https://placehold.co/800x400" alt="Modern balcony with plants and furniture" />
                  <div className="p-4">
                    <h1 className="text-2xl font-bold mb-2">15 Modern Balcony Decoration Ideas for Your Homes in India</h1>
                    <div className="flex items-center mb-4">
                      <span className="mr-2">0</span>
                      <button className="bg-[#fead26] text-white hover:bg-secondary/80 px-2 py-1 rounded flex items-center">
                        Share
                      </button>
                      <div className="flex ml-4 space-x-2">
                        <img undefinedhidden="true" alt="facebook-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📘" />
                        <img undefinedhidden="true" alt="twitter-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🐦" />
                        <img undefinedhidden="true" alt="linkedin-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔗" />
                        <img undefinedhidden="true" alt="email-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✉" />
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Traditionally balconies are an extension of our homes. However, with right design and decor pieces, they can be transformed into a beautiful and functional outdoor haven. Modern balcony decor ideas are perfect to transform a small balcony into an inviting and stylish space.
                    </p>
                    <p className="text-muted-foreground">
                      When designing your balcony consider the overall space and the amount of natural lighting it receives. Minimalist and small furniture works perfectly for balconies that are small. Same way, you can introduce a mini garden to your balcony if it receives an ample amount of natural to enhance the overall aesthetic appeal of your balcony. Built-in seating areas, aesthetic furniture, and recessed lighting are some of the cool ways to create a personalised balcony space.
                    </p>
                  </div>
                  <div>
      {sections.map((section) => (
        <div key={section.id} className="p-4 bg-card rounded-lg dark:bg-card dark:bg-opacity-80 mb-4">
          <h2 className="text-xl font-bold text-primary">{section.title}</h2>
          <p className="text-muted-foreground mt-2">{section.description}</p>
          <img className="mt-4 w-full rounded-lg" src={section.imageUrl} alt={section.imageAlt} />
        </div>
      ))}
    </div>
                </div>
>>>>>>> 1fe5676cbd0cdcff9b8f7a54d389a70c3a0ac274
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

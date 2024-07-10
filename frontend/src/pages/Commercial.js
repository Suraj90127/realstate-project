import React from "react";
import bg from "../Assets/desktop-banner.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const properties = [
  {
    title: "Ambience Caitriona",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Caitriona",
    status: "Ready To Move",
    location: "Sector 24, DLF Phase 3, Gurgaon",
    type: "Residential",
    bhk: "4 & 5 BHK",
    price: "14 Cr* Onwards",
    area: "6700 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Creacions",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Creacions",
    status: "Ready To Move",
    location: "Sector 22, Gurgaon",
    type: "Residential",
    bhk: "2, 3, 4 & 5 BHK",
    price: "2.10 Cr* Onwards",
    area: "1380 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Tiverton",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Tiverton",
    status: "Ready To Move",
    location: "Sector 50, Noida",
    type: "Residential",
    bhk: "3 & 4 BHK",
    price: "3.15 Cr* Onwards",
    area: "2548 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Tiverton",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Tiverton",
    status: "Ready To Move",
    location: "Sector 50, Noida",
    type: "Residential",
    bhk: "3 & 4 BHK",
    price: "3.15 Cr* Onwards",
    area: "2548 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Tiverton",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Tiverton",
    status: "Ready To Move",
    location: "Sector 50, Noida",
    type: "Residential",
    bhk: "3 & 4 BHK",
    price: "3.15 Cr* Onwards",
    area: "2548 Sq. Ft.* Onwards",
  },
  {
    title: "Ambience Tiverton",
    imgSrc: "https://placehold.co/400x300",
    altText: "Ambience Tiverton",
    status: "Ready To Move",
    location: "Sector 50, Noida",
    type: "Residential",
    bhk: "3 & 4 BHK",
    price: "3.15 Cr* Onwards",
    area: "2548 Sq. Ft.* Onwards",
  },
];
const Commercial = () => {
  return (
    <div>
      <Navbar />
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          COMMERCIAL PROPERTIES FOR SALE
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-4">
        <div className="w-[80%] border-2 p-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at
            eligendi ex debitis, tempore vero sint molestias voluptates numquam.
            Ipsam voluptatum assumenda, non voluptas illo ipsa illum excepturi
            quidem obcaecati porro neque beatae hic reiciendis velit accusantium
            at voluptatibus ab? Porro unde a dolorum? Dolore deleniti quibusdam
            iste quo fugiat cupiditate. Incidunt, quae sunt dolores laborum
            porro accusamus nostrum ratione nulla quaerat! Dignissimos, ullam?
            Deserunt iure impedit totam sapiente nesciunt. Eveniet perspiciatis
            doloremque vitae ipsa quae sed nihil, veritatis magnam laboriosam
            totam obcaecati earum impedit omnis doloribus nobis cupiditate unde
            exercitationem? Accusantium, recusandae. Nisi, unde reiciendis quia
            explicabo totam facere.
          </p>
        </div>
        {properties.map((property, index) => (
          <div
            key={index}
            className="w-full max-w-sm md:max-w-md lg:w-[25%] bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden relative"
          >
            <img
              className="w-full h-60 object-cover"
              src={property.imgSrc}
              alt={property.altText}
            />
            <div className="p-4">
              <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold mb-2">
                {property.status}
              </span>
              <h2 className="text-lg font-bold mb-2">{property.title}</h2>
              <p className="text-muted-foreground text-sm mb-2">
                <i className="fas fa-map-marker-alt"></i> {property.location}
              </p>
              <p className="text-muted-foreground text-sm mb-2">
                <i className="fas fa-building"></i> {property.type}
              </p>
              <p className="text-muted-foreground text-sm mb-2">
                <i className="fas fa-bed"></i> {property.bhk}
              </p>
              <p className="text-muted-foreground text-sm mb-2">
                <i className="fas fa-rupee-sign"></i> {property.price}
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                <i className="fas fa-ruler-combined"></i> {property.area}
              </p>
              <div className="flex justify-between">
                <button className="bg-[#fead26] text-white px-4 py-2 rounded-lg">
                  Enquire Now
                </button>
                <button className="text-[#fead26] border border-[#fead26] bg-white px-4 py-2 rounded-lg hover:bg-secondary/80">
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Commercial;

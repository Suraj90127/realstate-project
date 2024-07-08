import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bg from "../Assets/6703c1aa45e86001fdcf1ff6d3563e63.jpg";
import Luxury from '../components/Luxury';
import Developer from '../components/Developer';
import Testimonials from '../components/Testimonials';


const DeveloperDetail = () => {
  return (
    <div>
        <Navbar/>
      <div className="developer-header">
        <img src={bg} alt="" />
        <h1 className="text-[2rem] font-bold text-center mb-8 text-white">
        PROJECTS BY AMBIENCE GROUP
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="max-w-6xl mt-5 p-4">
      <div className="bg-white text-card-foreground p-6 rounded-lg shadow-md">
                  <div className="flex justify-around items-center mb-4">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-[#fead26]">27+</span>
                      <p className="text-[20px] font-bold">Years of Experience</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-[#fead26]">52+</span>
                      <p className="text-[20px] font-bold">Total Projects</p>
                    </div>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-[#fead26]">10</span>
                      <p className="text-[20px] font-bold">Total Cities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img src="https://placehold.co/100x100" alt="Company Logo" className="mr-4" />
                    <div>
                      <p>Ambience Group is a renowned real estate development company primarily focused on premium projects in the National Capital Region (NCR) of India. With its in-house construction and development capabilities, the company has established a strong presence in the industry.</p>
                      <p className="mt-2">Since its establishment in 1986, Ambience Group has stood out from its competitors. It initially ventured into the development of premium residential apartments in South Delhi and later expanded its portfolio to include large-scale real estate projects. One of its notable achievements was the acquisition of a landmark property on the Delhi-Gurgaon border, NH-8, marking the beginning of the development of the signature integrated township called 'Ambience Island'. This township features residential, commercial, retail, hotel, 9-hole pitch & putt golf greens, and community facilities.</p>
                      <p className="mt-2">Ambience Group has been at the forefront of introducing new trends in the market. The company has an extensive range of ongoing and planned projects strategically located in Delhi NCR, Sonepat, Panipat, Udaipur, and Visakhapatnam. These projects encompass a mix of townships, residential complexes, commercial spaces, special economic zones (SEZ), hospitality ventures, and educational facilities. Ambience Group continues to shape the real estate landscape with its visionary approach and commitment to delivering exceptional developments.</p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-wrap justify-center gap-6 p-4">
                  
                  <div className="max-w-xs bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden relative">
                    <img className="w-full h-48 object-cover" src="https://placehold.co/400x300" alt="Ambience Caitriona" />
                    <div className="p-4">
                      <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold mb-2">Ready To Move</span>
                      <h2 className="text-lg font-bold mb-2">Ambience Caitriona</h2>
                      <p className="text-muted-foreground text-sm mb-2"><i className="fas fa-map-marker-alt"></i> Sector 24, DLF Phase 3, Gurgaon</p>
                      <p className="text-muted-foreground text-sm mb-2"><i className="fas fa-building"></i> Residential</p>
                      <p className="text-muted-foreground text-sm mb-2"><i className="fas fa-bed"></i> 4 & 5 BHK</p>
                      <p className="text-muted-foreground text-sm mb-2"><i className="fas fa-rupee-sign"></i> 14 Cr* Onwards</p>
                      <p className="text-muted-foreground text-sm mb-4"><i className="fas faRuler-combined"></i> 6700 Sq. Ft.* Onwards</p>
                      <div className="flex justify-between">
                        <button className="bg-[#fead26] text-white px-2 py-2 rounded-lg ">Enquire Now</button>
                        <button className="text-[#fead26] border border-[#fead26] bg-white px-2 py-2 rounded-lg hover:bg-secondary/80">More Details</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="max-w-xs bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover" src="https://placehold.co/400x300" alt="Ambience Creacions" />
                    <div className="p-4">
                      <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold mb-2">Ready To Move</span>
                      <h2 className="text-lg font-bold mb-2">Ambience Creacions</h2>
                      <p className="text-muted-foreground text-sm mb-2"><i className="fas fa-map-marker-alt"></i> Sector 22, Gurgaon</p>
                      <p className="text-muted-foreground text-sm mb-2"><i className="fas fa-building"></i> Residential</p>
                      <p className="text-muted-foreground text-sm mb-2"><i className="fas fa-bed"></i> 2, 3, 4 & 5 BHK</p>
                      <p className="text-muted-foreground text-sm mb-2"><i className="fas fa-rupee-sign"></i> 2.10 Cr* Onwards</p>
                      <p className="text-muted-foreground text-sm mb-4"><i className="fas faRuler-combined"></i> 1380 Sq. Ft.* Onwards</p>
                      <div className="flex justify-between">
                        <button className="bg-[#fead26] text-white px-2 py-2 rounded-lg ">Enquire Now</button>
                        <button className="text-[#fead26] border border-[#fead26] bg-white px-2 py-2 rounded-lg hover:bg-secondary/80">More Details</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="max-w-xs bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover" src="https://placehold.co/400x300" alt="Ambience Tiverton" />
                    <div className="p-4">
                      <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold mb-2">Ready To Move</span>
                      <h2 className="text-lg font-bold mb-2">Ambience Tiverton</h2>
                      <p className="text-muted-foreground text-sm mb-2"> Sector 50, Noida</p>
                      <p className="text-muted-foreground text-sm mb-2">Residential</p>
                      <p className="text-muted-foreground text-sm mb-2">3 & 4 BHK</p>
                      <p className="text-muted-foreground text-sm mb-2">3.15 Cr* Onwards</p>
                      <p className="text-muted-foreground text-sm mb-4">2548 Sq. Ft.* Onwards</p>
                      <div className="flex justify-between">
                        <button className="bg-[#fead26] text-white px-2 py-2 rounded-lg ">Enquire Now</button>
                        <button className="text-[#fead26] border border-[#fead26] bg-white px-2 py-2 rounded-lg hover:bg-secondary/80">More Details</button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <Luxury/>
                <Testimonials/>
                <Developer/>
      <Footer/>
    </div>
  )
}

export default DeveloperDetail

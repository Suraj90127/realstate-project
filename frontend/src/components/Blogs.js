import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import './component.css'

const Blogs = () => {
  return (
    <div className='blog'>
      <div className="bg-[#f8f8f8] p-8">
                  <h1 className="text-4xl font-bold text-center mb-8">
                    BLOGS & <span className="text-[#fead26]">NEWS</span>
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="bg-card p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                      <img src="https://placehold.co/600x400" alt="Modern Balcony Decoration Ideas" className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-muted-foreground">13 May, 2023</span>
                          <div className="flex items-center space-x-2">
                          <a href="#" className="text-[20px] text-[blue] hover:text-[#fead26]"><FaFacebookSquare /></a>
                <a href="#" className="text-[20px] text-[blue] hover:text-[#fead26]"><FaLinkedin /></a>
                <a href="#" className="text-[20px] text-red-500 hover:text-[#fead26]"><FaYoutube /></a>
                <a href="#" className="text-[20px] text-[orange] hover:text-[#fead26]"><FaInstagramSquare /></a>
                          </div>
                        </div>
                        <div className="flex justify-left gap-4 items-center">
                          <span className="text-muted-foreground">20</span>
                          <button className="bg-[#fead26] text-white px-2 py-1 rounded hover:bg-secondary/80 transition-colors duration-300">Share</button>
                          
                        </div>
                        <h2 className="text-xl font-semibold mb-2">15 Modern Balcony Decoration Ideas for Your Home in India</h2>
                        <p className="text-muted-foreground mb-4">Discover the latest trends in balcony decoration and get inspired to transform your space.</p>
                        <a href="#" className="text-primary hover:underline text-[#fead26]">READ FULL STORY</a>
                      </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                      <img src="https://placehold.co/600x400" alt="Real Estate Trends Post Covid" className="w-full h-48 object-cover rounded-t-lg"/>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-muted-foreground">14 Sep, 2022</span>
                          <div className="flex items-center space-x-2">
                          <a href="#" className="text-[20px] text-[blue] hover:text-[#fead26]"><FaFacebookSquare /></a>
                <a href="#" className="text-[20px] text-[blue] hover:text-[#fead26]"><FaLinkedin /></a>
                <a href="#" className="text-[20px] text-red-500 hover:text-[#fead26]"><FaYoutube /></a>
                <a href="#" className="text-[20px] text-[orange] hover:text-[#fead26]"><FaInstagramSquare /></a>
                          </div>
                        </div>
                        <div className="flex justify-left gap-3 items-center">
                          <span className="text-muted-foreground">0</span>
                          <button className="bg-[#fead26] text-white px-2 py-1 rounded hover:bg-secondary/80 transition-colors duration-300">Share</button>
                          
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Real Estate Trends Post Covid</h2>
                        <p className="text-muted-foreground mb-4">Explore the changing landscape of real estate post-Covid and its impact on the market.</p>
                        <a href="#" className="text-primary hover:underline text-[#fead26]">READ FULL STORY</a>
                      </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                      <img src="https://placehold.co/600x400" alt="Best Places To Live In Gurgaon With Family" className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-muted-foreground">14 Sep, 2022</span>
                          <div className="flex items-center space-x-2">
                          <a href="#" className="text-[20px] text-[blue] hover:text-[#fead26]"><FaFacebookSquare /></a>
                <a href="#" className="text-[20px] text-[blue] hover:text-[#fead26]"><FaLinkedin /></a>
                <a href="#" className="text-[20px] text-red-500 hover:text-[#fead26]"><FaYoutube /></a>
                <a href="#" className="text-[20px] text-[orange] hover:text-[#fead26]"><FaInstagramSquare /></a>
                          </div>
                        </div>
                        <div className="flex justify-left gap-3 items-center">
                          <span className="text-muted-foreground">22</span>
                          <button className="bg-[#fead26] text-white px-2 py-1 rounded hover:bg-secondary/80 transition-colors duration-300">Share</button>
                          
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Best Places To Live In Gurgaon With Family</h2>
                        <p className="text-muted-foreground mb-4">Discover the top family-friendly neighborhoods in Gurgaon for a comfortable living experience.</p>
                        <a href="#" className="text-primary hover:underline text-[#fead26]">READ FULL STORY</a>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Blogs;

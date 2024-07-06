import React from 'react';
import './Home.css';
import bg from '../Assets/propzilla-photo.webp';
import { IoSearch } from "react-icons/io5";
import Testimonials from '../components/Testimonials';
import Developer from '../components/Developer';
import Whychooseus from '../components/Whychooseus';
import Whychoosetop from '../components/whychoosetop';


const Home = () => {
    
  return (
    <div>
      <div className='header'>
        <img src={bg} alt="" />
        <p className="sm:text-[40px] md:text-[60px] text-white text-center">FIND THE PROPERTY</p>
        <h1 className="sm:text-[50px] md:text-[60px] text-[#fead26] font-bold text-center">OF YOUR DREAMS</h1>
        <div className='searchbox w-auto flex flex-wrap justify-center items-center p-5 h-auto bg-[#ffffff9f]'>
            <select className="h-[60px] text-[20px] md:w-[120px] sm:w-[100%] bg-white sm:p-3 md:p-0">
                <option>Location</option>
                <option>Gurjaon</option>
                <option>Delhi</option>
                <option>Noida</option>
                <option>Banglore</option>
                <option>Pune</option>
            </select>
            <input className="h-[60px]  md:w-[600px] sm:w-[100%] text-[20px] border bg-white" type="text" placeholder='Enter an Address here, City or Area' />
            <button className="h-[60px] w-[60px] bg-[#fead26] text-[white] text-[20px] flex justify-center items-center"><IoSearch /></button>
        </div>
      </div>

      {/* 2nd section */}
      <Whychoosetop />
      <Whychooseus />
        {/* Testimotionals*/}
        <Testimonials/>
        {/* Major Developers */}
        <Developer />
    </div>
  )
}

export default Home;


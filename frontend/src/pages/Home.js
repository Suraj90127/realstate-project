import React from 'react';
import './Home.css';
import bg from '../Assets/propzilla-photo.webp';
import { IoSearch } from "react-icons/io5";
import Testimonials from '../components/Testimonials';
import Developer from '../components/Developer';


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
      <div className="bg-[#eaeaea] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wider">
              WHY CHOOSE <span className="text-[#fead26]">US</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <img alt="key-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🔑" className="mr-3" />
                  <h3 className="text-xl font-semibold">Easy Consultation</h3>
                </div>
                <p className="text-[var(--muted-foreground)]">We help the buyers from starting to the end of home purchase by understanding their needs and offering them the ideal investment opportunities.</p>
              </div>
              <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <img alt="home-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🏠" className="mr-3" />
                  <h3 className="text-xl font-semibold">Financial Assistance</h3>
                </div>
                <p className="text-[var(--muted-foreground)]">We provide loan advisory, home loan facilitation, evaluation of mortgage options, legal assistance on long and short term relations.</p>
              </div>
              <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <img alt="support-icon" src="https://openui.fly.dev/openui/24x24.svg?text=👨‍💼" className="mr-3" />
                  <h3 className="text-xl font-semibold">After Sale Assistance</h3>
                </div>
                <p className="text-[var(--muted-foreground)]">
                  We believe in providing the best services to the customers so we don't just stop serving them at the end of their purchase but we also provide the after sale services.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="bg-[var(--accent)] text-[var(--accent-foreground)] p-6 rounded-lg shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <p className="sm:text-2xl md:text-5xl font-bold text-[#fead26]">8</p>
                <p className="text-md md:font-bold">Years Experience</p>
              </div>
              <div className="bg-[var(--accent)] text-[var(--accent-foreground)] p-6 rounded-lg shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <p className="sm:text-2xl md:text-5xl font-bold text-[#fead26]">100+</p>
                <p className="text-md md:font-bold">Awards Received</p>
              </div>
              <div className="bg-[var(--accent)] text-[var(--accent-foreground)] p-6 rounded-lg shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <p className="sm:text-2xl md:text-5xl font-bold text-[#fead26]">1000+</p>
                <p className="text-md md:font-bold">Happy Clients</p>
              </div>
              <div className="bg-[var(--accent)] text-[var(--accent-foreground)] p-6 rounded-lg shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <p className="sm:text-2xl md:text-5xl font-bold text-[#fead26]">40+</p>
                <p className="text-md md:font-bold">Developers</p>
              </div>
              <div className="bg-[var(--accent)] text-[var(--accent-foreground)] p-6 rounded-lg shadow-lg transform hover:rotate-6 transition-transform duration-300">
                <p className="sm:text-2xl md:text-5xl font-bold text-[#fead26]">100+</p>
                <p className="text-md md:font-bold">Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimotionals*/}
        <Testimonials/>
        {/* Major Developers */}
        <Developer />
    </div>
  )
}

export default Home;


import React from 'react'
import { FaPlay } from "react-icons/fa";
import './component.css'


const Luxury = () => {
  return (
    <div className="Luxury flex justify-center items-center flex-col">
        <h1 className="text-white sm:text-[25px] md:text-[40px] font-bold">WHAT IS LUXURY LIVING?</h1>
        <div  className="flex gap-2">
            <p className="border-white border sm:text-[13px] md:text-[20px] sm:px-2 md:px-6 py-2 text-white">EXPLORE MORE ABOUT LUXURY RESIDENCES</p>
            <button className="border-white border sm:text-[13px] md:text-[20px] px-4 py-2 text-white"><FaPlay /></button>
        </div>
      
    </div>
  )
}

export default Luxury

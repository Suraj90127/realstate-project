import React from "react";
import { FaHouseDamage } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";

const whychoosetop = () => {
  return (
    <div className="bg-[#eaeaea] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wider">
          WHY CHOOSE <span className="text-[#fead26]">US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex gap-3 items-center mb-4">
              <FaHouseDamage className="text-[40px] font-bold" />
              <h3 className="text-xl font-semibold">Easy Consultation</h3>
            </div>
            <p className="text-[var(--muted-foreground)]">
              We assist buyers throughout the entire home purchase process by
              understanding their requirements and presenting them with the best
              investment opportunities.
            </p>
          </div>
          <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex gap-3 items-center mb-4">
              <SiWebmoney className="text-[40px] font-bold" />
              <h3 className="text-xl font-semibold">Financial Assistance</h3>
            </div>
            <p className="text-[var(--muted-foreground)]">
              We offer loan advisory services, facilitate home loans, evaluate
              mortgage options, and provide legal assistance for both long-term
              and short-term arrangements.
            </p>
          </div>
          <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex gap-3 items-center mb-4">
              <RiCustomerService2Fill className="text-[40px] font-bold" />
              <h3 className="text-xl font-semibold">After Sale Assistance</h3>
            </div>
            <p className="text-[var(--muted-foreground)]">
              We are committed to delivering exceptional service to our
              customers, extending our support beyond the purchase by offering
              comprehensive after-sales services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whychoosetop;

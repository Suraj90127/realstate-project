import React from "react";

const whychoosetop = () => {
  return (
    <div className="bg-[#eaeaea] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wider">
          WHY CHOOSE <span className="text-[#fead26]">US</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <img
                alt="key-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=🔑"
                className="mr-3"
              />
              <h3 className="text-xl font-semibold">Easy Consultation</h3>
            </div>
            <p className="text-[var(--muted-foreground)]">
              We help the buyers from starting to the end of home purchase by
              understanding their needs and offering them the ideal investment
              opportunities.
            </p>
          </div>
          <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <img
                alt="home-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=🏠"
                className="mr-3"
              />
              <h3 className="text-xl font-semibold">Financial Assistance</h3>
            </div>
            <p className="text-[var(--muted-foreground)]">
              We provide loan advisory, home loan facilitation, evaluation of
              mortgage options, legal assistance on long and short term
              relations.
            </p>
          </div>
          <div className="bg-gradient-to-t from-[#fffcf7] via-[#fff3de] to-[#ffe7bd] text-[var(--card-foreground)] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <img
                alt="support-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=👨‍💼"
                className="mr-3"
              />
              <h3 className="text-xl font-semibold">After Sale Assistance</h3>
            </div>
            <p className="text-[var(--muted-foreground)]">
              We believe in providing the best services to the customers so we
              don't just stop serving them at the end of their purchase but we
              also provide the after sale services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whychoosetop;

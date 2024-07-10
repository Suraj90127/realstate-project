import React from "react";
import "./component.css";
import { Link } from "react-router-dom";

const Developer = ({ allProperty }) => {
  return (
    <div className="Developer">
      <div className="bg-[#f8f8f8] text-foreground p-6">
        <h2 className="text-4xl font-extrabold text-center mb-6">
          MAJOR <span className="text-[#fead26]">DEVELOPERS</span>
        </h2>
        <Link to="/developerDetail">
          <div className="relative overflow-hidden h-80">
            <div className="absolute inset-0 "></div>
            <div className="h-full flex justify-center overflow-hidden">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 justify-self-center w-[95%] animate-marquee">
                {allProperty.map((d, i) => (
                  <div key={i}>
                    {d.aboutdevelor && d.aboutdevelor.length > 0 && (
                      <div>
                        {d.aboutdevelor.map((data, j) => (
                          <div
                            key={j}
                            className="my-2 border-2 px-10 py-5 items-center"
                          >
                            <img
                              src={data.image}
                              alt="Developer logo"
                              className="h-[50x] w-[100px] items-center flex justify-center border-border rounded-lg "
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Developer;

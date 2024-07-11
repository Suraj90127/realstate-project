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
        <div>
          <div className="relative overflow-hidden h-80">
            {/* <div className="h-full flex justify-center overflow-hidden"> */}
            <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-5 gap-3 justify-self-center w-[95%] animate-marque">
              {allProperty.map((d, i) => (
                <Link to={`/developerDetail?city=${d.city}`} key={i}>
                  {d.aboutdevelor && d.aboutdevelor.length > 0 && (
                    <div>
                      {d.aboutdevelor.map((data, j) => (
                        <div
                          key={j}
                          className="my-2 border w-full flex justify-center py-5"
                        >
                          <img
                            src={data.image}
                            alt="Developer logo"
                            className="h-[70px] w-[150px] object-cover "
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;

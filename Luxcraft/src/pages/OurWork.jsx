import React from "react";
import Gallery from "../components/our-work/Gallery";

function OurWork() {
  return (
    <>
      <React.Fragment>
        <div className="hero w-full h-96 overflow-hidden mb-6" style={{backgroundImage: 'url(https://www.home-designing.com/wp-content/uploads/2015/02/modern-loft-design.jpg)'}}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center gap-y-8">
              <h1 className="text-5xl text-white font-bold">
                Some of our Works and Case Studies for Clients
              </h1>
            </div>
        </div>
        <div className="flex flex-col items-center">
          <Gallery />
        </div>
      </React.Fragment>
    </>
  );
}

export default OurWork;

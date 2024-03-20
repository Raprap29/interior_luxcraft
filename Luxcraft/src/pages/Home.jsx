import React from "react";
import HomeDescription1 from "../components/home/HomeDescription1";
import HomeDescription2 from "../components/home/HomeDescription2";
import HomeDescription3 from "../components/home/HomeDescription3";
import HomeDescription4 from "../components/home/HomeDescription4";
import HomeDescription5 from "../components/home/HomeDescription5";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <>
      <HomeDescription1 />
      <div className="hero min-h-screen">
        <div className="hero-content grid grid-cols-1 gap-y-8 p-5">
          {/* Increased vertical gap and added padding for overall spacing */}
          <HomeDescription2 />
          <HomeDescription3 />
          <HomeDescription4 />
          <div className="hero-content grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-10">
            {/* Added gap within the testimonials for better spacing between them */}
            <Testimonials />
          </div>
          <HomeDescription5 />  
        </div>
      </div>
    </>
  );
}

export default Home;

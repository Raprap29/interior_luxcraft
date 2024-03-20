import React from "react";

function HomeDescription4() {
  return (
    <>
      <div className="hero-content min-h-screen grid grid-cols-1">
        <h1 className="text-5xl font-bold text-center">Beautiful and sophiscated design</h1>

        <div className="w-full h-96 overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://www.home-designing.com/wp-content/uploads/2015/02/modern-loft-design.jpg"
            alt="Modern Loft Design"
          ></img>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h1 className="text-5xl font-bold">Deliver more than expected</h1>
          <p className="py-6 px-2 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Vivamus
            arcu felis bibendum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id
            laoreet posuere etiam morbi.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeDescription4;

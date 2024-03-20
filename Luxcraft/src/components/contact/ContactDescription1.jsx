import React from "react";

function ContactDescription1() {
  return (
    <>
      <h1 className="text-5xl font-bold">Let us build your dream home</h1>

      <div className="w-full h-96 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="https://www.home-designing.com/wp-content/uploads/2015/02/modern-loft-design.jpg"
          alt="Modern Loft Design"
        ></img>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="py-6 px-2 md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Vivamus
          arcu felis bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet
          posuere etiam morbi.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-5xl font-bold"></div>
        <div className="grid grid-cols-1 p-2 lg:grid-cols-2">
          <div>
            <h1>CONTACT</h1>
            <p>+65 1234 5678</p>
          </div>
          <div>
            <h1>OFFICE</h1>
            <p>Mages Institute, 123456</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDescription1;

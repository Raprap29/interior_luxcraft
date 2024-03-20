import React from "react";
import FAQs from "../components/contact/FAQs";
import ContactDescription1 from "../components/contact/ContactDescription1";
import GoogleMap from "../components/contact/GoogleMap";

function Contact() {
  return (
    <>
        <div className="hero">
        <div className="hero-content text-center grid grid-cols-1 gap-y-10 p-5">
          {/* Added padding around the hero-content and gap between items */}
          <ContactDescription1 />
          <GoogleMap />
          <FAQs />
        </div>
        </div>
    </>
  );
}

export default Contact;

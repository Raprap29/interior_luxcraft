import React from "react";
import Stats from "../components/services/Stats";
import Comparison from "../components/services/Comparison";
import ServiceDescription from "../components/services/ServiceDescription";
import ServiceDescription2 from "../components/services/ServiceDescription2";
import ServiceDescription3 from "../components/services/ServiceDescription3";
import ServiceDescription4 from "../components/services/ServicesDescription4";

function Services() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex flex-col gap-y-10 p-5">
          {/* Maintained general gap and padding */}
          <h1 className="text-5xl font-bold mb-10">From 3D to Reality</h1>
          {/* Retained margin-bottom for additional spacing after the title */}

          <Comparison />

          <ServiceDescription />

          <ServiceDescription2 />

          <Stats />

          {/* Responsive layout adjustment for ServiceDescription3 */}
          <ServiceDescription4 />
        </div>
      </div>
 
    </>
  );
}

export default Services;

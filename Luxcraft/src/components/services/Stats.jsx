import React from "react";

function Stats() {
  return (
    <>
      <div className="stats shadow w-full">
        <div className="stat place-items-center" >
          <div className="md:stat-title"><p className="text-l">Satisfaction</p></div>
          <div className="md:stat-value"><p className="text-5xl font-bold">100%</p></div>
        </div>

        <div className="stat place-items-center">
          <div className="md:stat-title"><p className="text-l">Awards</p></div>
          <div className="md:stat-value"><p className="text-5xl font-bold">5</p></div>
        </div>

        <div className="stat place-items-center">
          <div className="md:stat-title"><p className="text-l">Projects Completed</p></div>
          <div className="md:stat-value"><p className="text-5xl font-bold">21</p></div>
        </div>
      </div>
    </>
  );
}

export default Stats;

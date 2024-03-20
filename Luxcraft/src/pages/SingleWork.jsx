import React from "react";
import SingleDescription1 from "../components/singlework/SingleDescription1";
import Showcase from "../components/singlework/showcase";
import SingleDescription2 from "../components/singlework/SingleDescription2";

function SingleWork() {
  return (
    <>
      <div className="hero">
        <div className="hero-content flex flex-col items-center justify-center">
          <SingleDescription1 />

          <Showcase />

          <SingleDescription2 />
        </div>
      </div>
    </>
  );
}

export default SingleWork;

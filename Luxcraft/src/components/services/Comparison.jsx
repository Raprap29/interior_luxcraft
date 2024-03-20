import React from "react";

function Comparison() {
  return (
    <>
      <div className="w-8/12">
        <div className="diff aspect-[16/9]">
          {/* LEFT */}
          <div className="diff-item-1">
            {/* can replace with img src if you want to use photos */}
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              DAISY
            </div>
          </div>
          {/* RIGHT */}
          <div className="diff-item-2">
            {/* can replace with img src if you want to use photos */}
            <div className="bg-base-200 text-9xl font-black grid place-content-center">
              DAISY
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
    </>
  );
}

export default Comparison;

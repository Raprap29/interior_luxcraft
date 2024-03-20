import React from "react";
import Checklist from "./Checklist";

function ServiceDescription() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Vivamus
          arcu felis bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet
          posuere etiam morbi.
        </p>
        <div>
          <Checklist />
        </div>
      </div>
    </>
  );
}

export default ServiceDescription;

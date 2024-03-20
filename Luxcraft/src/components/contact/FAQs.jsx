import React from "react";

function FAQs() {
  return (
    <>
      <h1 className="text-5xl font-bold">FAQs</h1>
      <div className="join join-vertical w-full rounded-none">
        <div className="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            QUESTION 1
          </div>
          <div className="collapse-content">
            <p>Answer 1</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            QUESTION 2
          </div>
          <div className="collapse-content">
            <p>Answer 2</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            QUESTION 3
          </div>
          <div className="collapse-content">
            <p>Answer 3</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;

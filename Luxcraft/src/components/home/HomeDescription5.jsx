import React from "react";
import { FaArrowRight } from "react-icons/fa";

function HomeDescription5() {
  return (
    <>
      <div className="min-h-screen container mx-auto max-w-[968px] lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
        <div className="lg:mt-0">
          <div>
            <p className="text-white font-bold text-3xl">Real comfort, visual and physical, vital to every room</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
            alt="Natural Language Processing"
            className="w-full rounded-lg shadow-xl mt-20"
          />
        </div>
        <div className="lg:py-16 mt-20 w-full">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Natural Language Processing (NLP):
          </h2>
          <p className="mt-4 text-lg text-gray-300 text-justify">
            The AI product utilizes advanced NLP algorithms to understand and
            interpret human language, enabling it to accurately process and
            analyze text-based inputs.
          </p>
          <div className="mt-10 flex w-full justify-end">
            <button className="btn btn-outline rounded-[50px]">See our services <FaArrowRight size={18} /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDescription5;

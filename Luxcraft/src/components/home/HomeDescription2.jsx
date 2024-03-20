import React from "react";
import { Link } from "react-router-dom";

function HomeDescription2() {
  return (
    <>
      <div className="mt-32">
        <div className="container mx-auto max-w-[1170px]">
          <div className="flex h-full">
            <h1 className="text-2xl font-bold pr-10">01.RECENT PROJECTS</h1>
          </div>
          <div className="flex mt-4">
            <button className="btn btn-outline">See More</button>
          </div>
        </div>
        <div className="min-h-screen py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
              {/* 1st pic square */}
              <Link
                to="#"
                className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </Link>

              {/* 2nd pic rectangle */}
              <Link
                to="#"
                className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </Link>

              {/* 3rd pic rectangle */}
              <Link
                to="#"
                className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </Link>

              {/* 4th pic square */}
              <Link
                to="#"
                className="group relative flex h-48 items-end overflow-hidden bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDescription2;

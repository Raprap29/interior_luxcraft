import React from "react";

function HomeDescription3() {
  return (
    <div className="pt-16  space-y-24 overflow-hidden">
      {/* Wrapper for content blocks */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* First content block */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center text-left">
          <div className="lg:py-10">
            <h2 className=" text-3xl font-bold">
              Bringing your dream home to life
            </h2>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="lg:mt-0 mt-5">
            <img
              src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
              alt="Natural Language Processing"
              className="w-full"
            />
          </div>
        </div>

        <div className="divider"></div>

        {/* Second content block */}
        <div className="container mx-auto max-w-[768px]">
          <div className="lg:grid flex max-[768px]:flex-col-reverse lg:grid-cols-[25vw_minmax(40vw,_1fr)] lg:gap-24 text-left">
              <div className="mt-12 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
                  alt="Natural Language Processing"
                  className=""
                />
                <div className="mt-5">
                  <p className="text-3xl font-bold text-justify">Make Beautiful interior design for better living</p>
                  <div className="w-full flex justify-center mt-5">
                    <button className="btn btn-primary">See our services</button>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="text-4xl text-center lg:text-normal font-bold">
                  Trusted Interior Design Agency
                </h2>
                <ul className="list-inside flex flex-col gap-y-[35px] lg:ml-[130px] mt-10 list-none">
                  <li className="flex gap-x-[40px] flex-wrap">
                    <p className="text-4xl">1</p>
                    <div className="text-center">
                      <p className="font-bold">TITLE</p>
                      <p className="text-center lg:w-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </li>
                  <li className="flex gap-x-[40px] flex-wrap">
                    <p className="text-4xl">2</p>
                    <div className="text-center">
                      <p className="font-bold">TITLE</p>
                      <p className="text-center lg:w-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </li>
                  <li className="flex gap-x-[40px] flex-wrap">
                    <p className="text-4xl">3</p>
                    <div className="text-center">
                      <p className="font-bold">TITLE</p>
                      <p className="text-center lg:w-[250px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
}

export default HomeDescription3;

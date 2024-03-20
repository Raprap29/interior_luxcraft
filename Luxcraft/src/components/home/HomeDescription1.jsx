import React from "react";

function HomeDescription1() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT CONTENT*/}
        <div className="grid max-[768px]:px-[25px] grid-cols-1">
          <div className="flex justify-center items-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                It's proudly for us to build stylish & featured interior design
              </h1>
              <p className="py-6">
                Our team crafts an ambiance that's both inviting and
                sophisticated, ensuring your home reflects your style and
                personality. From sumptuous fabrics to rich wood accents, every
                detail is meticulously designed.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="bg-cover bg-center min-h-screen"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        ></div>
      </div>
    </>
  );
}

export default HomeDescription1;

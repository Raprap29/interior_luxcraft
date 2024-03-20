import React from "react";

// Update your images array to include objects with image URL, title, and description
const items = [
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
  },
  {
    imageUrl: "https://www.home-designing.com/wp-content/uploads/2015/02/modern-loft-design.jpg",
    title: "Architectural & Interior Design 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
  },
  {
    imageUrl: "https://www.home-designing.com/wp-content/uploads/2015/02/modern-loft-design.jpg",
    title: "Architectural & Interior Design 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
  },
  {
    imageUrl: "https://www.home-designing.com/wp-content/uploads/2015/02/modern-loft-design.jpg",
    title: "Architectural & Interior Design 2",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  // Add more items here
];

function Gallery() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <div key={index} className={`flex ${((index % 3) + 1) % 2 !== 0 ? "mt-[100px]" : ""} flex-col items-center w-96`}>
            <div
              className="bg-center bg-cover mb-0 w-64 h-64"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            <div className="flex flex-col justify-center items-center text-center p-2 w-full">
              <h1 className="text-3xl font-bold mb-2">
                {item.title}
              </h1>
              <p>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;

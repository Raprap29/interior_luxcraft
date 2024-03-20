import React, {useState} from "react";
import { Link } from "react-router-dom";

const items = [
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
    link: "/singlework", // Example route, adjust as necessary
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
    link: "/singlework", // Example route, adjust as necessary
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
    link: "/singlework", // Example route, adjust as necessary
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
    link: "/singlework", // Example route, adjust as necessary
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
    link: "/singlework", // Example route, adjust as necessary
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Architectural & Interior Design 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.",
    link: "/singlework", // Example route, adjust as necessary
  },
];


function Gallery() {

  const [name, setName] = useState("all");

  const [number, setNumber] = useState(3);

  const handleViewMore = () => {
    setNumber(number + 3);

  }

  const handleName = (name) => {
    try{
      setName(name)
    }catch(err)
    {
      return console.err(err);
    }
  }

  return (
    <div>
      <div className="mb-[40px] flex justify-center">
        <p className="text-4xl font-bold max-w-[450px] text-center">Some of Our Works and Case Studies for Clients</p>
      </div>
      <div className="flex hidden md:block justify-center">
        <div className="flex flex-wrap gap-x-[50px] pb-[40px] justify-center items-center">
          <button className={`${name === "all" ? "pointer-events text-black font-bold rounded-[10px] bg-[rgba(255,255,255,.50)]" : ""} px-[20px] py-[15px]`} onClick={() => handleName("all")} type="button"><p className="text-center">ALL</p></button>
          <button className={`${name === "arc" ? "pointer-events text-black font-bold rounded-[10px] bg-[rgba(255,255,255,.50)]" : ""} px-[20px] py-[15px]`} onClick={() => handleName("arc")} type="button"><p className="text-center">ARCHITECTURE</p></button>
          <button className={`${name === "decor" ? "pointer-events text-black font-bold rounded-[10px] bg-[rgba(255,255,255,.50)]" : ""} px-[20px] py-[15px]`} onClick={() => handleName("decor")} type="button"><p className="text-center">DECOR</p></button>
          <button className={`${name === "furn" ? "pointer-events text-black font-bold rounded-[10px] bg-[rgba(255,255,255,.50)]" : ""} px-[20px] py-[15px]`} onClick={() => handleName("furn")} type="button"><p className="text-center">FURNITURE</p></button>
          <button className={`${name === "inter" ? "pointer-events text-black font-bold rounded-[10px] bg-[rgba(255,255,255,.50)]" : ""} px-[20px] py-[15px]`} onClick={() => handleName("inter")} type="button"><p className="text-center">INTERIOR</p></button>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-7">
        {items?.slice(0,number)?.map((item, index) => (
          <Link key={index} to={item.link} className="flex flex-col items-center w-full md:w-96 lg:px-[0px] px-[20px]">
            <div
              className="bg-center bg-cover mb-0 w-full h-96"
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
          </Link>
        ))}
      </div>
      <div className={`mt-6 ${number >= items?.length ? "hidden p-5 " : ""} flex justify-center`}>
          <button type="button" onClick={handleViewMore} className="btn btn-primary rounded-none">See More</button>
      </div>
    </div>
  );
}

export default Gallery;

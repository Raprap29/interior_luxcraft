import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonials() {

  const TestiMonialStore = [
    {
      description: "It's incredibly easy to integrate into our applications, and it has saved us countless hours of development time",
      firstName: "John Doe",
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDB8MXx8fDE2OTYxNzE4MzN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      lastName: "Yifan"
    },
    {
      description: "It's incredibly easy to integrate into our applications, and it has saved us countless hours of development time",
      firstName: "John Doe",
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDB8MXx8fDE2OTYxNzE4MzN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      lastName: "Yifan"
    },
    {
      description: "It's incredibly easy to integrate into our applications, and it has saved us countless hours of development time",
      firstName: "John Doe",
      img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8bWFufGVufDB8MXx8fDE2OTYxNzE4MzN8MA&ixlib=rb-4.0.3&q=80&w=1080",
      lastName: "Yifan"
    },
   
  ]

  return (
    <>
      {TestiMonialStore?.map((item, index) => (
        <div key={index} className="border border-solid border-1 border-[#fff] rounded-[5px] p-3 space-y-4 max-w-md mx-auto">
          <RiDoubleQuotesL size={20} />
          <p className="text-center md:text-lg leading-relaxed">
            {item?.description}
          </p>
          <div className="flex gap-x-[20px] items-center gap-2">
            <img
              alt="Yifan testimonial for ShipFast"
              loading="lazy"
              width="48"
              height="48"
              decoding="async"
              data-nimg="1"
              className="w-10 h-10 rounded-full object-cover"
              src={item?.img}
            />
            <p>
              {item?.lastName}, &nbsp;<span className="font-bold">{item?.firstName}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Testimonials;

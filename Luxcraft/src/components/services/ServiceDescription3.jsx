import React from 'react'

function ServiceDescription3() {
  return (
    <>
      
      {/* IMAGE ON LEFT */}
      <div
        className=""
        style={{
          backgroundImage:
            "url(https://www.home-designing.com/wp-content/uploads/2015/02/modern-loft-design.jpg)",
        }}
      ></div>
      {/* DESCRIPTION RIGHT */}
      <div className="">
        <h1 className="text-3xl text-center md:text-5xl font-bold">
          Real comfort, visual and physical, is vital to every room
        </h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Vivamus
          arcu felis bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet
          posuere etiam morbi.
        </p>
        <button className='btn btn-primary btn-outline'>VIEW OUR PORTFOLIO</button>
      </div>
    </>
  )
}

export default ServiceDescription3

import React from "react";

function GoogleMap() {
  return (
    <>
      {/* MAP */}
      <div className="flex justify-center mt-5 p-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7899666052795!2d103.83293041076051!3d1.3008932617253237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1996d80bf041%3A0x65962d763fdc49db!2sMAGES%20Institute%20of%20Excellence!5e0!3m2!1sen!2ssg!4v1710083232001!5m2!1sen!2ssg"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default GoogleMap;

import React from "react";
import { Link } from "react-router-dom";

function NavbarLinks() {
  return (
    <>
      <li className="link link-hover px-5">
        <Link to="/">Home</Link>
      </li>
      <li className="link link-hover px-5">
        <Link to="/services">Services</Link>
      </li>
      <li className="link link-hover px-5">
        <Link to="/ourwork">Our Work</Link>
      </li>
      <li className="link link-hover px-5">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
}

export default NavbarLinks;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/menu"}>Menu</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>about</Link>
    </div>
  );
};

export default Header;

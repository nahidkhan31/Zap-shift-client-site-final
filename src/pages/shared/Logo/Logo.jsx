import React from "react";
import picture from "../../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex items-end">
          <img className="mb-2" src={picture} alt="logo" />
          <p className="text-3xl -ml-2 font-urbanist font-bold">
            Pro<span className="text-green-600">Fast</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

import React from "react";
import { NavLink } from "react-router";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold border-b-2 border-primary"
      : "hover:text-primary transition";

  const navItems = (
    <>
      <li>
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/coverage" className={navLinkStyle}>
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink to="/sendParcel" className={navLinkStyle}>
          Send Parcel
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={navLinkStyle}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navLinkStyle}>
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-md top-0 left-0">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box"
          >
            {navItems}
          </ul>
        </div>

        <NavLink to="/" className="text-xl">
          <Logo />
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6">{navItems}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button className="btn btn-primary text-black rounded-full px-6">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;

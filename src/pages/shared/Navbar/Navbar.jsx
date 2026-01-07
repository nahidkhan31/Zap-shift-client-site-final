import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { AiFillCheckCircle, AiFillCloseCircle, AiOutlineLoading3Quarters } from "react-icons/ai";

const Navbar = () => {
  const {user, logOut}= useAuth();
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
        <NavLink to="/send-parcel" className={navLinkStyle}>
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



   const handleLogOut = () =>{
    // tost......
     toast.loading(
      <div className="flex items-center gap-2">
        <AiOutlineLoading3Quarters className="animate-spin text-blue-500 text-lg" />
        <span>logOut...</span>
      </div>,
      { id: "logOut" }
    );


    logOut()
    .then(()=>{
        toast.success(
          <div className="flex items-center gap-2">
            <AiFillCheckCircle className="text-green-500 text-xl" />
            <span>Successfully logged Out...</span>
          </div>,
          { id: "logOut" }
        );

    })
    .catch((error)=>{
      toast.error(
          <div className="flex items-center gap-2">
            <AiFillCloseCircle className="text-red-500 text-xl" />
            <span>LogOut failed</span>
          </div>,
          { id: "logOut" }
        );
      console.error(error)
    })
   }

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
        {
          user? 
           <button onClick={handleLogOut} className='btn btn-primary text-black'>Log Out</button>
           :
            <Link to="/login" className='btn btn-primary  text-black'>Login</Link>}
        
      </div>
    </div>
  );
};

export default Navbar;

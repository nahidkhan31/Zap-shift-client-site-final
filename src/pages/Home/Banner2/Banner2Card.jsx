import React from "react";
import logo from "../../../assets/bookingIcon.png";

const cardColors = [
  { bg: "bg-green-100", hover: "hover:bg-green-300" },
  { bg: "bg-blue-100", hover: "hover:bg-blue-300" },
  { bg: "bg-yellow-100", hover: "hover:bg-yellow-300" },
  { bg: "bg-purple-100", hover: "hover:bg-purple-300" }
];

const Banner2Card = ({ book = {}, index = 0 }) => {
  const { name, description } = book;

  const color = cardColors[index % cardColors.length];

  return (
    <div data-aos="fade-right" className="mt-2">
      <div
        className={`grid grid-cols-1 gap-3 shadow-md p-8 rounded-2xl
        transition-all duration-300 cursor-pointer
        ${color?.bg} ${color?.hover} hover:shadow-lg`}
      >
        <img src={logo} alt="Booking icon" className="w-12 h-12" />

        <h1 className="text-sm font-semibold text-black">
          {name}
        </h1>

        <p className="text-sm text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner2Card;

import React from "react";

const colorSet = [
  {
    bg: "bg-green-100",
    hover: "hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600",
    border: "border-green-300",
    text: "hover:text-white"
  },
  {
    bg: "bg-blue-100",
    hover: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600",
    border: "border-blue-300",
    text: "hover:text-white"
  },
  {
    bg: "bg-purple-100",
    hover: "hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600",
    border: "border-purple-300",
    text: "hover:text-white"
  },
  {
    bg: "bg-yellow-100",
    hover: "hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600",
    border: "border-yellow-300",
    text: "hover:text-gray-900"
  },
  {
    bg: "bg-pink-100",
    hover: "hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-600",
    border: "border-pink-300",
    text: "hover:text-white"
  },
  {
    bg: "bg-teal-100",
    hover: "hover:bg-gradient-to-r hover:from-teal-400 hover:to-teal-600",
    border: "border-teal-300",
    text: "hover:text-white"
  }
];

const BenefitsCard = ({ benefits = {}, index }) => {
  const { title, description, image } = benefits;
  const color = colorSet[index % colorSet.length];

  return (
    <div
      data-aos="fade-up"
      className={`card flex flex-col items-center text-center border shadow-md rounded-2xl
      transition-all duration-500 ease-in-out cursor-pointer
      hover:shadow-xl hover:-translate-y-1
      ${color.bg} ${color.hover} ${color.border} group p-6`}
    >
      {/* Image / Icon */}
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-contain mb-4
        transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
      />

      {/* Title */}
      <h3 className={`text-lg font-semibold mb-2 ${color.text}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700 opacity-90">
        {description}
      </p>
    </div>
  );
};

export default BenefitsCard;

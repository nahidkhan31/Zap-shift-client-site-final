import React from "react";

const colors = [
  {
    bg: "bg-green-100",
    hover: "hover:bg-green-300",
    icon: "text-green-600"
  },
  {
    bg: "bg-blue-100",
    hover: "hover:bg-blue-300",
    icon: "text-blue-600"
  },
  {
    bg: "bg-purple-100",
    hover: "hover:bg-purple-300",
    icon: "text-purple-600"
  },
  {
    bg: "bg-yellow-100",
    hover: "hover:bg-yellow-300",
    icon: "text-yellow-600"
  },
  {
    bg: "bg-pink-100",
    hover: "hover:bg-pink-300",
    icon: "text-pink-600"
  },
  {
    bg: "bg-teal-100",
    hover: "hover:bg-teal-300",
    icon: "text-teal-600"
  }
];

const ServicesCard = ({ service = {}, index }) => {
  const { icon: Icon, title, description } = service;
  const color = colors[index % colors.length];

  return (
    <div
      className={`card shadow-md hover:shadow-xl transition-all duration-300
      p-6 rounded-2xl cursor-pointer
      ${color.bg} ${color.hover}`}
    >
      <div className={`text-4xl mb-4 ${color.icon}`}>
        <Icon />
      </div>

      <h2 className="text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h2>

      <p className="text-sm text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default ServicesCard;

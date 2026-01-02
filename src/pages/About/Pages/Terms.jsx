import React from 'react';
import {
  AiOutlineTeam,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaTruckMoving, FaUsersGear, FaHeadset } from "react-icons/fa6";
import { MdHandshake } from "react-icons/md";


const Terms = () => {
    return (
       <div className="space-y-6">

      {/* Title */}
      <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
        <AiOutlineTeam className="text-4xl" />
        Team & Partners
      </h2>

      {/* Intro */}
      <p className="text-white">
        Our strength lies in our people and the powerful network of partners we
        have cultivated. We are a collective of dedicated professionals, driven
        by a shared vision of logistical excellence.
      </p>

      {/* Core Team */}
      <div className="bg-blue-100 p-5 rounded-xl shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaUsersGear className="text-primary text-2xl" />
          The Core Team
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <FaTruckMoving className="text-primary mt-1" />
            <span>
              <strong>Logistics & Operations Experts:</strong> Highly experienced
              professionals who design and execute the most efficient supply
              chain routes.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <AiOutlineGlobal className="text-green-500 mt-1" />
            <span>
              <strong>Technology Innovators:</strong> Dedicated engineers who
              develop and maintain our proprietary tracking and optimization
              platforms.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <FaHeadset className="text-blue-500 mt-1" />
            <span>
              <strong>Dedicated Support Staff:</strong> A 24/7 customer care team
              committed to providing fast, effective, and human-centered
              assistance.
            </span>
          </li>
        </ul>
      </div>

      {/* Partnerships */}
      <div className="bg-cyan-200 p-5 rounded-xl shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <MdHandshake className="text-primary text-2xl" />
          Strategic Partnerships
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <AiOutlineGlobal className="text-primary mt-1" />
            <span>
              <strong>Global Carrier Network:</strong> Strong partnerships with
              premier international freight and cargo companies ensure seamless
              global connectivity.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <FaTruckMoving className="text-green-500 mt-1" />
            <span>
              <strong>Last-Mile Specialists:</strong> Collaborating with highly
              reliable local couriers who possess deep knowledge necessary for
              efficient last-mile delivery.
            </span>
          </li>
        </ul>
      </div>

    </div>
    );
};

export default Terms;
import React from 'react';
import {
  AiOutlineCheckCircle,
  AiOutlineRise,
} from "react-icons/ai";
import { FaTruckFast, FaStar, FaIndustry } from "react-icons/fa6";
import { MdTrackChanges } from "react-icons/md";


const Success = () => {
    return (
        <div className="space-y-6">

      {/* Title */}
      <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
        <AiOutlineRise className="text-4xl" />
        Our Success
      </h2>

      {/* Intro */}
      <p className="text-white">
        Our success is measured by the confidence and satisfaction of our diverse
        clientele. We have rapidly grown into a trusted industry leader by
        maintaining impeccable service standards and achieving quantifiable
        results.
      </p>

      {/* Metrics */}
      <div className="bg-blue-200 p-5 rounded-xl shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          Impeccable Performance Metrics
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <FaTruckFast className="text-primary mt-1" />
            <span>
              <strong>99.8% On-Time Delivery Rate</strong>, setting an industry
              benchmark.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <AiOutlineCheckCircle className="text-green-500 mt-1" />
            <span>
              Near <strong>zero incidence rate</strong> for lost or damaged
              parcels.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <FaStar className="text-yellow-500 mt-1" />
            <span>
              Consistently high <strong>customer satisfaction (CSAT)</strong>
              scores.
            </span>
          </li>
        </ul>
      </div>

      {/* Scalability */}
      <div className="bg-amber-200 p-5 rounded-xl shadow-sm flex gap-4">
        <FaIndustry className="text-4xl text-green-600 shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Scalability & Trust
          </h3>
          <p className="text-gray-700 mt-1">
            We have evolved from handling personal packages to managing complex,
            high-volume business shipments for multinational corporations. Our
            infrastructure is designed to scale with your growth.
          </p>
        </div>
      </div>

      {/* Innovation */}
      <div className="bg-cyan-100 p-5 rounded-xl shadow-sm flex gap-4">
        <MdTrackChanges className="text-4xl text-yellow-300 shrink-0" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Innovation Recognition
          </h3>
          <p className="text-gray-700 mt-1">
            Recognized for pioneering the industry's most advanced real-time
            tracking system, providing granular updates from pickup to final
            delivery.
          </p>
        </div>
      </div>

    </div>
    );
};

export default Success;
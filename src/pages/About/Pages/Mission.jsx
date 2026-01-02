import React from 'react';
import {
  FaRocket,
  FaUsers,
  FaGlobeAsia,
  FaLeaf,
} from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";

const Mission = () => {
    return (
        <div className="space-y-8">
      {/* Title */}
      <div className="flex items-center gap-3">
        <BiTargetLock className="text-3xl text-primary" />
        <h2 className="text-2xl md:text-3xl font-bold text-[#03373D]">
          Our Mission
        </h2>
      </div>

      {/* Intro */}
      <p className="text-gray-600 leading-relaxed">
        Our mission is to redefine the standards of parcel delivery through the
        relentless pursuit of speed, reliability, and transparency. We aim to be
        the most trusted and preferred logistics partner for both individuals and
        businesses by delivering more than just packages — we deliver promises.
      </p>

      {/* Mission Cards */}
      <div className="grid gap-5">
        {/* Technology */}
        <div className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
          <FaRocket className="text-2xl text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-[#03373D] mb-1">
              Technology-Driven Excellence
            </h4>
            <p className="text-sm text-gray-600">
              Integrating AI-powered route optimization and advanced tracking
              systems to ensure maximum efficiency with minimal errors.
            </p>
          </div>
        </div>

        {/* Customer */}
        <div className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
          <FaUsers className="text-2xl text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-[#03373D] mb-1">
              Customer-Centric Focus
            </h4>
            <p className="text-sm text-gray-600">
              Maintaining a customer-first culture with responsive support and
              hassle-free experiences that build long-term trust.
            </p>
          </div>
        </div>

        {/* Global */}
        <div className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
          <FaGlobeAsia className="text-2xl text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-[#03373D] mb-1">
              Global Reach, Local Touch
            </h4>
            <p className="text-sm text-gray-600">
              Expanding our international network while maintaining personalized
              and attentive local service.
            </p>
          </div>
        </div>

        {/* Sustainability */}
        <div className="flex gap-4 items-start bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
          <FaLeaf className="text-2xl text-primary mt-1" />
          <div>
            <h4 className="font-semibold text-[#03373D] mb-1">
              Sustainability Commitment
            </h4>
            <p className="text-sm text-gray-600">
              Implementing eco-friendly practices to reduce our carbon footprint
              and contribute to a greener future.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Mission;
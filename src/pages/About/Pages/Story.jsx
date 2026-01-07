import React from "react";
import { FaSeedling, FaChartLine, FaShippingFast } from "react-icons/fa";

const Story = () => {
  return (
    <div className="space-y-6">

      {/* Intro */}
      <p className="text-white leading-relaxed">
        Our journey began with a simple yet powerful idea — to remove the stress,
        uncertainty, and delays from parcel delivery. What started as a small
        initiative has grown into a trusted logistics solution relied upon by
        thousands.
      </p>

      {/* Story Cards */}
      <div className="grid gap-5">

        {/* Beginning */}
        <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border-l-4 border-amber-500 shadow-sm hover:bg-amber-50 transition">
          <FaSeedling className="text-2xl text-amber-500 mt-1" />
          <div>
            <h4 className="font-semibold text-[#03373D] mb-1">
              The Beginning
            </h4>
            <p className="text-sm text-gray-600">
              We started with a promise to make parcel delivery fast, reliable,
              and stress-free. Our early focus was on building trust through
              timely deliveries and transparent communication.
            </p>
          </div>
        </div>

        {/* Growth */}
        <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border-l-4 border-sky-500 shadow-sm hover:bg-sky-50 transition">
          <FaChartLine className="text-2xl text-sky-500 mt-1" />
          <div>
            <h4 className="font-semibold text-[#03373D] mb-1">
              Growth & Innovation
            </h4>
            <p className="text-sm text-gray-600">
              As demand grew, we invested in real-time tracking, smarter route
              planning, and customer-first systems that transformed how people
              experience logistics.
            </p>
          </div>
        </div>

        {/* Today */}
        <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border-l-4 border-emerald-500 shadow-sm hover:bg-emerald-50 transition">
          <FaShippingFast className="text-2xl text-emerald-500 mt-1" />
          <div>
            <h4 className="font-semibold text-[#03373D] mb-1">
              Where We Are Today
            </h4>
            <p className="text-sm text-gray-600">
              Today, we proudly deliver everything from personal gifts to
              time-sensitive business shipments — ensuring every package reaches
              its destination on time, every time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Story;

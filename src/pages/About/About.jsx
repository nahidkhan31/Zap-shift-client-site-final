import React from 'react';
import { NavLink, Outlet } from 'react-router';

const About = () => {
    return (
         <div className="max-w-4xl p-6 bg-base-200 rounded-xl shadow-md my-20 mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-300 mb-2">About Us</h1>
      <p className="text-gray-200 mb-6">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      {/* Tabs */}
      <div className="tabs tabs-bordered mb-6">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Story
        </NavLink>
        <NavLink
          to="mission"
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Mission
        </NavLink>
        <NavLink
          to="success"
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Success
        </NavLink>
        <NavLink
          to="team"
          end
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-primary font-semibold" : ""}`
          }>
          Team & Others
        </NavLink>
      </div>

      {/* Render Child Route */}
      <div className="text-gray-600 leading-relaxed">
        <Outlet />
      </div>
    </div>
    );
};

export default About;
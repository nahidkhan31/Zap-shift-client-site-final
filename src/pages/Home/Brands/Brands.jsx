import React from "react";
import Marquee from "react-fast-marquee";

import Logo1 from "../../../assets/brands/amazon.png";
import Logo2 from "../../../assets/brands/casio.png";
import Logo3 from "../../../assets/brands/moonstar.png";
import Logo4 from "../../../assets/brands/randstad.png";
import Logo5 from "../../../assets/brands/start-people 1.png";
import Logo6 from "../../../assets/brands/start.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

const Brands = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="relative py-20 rounded-3xl
      bg-gradient-to-r from-gray-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* 🔹 Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Trusted by{" "}
          <span className="text-primary">Leading Brands</span>
        </h2>

        {/* 🔹 Marquee Wrapper */}
        <div className="space-y-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl py-8">

          {/* 🔹 Row 1 */}
          <Marquee pauseOnHover speed={45} gradient={false}>
            {logos.map((logo, idx) => (
              <div
                key={`row1-${idx}`}
                className="mx-20 flex items-center justify-center
                grayscale hover:grayscale-0
                transition-all duration-300
                hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`Brand ${idx + 1}`}
                  className="h-7 md:h-9 object-contain"
                />
              </div>
            ))}
          </Marquee>

          {/* 🔹 Row 2 (Reverse Direction) */}
          <Marquee
            pauseOnHover
            speed={35}
            direction="right"
            gradient={false}
          >
            {logos.map((logo, idx) => (
              <div
                key={`row2-${idx}`}
                className="mx-20 flex items-center justify-center
                grayscale hover:grayscale-0
                transition-all duration-300
                hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`Brand ${idx + 1}`}
                  className="h-7 md:h-9 object-contain"
                />
              </div>
            ))}
          </Marquee>

        </div>
      </div>
    </section>
  );
};

export default Brands;

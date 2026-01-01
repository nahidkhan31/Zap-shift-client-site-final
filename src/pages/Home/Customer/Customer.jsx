import React, { useEffect, useState } from "react";
import picture from "../../../assets/customer-top.png";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="mt-20 px-4 md:px-12 lg:px-24 text-center">
      {/* 🔹 Top Image */}
      <img className="mx-auto mb-4" src={picture} alt="Customers" />

      {/* 🔹 Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#03373D] font-extrabold mt-6">
        What Our Customers Are Saying
      </h1>

      <p className="text-[#606060] mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      {/* 🔹 Carousel */}
      <div className="mt-16">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="group bg-white/80 backdrop-blur-md
              rounded-2xl p-8 shadow-xl
              w-[90%] sm:w-[70%] md:w-[60%] lg:w-[420px]
              transition-all duration-500 mx-4"
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={item.user_photoURL}
                  alt={item.userName}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover
                  mb-4 border-4 border-[#03373D]"
                />
              </div>

              {/* Review */}
              <p className="italic text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                “{item.review}”
              </p>

              {/* Rating */}
              <p className="text-yellow-500 font-semibold text-sm mb-3">
                ⭐ {item.ratings} / 5
              </p>

              {/* User Info */}
              <div>
                <h4 className="text-[#03373D] font-bold text-sm sm:text-base">
                  {item.userName}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.user_email}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Customer;

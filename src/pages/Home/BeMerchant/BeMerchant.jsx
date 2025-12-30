import React from 'react';
import MerchantPicture from "../../../assets/location-merchant.png";

const BeMerchant = () => {
    return (
          <div
      data-aos="zoom-in-up"
      className=" bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] rounded-4xl p-20 mt-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={MerchantPicture}  className="max-w-sm rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105" />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 text-white">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. ProFast courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
           {/* 🔹 Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
            <button className="btn rounded-full px-8 py-3 text-black font-semibold
              bg-gradient-to-r from-green-400 to-green-600
              hover:from-green-500 hover:to-green-700
              transition-all duration-300 shadow-lg">
              Become A Merchant
            </button>

            <button className="btn rounded-full px-8 py-3 font-semibold
              border border-green-400 text-green-400
              hover:bg-green-600 hover:text-white
              transition-all duration-300 shadow-md">
              Learn More
            </button>
          </div>
            <div/>
        </div>
      </div>
    </div>
    );
};

export default BeMerchant;
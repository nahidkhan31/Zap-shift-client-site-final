import React from "react";

const FAQ = () => {
  return (
    <section className="mt-20 mb-16 px-4 md:px-12 lg:px-24 font-urbanist">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#03373D]">
          Frequently Asked Questions
        </h1>
        <p className="text-[#606060] mt-4 text-sm sm:text-base leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* FAQ Container */}
      <div className="mt-12 max-w-4xl mx-auto space-y-4 min-h-[600px]">

        {/* Item 1 */}
        <div className="collapse collapse-plus bg-white rounded-2xl shadow-md border border-base-200 transition-all duration-300 hover:shadow-xl">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-base sm:text-lg font-semibold text-[#03373D]">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm sm:text-base text-gray-600 leading-relaxed">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. It helps train your muscles to
            stay aligned naturally.
          </div>
        </div>

        {/* Item 2 */}
        <div className="collapse collapse-plus bg-white rounded-2xl shadow-md border border-base-200 transition-all duration-300 hover:shadow-xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-base sm:text-lg font-semibold text-[#03373D]">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm sm:text-base text-gray-600 leading-relaxed">
            Yes, the posture corrector is designed to be adjustable and suitable
            for a wide range of ages and body types. However, individuals with
            specific medical conditions should consult a professional first.
          </div>
        </div>

        {/* Item 3 */}
        <div className="collapse collapse-plus bg-white rounded-2xl shadow-md border border-base-200 transition-all duration-300 hover:shadow-xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-base sm:text-lg font-semibold text-[#03373D]">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm sm:text-base text-gray-600 leading-relaxed">
            Regular use can significantly improve posture and reduce back pain
            caused by poor alignment. It encourages correct posture habits,
            which over time strengthens muscles and relieves strain.
          </div>
        </div>

        {/* Item 4 */}
        <div className="collapse collapse-plus bg-white rounded-2xl shadow-md border border-base-200 transition-all duration-300 hover:shadow-xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-base sm:text-lg font-semibold text-[#03373D]">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm sm:text-base text-gray-600 leading-relaxed">
            Some advanced models include smart features such as vibration alerts
            that notify you when you slouch, helping you correct your posture in
            real time.
          </div>
        </div>

        {/* Item 5 */}
        <div className="collapse collapse-plus bg-white rounded-2xl shadow-md border border-base-200 transition-all duration-300 hover:shadow-xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-base sm:text-lg font-semibold text-[#03373D]">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm sm:text-base text-gray-600 leading-relaxed">
            You can sign up for email or SMS notifications, and we’ll inform you
            as soon as the product becomes available again.
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

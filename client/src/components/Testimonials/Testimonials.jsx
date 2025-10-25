/**
 * Testimonials Component
 * Component hiển thị đánh giá của khách hàng với Swiper carousel
 */

import React from 'react';
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-orange-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Top section with stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
          {/* Left - Top Rated */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-3xl md:text-4xl font-bold text-orange-500">
              Top Rated
            </span>
            <span className="text-gray-600 leading-relaxed">
              Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
            </span>
          </div>

          {/* Middle - Hero Image */}
          <div className="flex justify-center">
            <img
              src={Hero}
              alt="Testimonial Hero"
              className="w-64 md:w-80 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right - Happy Customers */}
          <div className="flex flex-col gap-3 text-center md:text-right">
            <span className="text-5xl md:text-6xl font-bold text-blue-500">
              100k
            </span>
            <span className="text-gray-600 text-lg">
              Happy Customers with us
            </span>
          </div>
        </div>

        {/* Reviews heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 inline-block relative">
            Reviews
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
          </h2>
        </div>

        {/* Testimonials carousel */}
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="pb-12"
        >
          {TestimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Profile image */}
                <div className="flex justify-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-200 shadow-lg"
                  />
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-center leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.comment}"
                </p>

                {/* Divider */}
                <hr className="border-gray-200 mb-4" />

                {/* Name */}
                <span className="text-center font-bold text-gray-800 text-lg">
                  {testimonial.name}
                </span>

                {/* Rating stars */}
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

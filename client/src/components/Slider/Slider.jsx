/**
 * Slider Component
 * Component slider sản phẩm sử dụng Swiper
 */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { SliderProducts } from '../../data/products';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-orange-50">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col md:flex-row items-center gap-6 min-h-[300px]">
              {/* Product info */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <span className="block text-2xl font-bold text-gray-800 mb-2">
                    {slide.name}
                  </span>
                  <span className="block text-sm text-gray-600">
                    {slide.detail}
                  </span>
                </div>
                <span className="text-3xl font-bold text-orange-500">
                  ${slide.price}
                </span>
                <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                  Shop now
                </button>
              </div>

              {/* Product image */}
              <img
                src={slide.img}
                alt={slide.name}
                className="w-40 h-40 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

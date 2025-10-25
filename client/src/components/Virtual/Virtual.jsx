/**
 * Virtual Try-On Component
 * Component cho tính năng thử nghiệm ảo với so sánh before/after
 */

import React from 'react';
import Shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

const Virtual = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="flex flex-col gap-6">
          <span className="text-4xl md:text-5xl font-bold text-gray-800">
            Virtual Try-On
          </span>
          <span className="text-xl md:text-2xl text-gray-700 font-medium">
            Never Buy the wrong Shade Again!
          </span>
          <span className="text-lg text-orange-500 font-semibold cursor-pointer hover:text-orange-600 transition-colors">
            Try Now! →
          </span>
          
          {/* Decorative shade image */}
          <img 
            src={Shade} 
            alt="Shade" 
            className="w-48 mt-4 drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right side - Compare Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-3xl transition-shadow duration-300">
            <ReactCompareImage 
              leftImage={Before}
              rightImage={After}
              sliderLineWidth={3}
              sliderLineColor="#f97316"
              leftImageLabel="Before"
              rightImageLabel="After"
              hover={true}
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full -z-10 opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full -z-10 opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;

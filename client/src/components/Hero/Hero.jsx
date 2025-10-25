/**
 * Hero Component
 * Component hero section với animation và thống kê
 */

import React from 'react';
import HeroImg from '../../assets/hero.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = () => {
  // Cấu hình animation transition
  const transition = { duration: 3, type: 'spring' };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="flex flex-col gap-6">
          <span className="text-orange-500 uppercase text-sm font-semibold tracking-wider">
            skin protection cream
          </span>

          <div className="flex flex-col gap-4">
            <span className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Trendy Collection
            </span>
            <span className="text-gray-600 leading-relaxed">
              Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
            </span>
          </div>
        </div>

        {/* Middle - Hero Image with animations */}
        <div className="relative flex items-center justify-center">
          {/* Blue circle background - animated */}
          <motion.div
            initial={{ bottom: '2rem' }}
            whileInView={{ bottom: '0rem' }}
            transition={transition}
            className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full -z-10"
          ></motion.div>

          {/* Hero image - animated */}
          <motion.img
            transition={transition}
            initial={{ bottom: '-2rem' }}
            whileInView={{ bottom: '0rem' }}
            src={HeroImg}
            alt="Hero Product"
            className="relative w-full max-w-md drop-shadow-2xl"
          />

          {/* Cart notification - animated */}
          <motion.div
            transition={transition}
            initial={{ right: '4%' }}
            whileInView={{ right: '2%' }}
            className="absolute top-8 right-4 md:right-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
          >
            <RiShoppingBagFill className="text-orange-500 text-2xl" />

            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-800">
                Best Signup Offers
              </span>
              <div className="mt-1">
                <BsArrowRight className="text-orange-500" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side - Statistics */}
        <div className="flex flex-col gap-6">
          {/* Monthly Traffic */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl p-6 shadow-lg">
            <span className="text-4xl font-bold block mb-2">1.5m</span>
            <span className="text-sm opacity-90">Monthly Traffic</span>
          </div>

          {/* Happy Customers */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-2xl p-6 shadow-lg">
            <span className="text-4xl font-bold block mb-2">100k</span>
            <span className="text-sm opacity-90">Happy Customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

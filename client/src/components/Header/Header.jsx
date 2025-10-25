/**
 * Header Component
 * Component header với menu responsive và giỏ hàng
 */

import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { CgShoppingBag } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';

const Header = () => {
  // State để quản lý việc hiển thị menu trên mobile
  const [showMenu, setShowMenu] = useState(true);
  
  /**
   * Toggle menu hiển thị/ẩn
   */
  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold text-gray-800">amazon</span>
          </div>

          {/* Right side - Menu & Cart */}
          <div className="flex items-center">
            {/* Hamburger menu button - hiển thị trên mobile */}
            <div 
              className="md:hidden mr-4 cursor-pointer text-2xl text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              <GoThreeBars />
            </div>

            {/* Menu - responsive */}
            <ul 
              className={`${
                showMenu ? 'flex' : 'hidden'
              } md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none items-center gap-4 md:gap-6 p-6 md:p-0`}
            >
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Collections
              </li>
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Brands
              </li>
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors font-medium">
                New
              </li>
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Sales
              </li>
              <li className="cursor-pointer text-gray-700 hover:text-blue-600 transition-colors font-medium">
                ENG
              </li>
              
              {/* Search input */}
              <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all w-full md:w-auto"
                />
              </li>
              
              {/* Shopping cart icon */}
              <li className="relative cursor-pointer">
                <CgShoppingBag className="text-3xl text-gray-700 hover:text-blue-600 transition-colors" />
                {/* Badge cho số lượng sản phẩm trong giỏ */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

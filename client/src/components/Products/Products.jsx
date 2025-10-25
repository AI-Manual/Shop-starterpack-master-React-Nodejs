/**
 * Products Component
 * Component hiển thị danh sách sản phẩm với filter và animation
 */

import React, { useState } from 'react';
import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Products = () => {
  // Auto animate cho smooth transitions
  const [parent] = useAutoAnimate();

  // State quản lý sản phẩm và filter
  const [menuProducts, setMenuProducts] = useState(ProductsData);
  const [activeFilter, setActiveFilter] = useState('all');

  /**
   * Filter sản phẩm theo type
   */
  const filterProducts = (type) => {
    setActiveFilter(type);

    if (type === 'all') {
      setMenuProducts(ProductsData);
    } else {
      const filtered = ProductsData.filter((product) => product.type === type);
      setMenuProducts(filtered);
    }
  };

  /**
   * Component button filter với active state
   */
  const FilterButton = ({ label, type }) => (
    <li
      onClick={() => filterProducts(type)}
      className={`cursor-pointer px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
        activeFilter === type
          ? 'bg-orange-500 text-white shadow-lg'
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </li>
  );

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Decorative plane image */}
      <img 
        src={Plane} 
        alt="Plane" 
        className="w-32 mx-auto mb-8 animate-bounce"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
        Our Featured Products
      </h1>

      <div className="flex flex-col gap-8">
        {/* Filter menu */}
        <ul className="flex flex-wrap justify-center gap-4">
          <FilterButton label="All" type="all" />
          <FilterButton label="Skin Care" type="skin care" />
          <FilterButton label="Conditioners" type="conditioner" />
          <FilterButton label="Foundations" type="foundation" />
        </ul>

        {/* Products grid */}
        <div
          ref={parent}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {menuProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Product image */}
                <div className="flex-1 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product info */}
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold text-gray-800">
                    {product.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    {product.detail}
                  </span>
                  <span className="text-2xl font-bold text-orange-500">
                    ${product.price}
                  </span>
                  
                  {/* Shop button */}
                  <button className="mt-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No products message */}
        {menuProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">Không tìm thấy sản phẩm nào</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

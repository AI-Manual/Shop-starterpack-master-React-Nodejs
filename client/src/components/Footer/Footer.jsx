/**
 * Footer Component
 * Component footer với thông tin liên hệ và links
 */

import React from 'react';
import Logo from '../../assets/logo.png';
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  LinkIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Divider */}
        <hr className="border-gray-700 mb-12" />

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold">amazon</span>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 group cursor-pointer">
                <LocationMarkerIcon className="w-5 h-5 mt-1 flex-shrink-0 text-orange-400 group-hover:text-orange-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  111 north avenue Orlando, FL 32801
                </span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <PhoneIcon className="w-5 h-5 flex-shrink-0 text-orange-400 group-hover:text-orange-300 transition-colors" />
                <a
                  href="tel:352-306-4415"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  352-306-4415
                </a>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <InboxIcon className="w-5 h-5 flex-shrink-0 text-orange-400 group-hover:text-orange-300 transition-colors" />
                <a
                  href="mailto:support@amazon.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  support@amazon.com
                </a>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Account</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 group cursor-pointer">
                <LoginIcon className="w-5 h-5 flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <a
                  href="/signin"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-green-400">Company</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 group cursor-pointer">
                <UserGroupIcon className="w-5 h-5 flex-shrink-0 text-green-400 group-hover:text-green-300 transition-colors" />
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About us
                </a>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Resources</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 group cursor-pointer">
                <LinkIcon className="w-5 h-5 flex-shrink-0 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Safety Privacy & Terms
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <span>Copyright ©2022 by Amazon, Inc.</span>
            <span>All rights reserved.</span>
          </div>
        </div>

        {/* Social media links (optional) */}
        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={() => window.open('https://facebook.com', '_blank')}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            onClick={() => window.open('https://instagram.com', '_blank')}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </button>
          <button
            onClick={() => window.open('https://twitter.com', '_blank')}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import { motion } from 'framer-motion';
import { House } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='relative my-10 py-12 px-12 mx-auto max-w-6xl bg-gray-500 rounded-3xl'>
      <div className='max-w-7xl mx-auto'>
        {/* Top Section - Newsletter */}
        <div className='flex flex-col md:flex-row  justify-between items-start md:items-center gap-6 mb-8'>
          {/* Left - Header */}
          <h2 className='text-2xl md:text-3xl font-bold text-white text-center md:text-left'>
            Discover exclusive real <br />
            estate opportunities
          </h2>

          {/* Right - Email Subscription */}
          <div className='flex items-center bg-white rounded-4xl p-1 gap-2 min-w-[350px]'>
            <input
              type='email'
              placeholder='Enter your email address'
              className='flex-1 px-4 py-2 text-gray-900 bg-transparent outline-none placeholder:text-gray-400'
            />
            <button className='px-5 py-1 bg-black text-white  rounded-4xl hover:bg-gray-900 transition-all duration-300 whitespace-nowrap'>
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className='w-full h-px bg-gray-400 mb-8' />

        <div className='flex flex-row gap-6 '>
          {/*Section on the Left */}
          <div className='flex flex-row gap-6'>
            {/* Section on the Left */}
            <div className='bg-gray-600 rounded-2xl p-6 max-w-md mb-8 flex flex-col justify-between h-full'>
              <div>
                <h3 className='text-2xl font-bold text-white mb-3'>
                  Post a property
                </h3>
                <p className='text-gray-200 mb-6 leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur pretium consectetur
                  nulla est in dui ornare nulla quis.
                </p>

                <div className='flex flex-row gap-3'>
                  <button className='px-3 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-left'>
                    Post a free property
                  </button>

                  <button className='px-3 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 text-left'>
                    Post a paid property
                  </button>
                </div>
              </div>

              {/* Bottom Row */}
              <div className='flex justify-between items-end mt-10'>
                <div className='flex items-center gap-1 text-2xl font-serif text-white'>
                  <House className='w-6 h-6 text-white' /> HouseMarket
                </div>
                <div className='flex gap-3'>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-700 flex items-center justify-center transition-colors'
                  >
                    <span className='text-white font-bold'>X</span>
                  </a>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-700 flex items-center justify-center transition-colors'
                  >
                    <span className='text-white font-bold'>in</span>
                  </a>
                  <a
                    href='#'
                    className='w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-700 flex items-center justify-center transition-colors'
                  >
                    <span className='text-white font-bold'>f</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Footer Links */}
          <div className='flex items-center grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Column 1 - Company Info */}
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>Company</h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>Services</h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Buy Property
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Sell Property
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Rent Property
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>Resources</h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h3 className='text-xl font-bold text-white mb-4'>Legal</h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-200 hover:text-white transition-colors'
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
        </div>
        <div className='mt-8 pt-6 border-t border-gray-400 text-center'>
          <p className='text-gray-200'>
            © 2024 Real Estate Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

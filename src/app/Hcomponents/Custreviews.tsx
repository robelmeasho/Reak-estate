'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Matt Cannon',
    location: 'New York, NY',
    image: '/Matt.jpg',
    title: 'Experience the best in comfort with high-quality properties listed',
    review:
      'Lorem ipsum dolor sit amet consectetur nunc non ultrices sed eu enim nisi semper et sit condimentum accumsan id quis pretium sit arcu vel hendrerit porttitor massa nisl.',
  },
  {
    name: 'Sarah Johnson',
    location: 'Los Angeles, CA',
    image: '/Sarah.jpg',
    title: 'Found my dream home in just two weeks',
    review:
      'Lorem ipsum dolor sit amet consectetur nunc non ultrices sed eu enim nisi semper et sit condimentum accumsan id quis pretium sit arcu vel hendrerit porttitor massa nisl.',
  },
  {
    name: 'David Martinez',
    location: 'San Francisco, CA',
    image: '/Dave.jpg',
    title: 'Professional service and amazing properties',
    review:
      'Lorem ipsum dolor sit amet consectetur nunc non ultrices sed eu enim nisi semper et sit condimentum accumsan id quis pretium sit arcu vel hendrerit porttitor massa nisl.',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='relative py-20 px-6 md:px-20 text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Flex Row Container */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16'>
          {/* Left Side - Header */}
          <motion.div
            className='flex-shrink-0 lg:max-w-md'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent'>
              What our customers say about us
            </h2>
            <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur pretium consectetur nulla
              est in dui ornare nulla quis diam consequat habitant nam viverra
              netus.
            </p>
          </motion.div>

          {/* Right Side - Testimonial Card */}
          <div className='flex-1 w-full lg:w-auto'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className='bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl'
              >
                {/* Profile Section */}
                <div className='flex items-center gap-4 mb-6'>
                  {/* Rounded Picture */}
                  <div className='relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber-500/50'>
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className='w-full h-full object-cover'
                    />
                  </div>

                  {/* Name and Location */}
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className='text-sm text-gray-400'>
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h4 className='text-lg font-semibold text-amber-400 mb-4'>
                  "{testimonials[activeIndex].title}"
                </h4>

                {/* Review */}
                <p className='text-gray-300 leading-relaxed'>
                  {testimonials[activeIndex].review}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className='flex justify-center gap-3 mt-6'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-10 h-3 bg-amber-500'
                      : 'w-3 h-3 bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

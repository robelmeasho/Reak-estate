'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Bath,
  Bed,
  Car,
  MapPin,
} from 'lucide-react';

const properties = [
  {
    image: '/dea.jpg',
    title: 'Luxury Loft in San Francisco',
    description:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui.',
    address: '2238 Stradella Rd, San Francisco',
    status: 'For rent',
    sqft: 2553,
    bathrooms: 3,
    bedrooms: 2,
    parking: 6,
  },
  {
    image: '/SunD.jpg',
    title: 'Home in Los Angeles Heart',
    description:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui.',
    address: '2596 El Segundo, Los Angeles',
    status: 'For rent',
    sqft: 4821,
    bathrooms: 5,
    bedrooms: 6,
    parking: 5,
  },
  {
    image: '/apart.jpg',
    title: 'Modern Loft in San Francisco',
    description:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui.',
    address: '3335 21 St, San Francisco',
    status: 'For rent',
    sqft: 1334,
    bathrooms: 1,
    bedrooms: 2,
    parking: 1,
  },
  {
    image: '/LA.jpg',
    title: 'Beautiful Mansion, San Diego',
    description:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui.',
    address: '90071, South Grand Avenue, San Diego',
    status: 'For rent',
    sqft: 8392,
    bathrooms: 4,
    bedrooms: 6,
    parking: 4,
  },
  {
    image: '/beach.jpg',
    title: 'Beachfront Villa, Malibu',
    description:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui.',
    address: '1234 Pacific Coast Highway, Malibu',
    status: 'For rent',
    sqft: 3500,
    bathrooms: 4,
    bedrooms: 5,
    parking: 3,
  },
  {
    image: '/Mans.jpg',
    title: 'Modern Mansion, Montreal',
    description:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui.',
    address: '789 Park Avenue, New York',
    status: 'For rent',
    sqft: 2800,
    bathrooms: 3,
    bedrooms: 3,
    parking: 2,
  },
];

const PropertyCard = ({ property }) => (
  <motion.div
    className='bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-amber-500/50 hover:-translate-y-1 group'
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
  >
    {/* Image */}
    <div className='relative h-64 overflow-hidden'>
      <img
        src={property.image}
        alt={property.title}
        className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
        loading='lazy'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />

      {/* Status Badge */}
      <div className='absolute top-4 right-4'>
        <span className='px-3 py-1.5 bg-amber-500 text-gray-900 font-semibold text-xs rounded-lg shadow-lg backdrop-blur-sm'>
          {property.status}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className='p-6'>
      {/* Details Bar */}
      <div className='bg-gray-900/80 backdrop-blur-sm rounded-xl p-3 mb-4 grid grid-cols-4 gap-2 shadow-lg border border-white/5'>
        <div className='flex flex-col items-center'>
          <Maximize2
            className='w-4 h-4 text-amber-500 mb-1'
            strokeWidth={2.5}
          />
          <span className='text-white font-bold text-sm'>
            {property.sqft.toLocaleString()}
          </span>
          <span className='text-gray-400 text-[10px] font-medium'>sqft</span>
        </div>
        <div className='flex flex-col items-center'>
          <Bath className='w-4 h-4 text-amber-500 mb-1' strokeWidth={2.5} />
          <span className='text-white font-bold text-sm'>
            {property.bathrooms}
          </span>
          <span className='text-gray-400 text-[10px] font-medium'>Bath</span>
        </div>
        <div className='flex flex-col items-center'>
          <Bed className='w-4 h-4 text-amber-500 mb-1' strokeWidth={2.5} />
          <span className='text-white font-bold text-sm'>
            {property.bedrooms}
          </span>
          <span className='text-gray-400 text-[10px] font-medium'>Beds</span>
        </div>
        <div className='flex flex-col items-center'>
          <Car className='w-4 h-4 text-amber-500 mb-1' strokeWidth={2.5} />
          <span className='text-white font-bold text-sm'>
            {property.parking}
          </span>
          <span className='text-gray-400 text-[10px] font-medium'>Cars</span>
        </div>
      </div>

      {/* Title */}
      <h3 className='text-xl font-bold mb-2 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent line-clamp-1 group-hover:from-yellow-300 group-hover:via-amber-400 group-hover:to-amber-600 transition-all duration-300'>
        {property.title}
      </h3>

      {/* Description */}
      <p className='text-sm text-gray-300 mb-3 line-clamp-2 leading-relaxed'>
        {property.description}
      </p>

      {/* Address */}
      <div className='flex items-start gap-2 mb-4'>
        <MapPin
          className='w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0'
          strokeWidth={2.5}
        />
        <span className='text-gray-300 text-xs line-clamp-1'>
          {property.address}
        </span>
      </div>

      {/* Button */}
      <button className='w-full py-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-gray-900 font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:scale-[1.02] active:scale-[0.98]'>
        View Details
      </button>
    </div>
  </motion.div>
);

export default function PropertyCarousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentPage((prev) => {
      const next = prev + newDirection;
      if (next < 0) return totalPages - 1;
      if (next >= totalPages) return 0;
      return next;
    });
  };

  const getCurrentProperties = () => {
    const start = currentPage * itemsPerPage;
    return properties.slice(start, start + itemsPerPage);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className='relative py-20 px-6 md:px-20 text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent'>
            Browse All Properties
          </h2>
          <p className='text-base md:text-lg text-gray-300 max-w-2xl mx-auto'>
            Discover your perfect home from our curated collection of premium
            properties
          </p>
        </motion.div>

        {/* Carousel */}
        <div className='relative'>
          <div className='overflow-hidden'>
            <AnimatePresence initial={false} custom={direction} mode='wait'>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 200, damping: 20 },
                  opacity: { duration: 0.8 },
                }}
                className='grid md:grid-cols-2 gap-6'
              >
                {getCurrentProperties().map((property, i) => (
                  <PropertyCard
                    key={`${currentPage}-${i}`}
                    property={property}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className='flex items-center justify-between mt-10'>
            {/* Previous Button */}
            <motion.button
              onClick={() => paginate(-1)}
              className='w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label='Previous properties'
            >
              <ChevronLeft
                className='w-6 h-6 text-gray-900'
                strokeWidth={2.5}
              />
            </motion.button>

            {/* Dots Navigation */}
            <div className='flex gap-2'>
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'w-8 bg-amber-500'
                      : 'w-2 bg-gray-500 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={() => paginate(1)}
              className='w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label='Next properties'
            >
              <ChevronRight
                className='w-6 h-6 text-gray-900'
                strokeWidth={2.5}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

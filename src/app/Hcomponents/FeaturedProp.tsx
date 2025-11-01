'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Key, Maximize2, Bath, Car, MapPin } from 'lucide-react';

const properties = [
  {
    image: '/inter.jpg',
    title: 'Luxury Loft in San Francisco',
    description:
      'Experience the epitome of urban living in this modern loft, blending sleek design with comfort.',
    address: '123 Market Street, San Francisco, CA 94103',
    rent: '$4,500',
    sqft: 3850,
    bathrooms: 5,
    parking: 4,
  },
  {
    image: '/SunD.jpg',
    title: 'Home in Los Angeles Heart',
    description:
      'A contemporary home featuring open spaces, elegant finishes, and a serene environment.',
    address: '456 Sunset Blvd, Los Angeles, CA 90028',
    rent: '$5,200',
    sqft: 7600,
    bathrooms: 6,
    parking: 6,
  },
];

export default function WideRangeSection() {
  return (
    <section className='relative py-24 px-6 text-white overflow-hidden'>
      {/* Decorative Background Gradient */}
      <div className='absolute inset-0 pointer-events-none' />

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent'>
            Discover Our Exceptional Properties
          </h2>
          <p className='text-lg md:text-xl text-gray-300 max-w-3xl mx-auto'>
            Handpicked homes that redefine modern luxury — where architecture,
            comfort, and design come together seamlessly.
          </p>
        </motion.div>

        {/* Property Cards */}
        <div className='space-y-20'>
          {properties.map((property, i) => (
            <motion.div
              key={i}
              className={`grid md:grid-cols-2 items-stretch rounded-3xl overflow-hidden shadow-xl bg-gray-900/50 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {/* Image Section */}
              <div className='relative h-80 md:h-[500px] w-full'>
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className='object-cover object-center transition-transform duration-700 hover:scale-110'
                  priority={i === 0}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
              </div>

              {/* Content Section */}
              <div className='flex flex-col justify-center p-10 md:p-14 text-left'>
                {/* Property Details Bar */}
                <div className='bg-white rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-lg'>
                  {/* Rent */}
                  <div className='flex items-center gap-2'>
                    <Key className='w-5 h-5 text-amber-600' />
                    <span className='text-gray-900 font-semibold text-sm md:text-base'>
                      {property.rent}/mo
                    </span>
                  </div>

                  {/* Square Feet */}
                  <div className='flex items-center gap-2'>
                    <Maximize2 className='w-5 h-5 text-amber-600' />
                    <span className='text-gray-900 font-semibold text-sm md:text-base'>
                      {property.sqft} sqft
                    </span>
                  </div>

                  {/* Bathrooms */}
                  <div className='flex items-center gap-2'>
                    <Bath className='w-5 h-5 text-amber-600' />
                    <span className='text-gray-900 font-semibold text-sm md:text-base'>
                      {property.bathrooms}
                    </span>
                  </div>

                  {/* Parking */}
                  <div className='flex items-center gap-2'>
                    <Car className='w-5 h-5 text-amber-600' />
                    <span className='text-gray-900 font-semibold text-sm md:text-base'>
                      {property.parking}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent'>
                  {property.title}
                </h3>

                {/* Description */}
                <p className='text-lg text-gray-300 leading-relaxed mb-6'>
                  {property.description}
                </p>

                {/* Address */}
                <div className='flex items-start gap-2 mb-6'>
                  <MapPin className='w-5 h-5 text-amber-400 mt-1 flex-shrink-0' />
                  <span className='text-gray-300 text-base'>
                    {property.address}
                  </span>
                </div>

                {/* View Details Button */}
                <button className='self-start mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-600 text-gray-900 font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-md'>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

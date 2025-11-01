'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Search, Calendar, Home } from 'lucide-react';

export default function StepsSection() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Browse the properties in your location',
      description:
        'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui ornare.',
    },
    {
      icon: Calendar,
      number: '02',
      title: 'Schedule a visit with one of our agents',
      description:
        'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui ornare.',
    },
    {
      icon: Home,
      number: '03',
      title: 'Get your dream house in a month, or less',
      description:
        'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui ornare.',
    },
  ];

  return (
    <section className='relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-12 md:mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-4'>
            Find your perfect home as easy as 1, 2, 3
          </h2>
          <p className='text-base sm:text-lg text-gray-300 max-w-3xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est
            in dui ornare nulla quis diam consequat habitant nam viverra netus.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-start'>
          {/* Image - Left Side */}
          <motion.div
            className='relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 lg:sticky lg:top-24'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src='/Bliss.jpg'
              alt='Modern house exterior'
              fill
              className='object-cover'
            />
          </motion.div>

          {/* Steps - Right Side */}
          <div className='flex flex-col justify-between order-1 lg:order- min-h-[600px] lg:min-h-full'>
            <div className='space-y-0'>
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.number}>
                    <motion.div
                      className='flex gap-6 py-12'
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {/* Step Icon */}
                      <div className='flex-shrink-0'>
                        <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center shadow-lg'>
                          <IconComponent
                            className='w-8 h-8 sm:w-10 sm:h-10 text-white'
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className='flex-1 pt-2'>
                        <h3 className='text-xl sm:text-2xl font-bold text-white mb-2'>
                          Step {step.number}
                        </h3>
                        <h4 className='text-lg sm:text-xl font-semibold text-gray-200 mb-3'>
                          {step.title}
                        </h4>
                        <p className='text-gray-300 text-sm sm:text-base leading-relaxed'>
                          {step.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Separator Line */}
                    {index < steps.length - 1 && (
                      <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent' />
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              className='pt-8 flex justify-start'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className='px-10 py-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105'>
                Browse Properties
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

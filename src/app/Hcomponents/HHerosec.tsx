'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className='relative min-h-screen flex items-center justify-center overflow-hidden mt-10 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16'
      aria-label='Hero section'
    >
      {/* Image Container with Content Inside */}
      <motion.div
        className='relative w-full max-w-[98%] sm:max-w-[96%] md:max-w-[94%] lg:max-w-[1800px] xl:max-w-[1700px] aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl'
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}
      >
        {/* Background Image */}
        <Image
          src='/1stHomep.jpg'
          alt=''
          fill
          className='object-cover object-center'
          priority
          sizes='(max-width: 640px) 98vw, (max-width: 768px) 96vw, (max-width: 1024px) 94vw, 2000px'
        />

        {/* Gradient Overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent' />

        {/* Heading - Top Left */}
        <motion.div
          className='absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:left-12 xl:top-16 xl:left-16 max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%] xl:max-w-[600px]'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-100 via-grey-300 to-gray-500 text-transparent bg-clip-text leading-tight'>
            Your Dream Home Awaits
          </h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 text-white/95 font-medium drop-shadow-lg'>
            Explore handpicked properties designed for comfort, style, and
            modern living.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

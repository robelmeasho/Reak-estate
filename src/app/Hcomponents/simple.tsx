'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className='relative py-20 px-6 md:px-20 text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Container with Background Image */}
        <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
          {/* Background Image */}
          <div className='absolute inset-0'>
            <img
              src='/cabin.jpg'
              alt='Dream home background'
              className='w-full h-full object-cover'
            />
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40' />
          </div>

          {/* Content - Flex Row */}
          <div className='relative z-10 flex flex-row justify-between items-center gap-8 p-12 md:p-16'>
            {/* Left Side - Content */}
            <motion.div
              className='flex-1 flex flex-col items-start text-left max-w-2xl'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Header */}
              <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent'>
                Explore your dream home today
              </h2>

              {/* Description */}
              <p className='text-base md:text-lg text-gray-200 mb-8 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur vitae commodo nunc donec scelerisque nulla arcu lacus risus eu nulla enim ultricies cursus in augue urna vitae curabitur.
              </p>
            </motion.div>

            {/* Right Side - Buttons */}
            <motion.div
              className='flex flex-col gap-4 items-end'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className='px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 whitespace-nowrap'>
                Browse all properties
              </button>
              <button className='px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/50 transform hover:scale-105 whitespace-nowrap'>
                Start exploring
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
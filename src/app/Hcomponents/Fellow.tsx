'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className='relative py-20 px-6 md:px-20 text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Container with Background Image */}
        <div className='relative h-[450px] md:h-[600px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl'>
          {/* Background Image */}
          <div className='absolute inset-0'>
            <Image
              src='/Romantic.jpg'
              alt='Dream home background'
              fill
              priority
              className='object-cover'
            />

            {/* Animated Gradient Overlay */}
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40'
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            />
          </div>

          {/* Content Section */}
          <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 p-12 md:p-16'>
            {/* Left Side - Text Content */}
            <motion.div
              className='flex-1 flex flex-col items-start text-left max-w-2xl'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-md'>
                Explore your dream home today
              </h2>

              <p className='text-base md:text-lg text-gray-100 drop-shadow-md mb-8 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur vitae commodo nunc donec
                scelerisque nulla arcu lacus risus eu nulla enim ultricies
                cursus in augue urna vitae curabitur.
              </p>
            </motion.div>

            {/* Right Side - Buttons */}
            <motion.div
              className='flex flex-row gap-4 items-center md:items-end'
              role='group'
              aria-label='Call to actions'
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

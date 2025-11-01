import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section
      className='relative min-h-screen flex items-center justify-center overflow-hidden mt-10 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16'
      aria-label='Hero section'
    >
      {/* Image Container with Content Inside */}
      <motion.div
        className='relative w-full max-w-[98%] sm:max-w-[96%] md:max-w-[94%] lg:max-w-[1800px] xl:max-w-[1000px] aspect-[12/12] rounded-3xl overflow-hidden shadow-2xl'
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}
      >
        <Image
          src='/Inside.jpg'
          alt='Dream home interior'
          fill
          className='object-cover object-center'
          priority
          sizes='(max-width: 640px) 98vw, (max-width: 768px) 96vw, (max-width: 1024px) 94vw, 2000px'
        />

        {/* Overlay Gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 ' />

        {/* Heading - Top Left */}
        <motion.div
          className='ml-100  absolute bottom-6 left-6 mt-3 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 lg:bottom-12 lg:left-12 xl:bottom-12 xl:left-16 max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%] xl:max-w-[600px]'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h1 className=' font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-3xl font-bold  to-white  bg-clip-text leading-tight'>
            Here at HomeDream
          </h1>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-2 text-white/95 font-medium drop-shadow-lg'>
            we believe finding a home is more than a transaction — it’s a
            life-changing experience. Our team of passionate local experts is
            dedicated to guiding you through every step, from the first search
            to the final handshake. With deep market knowledge, honest advice,
            and a commitment to your goals, we make the journey to your new home
            smooth, transparent, and even enjoyable.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

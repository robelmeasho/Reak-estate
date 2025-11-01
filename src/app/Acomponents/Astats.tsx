'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div>
      <main className='pt-32'>
        {/* Hero Section */}
        <section className='pb-16 md:pb-24'>
          <div className='container mx-auto px-6'>
            <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
              {/* LEFT SIDE — Heading, Paragraph, Button, Stats */}
              <motion.div
                className='flex-1 space-y-10'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                  hidden: {},
                }}
              >
                {/* Heading */}
                <motion.h2
                  className='text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6'
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: 'easeOut' },
                    },
                  }}
                >
                  About Our Real Estate Firm
                </motion.h2>

                {/* Paragraphs */}
                <div className='space-y-4 text-lg text-muted-foreground'>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                      },
                    }}
                  >
                    At our firm, we believe that finding a home is more than
                    just a transaction—it’s about discovering a space where life
                    happens, memories are made, and dreams take shape.
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                      },
                    }}
                  >
                    With years of experience and a passion for exceptional
                    service, we guide families and individuals toward homes that
                    truly feel like their own.
                  </motion.p>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                      },
                    }}
                  >
                    From cozy urban apartments to spacious family estates, we
                    pride ourselves on connecting people with spaces that fit
                    their lifestyle and aspirations.
                  </motion.p>
                  <motion.button
                    className='mt-4 px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-all duration-300'
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                      },
                    }}
                  >
                    Start exploring
                  </motion.button>
                </div>

                {/* Stats */}
                <motion.div
                  className='flex flex-row space-x-12 text-black pt-8'
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.3 } },
                  }}
                >
                  <motion.div
                    className='space-y-2'
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                      },
                    }}
                  >
                    <p className='text-sm text-muted-foreground mb-2'>
                      Homes purchased
                    </p>
                    <h3 className='text-6xl font-bold mb-2'>200+</h3>
                    <p className='text-muted-foreground'>
                      Helping hundreds of families <br />
                      find their dream homes each year.
                    </p>
                  </motion.div>
                  <motion.div
                    className='space-y-2'
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                      },
                    }}
                  >
                    <p className='text-sm text-muted-foreground mb-2'>
                      Published properties
                    </p>
                    <h3 className='text-6xl font-bold mb-2'>10K+</h3>
                    <p className='text-muted-foreground'>
                      Thousands of verified listings <br />
                      across multiple locations.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE — Images */}
              <motion.div
                className='flex-1 space-y-4'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                  hidden: {},
                }}
              >
                {/* Top Image */}
                <motion.div
                  className='group relative w-full h-[400px] overflow-hidden rounded-3xl'
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8 },
                    },
                  }}
                >
                  <Image
                    src='/About/Houseonview.jpg'
                    alt='Main house view'
                    fill
                    className='object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105'
                    style={{ objectPosition: 'center 60%' }}
                    priority
                  />
                  <div className='absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent group-hover:bg-black/20 transition-colors duration-700'></div>
                </motion.div>

                {/* Bottom Two Images */}
                <motion.div
                  className='flex gap-4'
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8 },
                    },
                  }}
                >
                  <motion.div
                    className='group relative w-1/2 h-[350px] overflow-hidden rounded-2xl'
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                      },
                    }}
                  >
                    <Image
                      src='/About/Outside.jpg'
                      alt='Property on a hillside'
                      fill
                      className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent group-hover:bg-black/20 transition-colors duration-700'></div>
                  </motion.div>
                  <motion.div
                    className='group relative w-1/2 h-[350px] overflow-hidden rounded-2xl'
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                      },
                    }}
                  >
                    <Image
                      src='/About/InsideHouseView.jpg'
                      alt='Property with steps'
                      fill
                      className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700'></div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

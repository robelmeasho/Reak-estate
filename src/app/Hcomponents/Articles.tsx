'use client';

import { motion } from 'framer-motion';
import { Star, Newspaper, FileText, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'Latest Market Trends in Real Estate',
    icon: Newspaper,
    date: 'Oct 20, 2024',
  },
  {
    title: 'First Time Buyers Guide to a Perfect Home',
    icon: FileText,
    date: 'Oct 18, 2024',
  },
  {
    title: 'How to Stage Your Home for Sale',
    icon: FileText,
    date: 'Oct 15, 2024',
  },
];

export default function BlogArticlesSection() {
  return (
    <section className='relative py-20 px-6 md:px-20 text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Header - Centered */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent'>
            Read our latest articles
          </h2>
          <p className='text-base md:text-lg text-gray-300 max-w-3xl mx-auto'>
            Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est
            in dui ornare nulla quis diam consequat habitant nam viverra netus.
          </p>
        </motion.div>

        {/* Content - Flex Row */}
        <div className='flex flex-row gap-12 lg:gap-16 items-center'>
          {/* Left Side - Featured Article with Image */}
          <motion.div
            className='flex-[2.4] relative h-[550px] rounded-2xl overflow-hidden shadow-2xl group'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Image */}
            <img
              src='/cabin.jpg'
              alt='Interior design ideas'
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            />

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent' />

            {/* Content - Bottom Left */}
            <div className='absolute bottom-6 left-6 p-2 md:p-6 rounded-xl max-w-sm bg-white/10 backdrop-blur-md border border-white/20'>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-3'>
                Here's some ideas for interior design
              </h3>
              <p className='text-gray-300 text-sm md:text-base mb-4 max-w-md'>
                Lorem ipsum dolor sit amet consectetur pretium consectetur nulla
                est in dui ornare.
              </p>

              {/* Resources Badge and Date */}
              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2 px-3 py-1.5 bg-gray-800/80 backdrop-blur-sm rounded-lg'>
                  <Star
                    className='w-4 h-4 text-amber-400'
                    fill='currentColor'
                  />
                  <span className='text-white text-sm font-medium'>
                    Resources
                  </span>
                </div>
                <div className='flex items-center gap-2 text-gray-300 text-sm'>
                  <Calendar className='w-4 h-4' />
                  <span>Oct 22, 2024</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Article List */}
          <div className='flex-1 flex flex-col justify-center space-y-5'>
            {articles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <div key={index}>
                  <motion.div
                    className='py-8 cursor-pointer group'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    {/* Title */}
                    <h4 className='text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300 leading-snug'>
                      {article.title}
                    </h4>

                    {/* Icon and Date - Like Resources Badge */}
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center gap-2 px-3 py-2 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-white/5'>
                        <IconComponent
                          className='w-4 h-4 text-amber-400'
                          strokeWidth={2.5}
                        />
                        <span className='text-white text-sm font-semibold'>
                          {article.icon === Newspaper ? 'News' : 'Articles'}
                        </span>
                      </div>
                      <div className='flex items-center gap-2 text-gray-400 text-sm font-medium'>
                        <Calendar className='w-4 h-4' strokeWidth={2} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Separator Line */}
                  {index < articles.length && (
                    <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent my-2' />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

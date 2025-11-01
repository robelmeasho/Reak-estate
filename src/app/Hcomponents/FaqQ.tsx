'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How can I post my house for sale?',
    answer:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui ornare nulla quis diam consequat habitant nam viverra netus ornare pretium.',
  },
  {
    question: 'What is your realtor sale commission?',
    answer:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui ornare nulla quis diam consequat habitant nam viverra netus ornare pretium.',
  },
  {
    question: 'Which type of house do you take for promoting?',
    answer:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui ornare nulla quis diam consequat habitant nam viverra netus ornare pretium.',
  },
  {
    question: "What's the average time to sell a house?",
    answer:
      'Lorem ipsum dolor sit amet consectetur pretium consectetur nulla est in dui ornare nulla quis diam consequat habitant nam viverra netus ornare pretium.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='relative py-20 px-6 md:px-20 text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-16 items-start'>
          {/* Left Side */}
          <div className='flex-shrink-0 lg:w-96'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent leading-tight'>
              Any questions?
            </h2>
            <p className='text-base md:text-lg text-gray-300 leading-relaxed mb-8'>
              Lorem ipsum dolor sit amet consectetur pretium consectetur nulla
              est in dui ornare nulla quis diam consequat habitant nam viverra
              netus.
            </p>
            <button className='px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-lg'>
              Contact Us
            </button>
          </div>

          {/* Right Side */}
          <div className='flex-1 max-w-3xl space-y-3'>
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full flex items-center justify-between p-5 bg-gray-800/60 backdrop-blur-md border border-white/10 rounded-lg hover:border-amber-500/50 transition-all duration-300 group'
                >
                  <span className='text-base md:text-lg font-semibold text-white text-left group-hover:text-amber-400 transition-colors duration-300'>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    strokeWidth={2.5}
                  />
                </button>

                {openIndex === index && (
                  <div className='p-5 bg-gray-900/40 backdrop-blur-sm border border-white/5 rounded-lg mt-2'>
                    <p className='text-gray-300 leading-relaxed text-sm md:text-base'>
                      {faq.answer}
                    </p>
                  </div>
                )}

                {index < faqs.length - 1 && (
                  <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent my-3' />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

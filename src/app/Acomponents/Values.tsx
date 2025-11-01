'use client';
import { Heart, Shield, Award, Users, Lock, Zap } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    text: 'We approach every project with genuine passion, ensuring each client finds a home that resonates with their lifestyle and dreams.',
  },
  {
    icon: Shield,
    title: 'Comfort',
    text: 'We prioritize comfort and ease in every step of the buying or selling process, making your journey seamless and stress-free.',
  },
  {
    icon: Award,
    title: 'Excellence',
    text: 'Our commitment to excellence guarantees top-notch service, attention to detail, and outstanding results for every client.',
  },
  {
    icon: Users,
    title: 'Community',
    text: 'We foster strong community connections, helping clients not only find homes but also a supportive neighborhood.',
  },
  {
    icon: Lock,
    title: 'Safety',
    text: 'Your safety and security are our top priorities, from property inspections to secure transactions.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    text: 'We leverage the latest technology and innovative approaches to provide smarter solutions in real estate.',
  },
];

export default function ValuesSection() {
  return (
    <section className='py-1  md:py-24 bg-gradient-to-tr from-gray-500 to-gray-950'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center gap-12'>
        {/* Left Column - Image */}
        <div className='md:w-1/2 h-[600px] relative rounded-xl overflow-hidden'>
          <Image
            src='/About/fam.jpg' // replace with your image
            alt='Illustration of values'
            fill
            className='object-cover'
          />
        </div>

        {/* Right Column - Text */}
        <div className='md:w-1/2 space-y-8'>
          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            The values that drive everything we do
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {values.map((value) => (
              <div key={value.title} className='space-y-3'>
                <div className='w-12 h-12 rounded-full bg-white/20 flex items-center justify-center'>
                  <value.icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-xl font-bold text-white'>{value.title}</h3>
                <p className='text-sm text-white/80'>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

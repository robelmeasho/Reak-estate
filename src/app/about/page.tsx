'use client';

import Footer from '../Hcomponents/Footer';
import Astats from '../Acomponents/Astats';
import ValuesSection from '../Acomponents/Values';

export default function About() {
  return (
    <main className=' min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-gray-800 to-gray-800 text-white'>
      <section>
        <Astats />
        <ValuesSection />
        <Footer />
      </section>
    </main>
  );
}

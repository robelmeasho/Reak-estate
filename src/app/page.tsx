'use client';
import StepsSection from './Hcomponents/Steps';
import HHerosec from './Hcomponents/HHerosec';
import VideoSection from './Hcomponents/Video';
import FeatureSection from './Hcomponents/FeaturedProp';
import Slide from './Hcomponents/Slide';
import Cust from './Hcomponents/Custreviews';
import Fellow from './Hcomponents/Fellow';
import ArticlesSection from './Hcomponents/Articles';
import FAQSection from './Hcomponents/FaqQ';
import Footer from "./Hcomponents/Footer"

export default function HomePage() {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-b from-gray-00 via-gray-700 to-gray-900 text-white'>
      {/* Navbar could go here later */}

      {/* Hero Section */}
      <section id='hero' className='mt-2'>
        <HHerosec />
        <StepsSection />
        <VideoSection />
        <FeatureSection />
        <Slide />
        <Cust />
        <Fellow />
        <ArticlesSection />
        <FAQSection />
        <Footer />
      </section>

      {/* Future sections */}
      {/* <section id="features">...</section> */}
      {/* <section id="contact">...</section> */}
    </main>
  );
}

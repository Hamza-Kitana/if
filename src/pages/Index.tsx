import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutFounder from '@/components/AboutFounder';
import Services from '@/components/Services';
import Features from '@/components/Features';
import VisionMission from '@/components/VisionMission';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {!isLoading && (
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <AboutFounder />
            <Services />
            <Features />
            <VisionMission />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
};

export default Index;

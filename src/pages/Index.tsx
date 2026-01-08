import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Promotions from '@/components/Promotions';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero />
          <Features />
        </section>
        <section id="promotions">
          <Promotions />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contacts">
          <Contacts />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

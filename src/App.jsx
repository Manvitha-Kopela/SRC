import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TeamCarousel from './components/TeamCarousel';
import CouncilGrid from './components/CouncilGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TeamCarousel />
        <CouncilGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

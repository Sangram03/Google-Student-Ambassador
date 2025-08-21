import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import About from './components/About';
import Benefits from './components/Benefits';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Team/>
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
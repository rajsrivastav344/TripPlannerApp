import React, { useState, useEffect } from 'react';
import Andn from '../components/Andn';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import About from '../components/About';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (showIntro) return <Andn />;

  return (
    <div className='container-fluid'>
      <div className="row"><Navbar /></div>
      <div className="row"><About /></div>
      <div className="row"><Slider /></div>
      <div className="row"><Footer /></div>
    </div>
  );
}

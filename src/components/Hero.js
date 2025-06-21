import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const heroImages = [
  '/images/car01.jpg',
  '/images/car02.jpg',
  '/images/car03.jpg',
  '/images/car04.jpg',
  '/images/car05.jpg',
];

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  const goToImage = (index) => {
    setImageIndex(index);
  };

  return (
    <section 
      id="home" 
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="hero-bg"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${heroImages[imageIndex]})` }}
        />
      </AnimatePresence>
      <div className="hero-overlay"></div>
      
      <button 
        className="hero-nav hero-nav-prev" 
        onClick={prevImage}
        aria-label="Previous image"
      >
        <FaChevronLeft size={24} />
      </button>
      <button 
        className="hero-nav hero-nav-next" 
        onClick={nextImage}
        aria-label="Next image"
      >
        <FaChevronRight size={24} />
      </button>

      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === imageIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
        >
          Drive With Confidence. We Deliver Nationwide.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-subtitle"
        >
          T.M Automobiles specializes in automobile importation and sales across Nigeria.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          href="https://wa.me/2349023681835"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
        >
          <FaWhatsapp style={{ marginRight: '0.75rem' }} size={20}/>
          Message Us on WhatsApp
        </motion.a>
      </div>
    </section>
  );
};

export default Hero; 
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="about-image-container"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/car02.jpg`}
            alt="TM Automobiles Showroom"
            className="about-image"
          />
        </motion.div>
        <div className="about-content">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="about-title"
          >
            About T.M Automobiles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="about-text"
          >
            T.M Automobiles, based in Lagos but delivers nationwide, specializes in the direct importation and sale of high-quality vehicles.
            We are committed to providing our clients with a seamless and transparent car-buying experience,
            offering a curated selection of reliable and pristine automobiles. Our national delivery service ensures
            that your dream car is delivered to your doorstep, anywhere in Nigeria.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About; 
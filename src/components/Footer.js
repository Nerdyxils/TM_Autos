import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="footer-container"
      >
        <div className="footer-socials">
          <a href="https://www.instagram.com/t.m_automobiles?igsh=MTg3ZGo0MG92bnF5bQ==" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaInstagram size={28} />
          </a>
          <a href="https://wa.me/2349023681835" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <FaWhatsapp size={28} />
          </a>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} T.M Automobiles. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer; 
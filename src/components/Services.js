import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaShippingFast, FaHandshake, FaTools, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const services = [
  {
    icon: <FaCar size={40} />,
    title: "Vehicle Importation",
    description: "We handle the complete importation process from sourcing to delivery, ensuring compliance with all Nigerian customs regulations.",
    features: ["Custom clearance", "Documentation", "Quality assurance", "Timely delivery"]
  },
  {
    icon: <FaShippingFast size={40} />,
    title: "Nationwide Delivery",
    description: "Fast and secure delivery services across all 36 states of Nigeria with real-time tracking and insurance coverage.",
    features: ["Door-to-door delivery", "Real-time tracking", "Insurance coverage", "Professional handling"]
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Financing Solutions",
    description: "Flexible financing options to make your dream car affordable with competitive rates and quick approval processes.",
    features: ["Flexible payment plans", "Quick approval", "Competitive rates", "No hidden fees"]
  },
  {
    icon: <FaTools size={40} />,
    title: "After-Sales Support",
    description: "Comprehensive maintenance and support services to keep your vehicle in perfect condition long after purchase.",
    features: ["Warranty coverage", "Maintenance services", "Parts availability", "Technical support"]
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Quality Assurance",
    description: "Rigorous quality checks and verification processes to ensure every vehicle meets our high standards.",
    features: ["Pre-sale inspection", "Quality certification", "History verification", "Performance testing"]
  },
  {
    icon: <FaGlobe size={40} />,
    title: "International Sourcing",
    description: "Direct partnerships with international dealers and manufacturers for the best prices and authentic vehicles.",
    features: ["Direct partnerships", "Best prices", "Authentic vehicles", "Wide selection"]
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive automotive solutions tailored to meet all your vehicle needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <span className="feature-bullet">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="services-cta"
        >
          <h3 className="cta-title">Ready to Get Started?</h3>
          <p className="cta-text">
            Contact us today to discuss your automotive needs and discover how we can help you drive with confidence.
          </p>
          <a
            href="https://wa.me/2349023681835"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <FaHandshake style={{ marginRight: '0.75rem' }} />
            Get Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 
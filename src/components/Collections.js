import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import ImageModal from './ImageModal';

const imageFiles = [
  "BBenz_01_AVL.JPG", "BBenz_02_AVL.JPG", "BBenz_03_AVL.JPG", "BBenz_04_AVL.JPG", "BBenz_05_AVL.JPG", "BBenz_06_AVL.JPG", "BBenz_07_AVL.JPG", "BBenz_08_AVL.JPG",
  "BlueLexus_01_AVL.JPG", "BlueLexus_02_AVL.JPG", "BlueLexus_03_AVL.JPG", "BlueLexus_04_AVL.JPG", "BlueLexus_05_AVL.JPG", "BlueLexus_06_AVL.JPG",
  "GLE_01_AVL.JPG", "GLE_02_AVL.JPG", "GLE_03_AVL.JPG", "GLE_04_AVL.JPG", "GLE_05_AVL.JPG", "GLE_06_AVL.JPG", "GLE_07_AVL.JPG", "GLE_08_AVL.JPG",
  "GreyLexus_01_AVL.JPG", "GreyLexus_02_AVL.JPG", "GreyLexus_03_AVL.JPG", "GreyLexus_04_AVL.JPG", "GreyLexus_05_AVL.JPG", "GreyLexus_06_AVL.JPG", "GreyLexus_07_AVL.JPG", "GreyLexus_08_AVL.JPG", "GreyLexus_09_AVL.JPG",
  "Sedan_Benz_01_AVL.JPG", "Sedan_Benz_02_AVL.JPG", "Sedan_Benz_03_AVL.JPG", "Sedan_Benz_04_AVL.JPG", "Sedan_Benz_05_AVL.JPG", "Sedan_Benz_06_AVL.JPG"
];

const Collections = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filter, setFilter] = useState('All');
  const [selectedCar, setSelectedCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const carData = imageFiles.reduce((acc, file) => {
      const match = file.match(/(.+)_(\d+)_(AVL|SLD)\.JPG/i);
      if (match) {
        const [, name, number, statusStr] = match;
        if (!acc[name]) {
          acc[name] = { images: [], hasAvailable: false };
        }
        acc[name].images.push({
          path: `${process.env.PUBLIC_URL}/images/${file}`,
          number: parseInt(number, 10),
        });
        if (statusStr.toUpperCase() === 'AVL') {
          acc[name].hasAvailable = true;
        }
      }
      return acc;
    }, {});

    const carGroups = Object.entries(carData).map(([name, data]) => {
      let displayName = name;
      if (name === 'BBenz') displayName = 'Mercedes Benz (B)';
      if (name === 'Sedan_Benz') displayName = 'Mercedes Benz (Sedan)';
      if (name === 'GreyLexus') displayName = 'Lexus (Grey)';
      if (name === 'BlueLexus') displayName = 'Lexus (Blue)';
      if (name === 'GLE') displayName = 'Mercedes Benz (GLE)';

      return {
        name: displayName,
        status: data.hasAvailable ? 'Available' : 'Sold',
        images: data.images.sort((a, b) => a.number - b.number),
      };
    });

    setCars(carGroups);
    setFilteredCars(carGroups);
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter(car => car.status === filter));
    }
  }, [filter, cars]);

  const openModal = (car, index) => {
    setSelectedCar(car);
    setCurrentImageIndex(index);
  };

  const closeModal = () => setSelectedCar(null);

  return (
    <section id="collections" className="collections">
      <div className="collections-container">
        <h2 className="collections-title">Our Collections</h2>
        <div className="collections-filter">
          {['All', 'Available', 'Sold'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`collections-filter-button ${filter === f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>
        <motion.div layout className="collections-grid">
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                layout
                key={car.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="car-card"
                onClick={() => openModal(car, 0)}
              >
                <div className="car-card-image-container">
                  <img src={car.images[0].path} alt={car.name} className="car-card-image" />
                  <div className={`car-card-status ${car.status === 'Available' ? 'status-available' : 'status-sold'}`}>
                    {car.status}
                  </div>
                </div>
                <div className="car-card-content">
                  <h3 className="car-card-title">
                    <span>{car.name}</span>
                  </h3>
                  <a
                    href="https://wa.me/2349023681835"
                    target="_blank" rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hero-button"
                  >
                    <FaWhatsapp style={{ marginRight: '0.5rem' }} /> Enquire
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <ImageModal car={selectedCar} onClose={closeModal} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
    </section>
  );
};

export default Collections; 
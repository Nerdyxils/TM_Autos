import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const ImageModal = ({ car, onClose, currentImageIndex, setCurrentImageIndex }) => {
  if (!car) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="image-modal-overlay"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="image-modal-content"
          variants={modal}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="image-modal-close">
            <FaTimes size={24} />
          </button>
          
          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={car.images[currentImageIndex].path}
                alt={`${car.name} ${currentImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="image-modal-main-image"
              />
            </AnimatePresence>
            
            <button onClick={prevImage} className="image-modal-nav prev">
              <FaArrowLeft />
            </button>
            <button onClick={nextImage} className="image-modal-nav next">
              <FaArrowRight />
            </button>
          </div>

          <div className="image-modal-thumbnails">
            {car.images.map((image, index) => (
              <img
                key={index}
                src={image.path}
                alt={`Thumbnail ${index + 1}`}
                className={`image-modal-thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              />
            ))}
          </div>
          <h3 className="car-card-title" style={{ justifyContent: 'center', marginTop: '1rem' }}>{car.name}</h3>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal; 
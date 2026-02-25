import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data';
import { FaGithub, FaLinkedin, FaGraduationCap, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Hero = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    if (personalInfo.photos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % personalInfo.photos.length);
    }, 5000); // Change photo every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % personalInfo.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + personalInfo.photos.length) % personalInfo.photos.length);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Hello, I'm <span className="text-secondary">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-700 font-medium mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
            >
              <FaEnvelope /> Contact Me
            </a>
            {personalInfo.social.github && (
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-600 hover:text-primary text-2xl transition-colors"
              >
                <FaGithub />
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-600 hover:text-primary text-2xl transition-colors"
              >
                <FaLinkedin />
              </a>
            )}
            {personalInfo.social.googleScholar && (
              <a
                href={personalInfo.social.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-600 hover:text-primary text-2xl transition-colors"
              >
                <FaGraduationCap />
              </a>
            )}
          </div>
        </motion.div>

        {/* Photo Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center order-1 md:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-secondary rounded-full opacity-20 blur-2xl animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhotoIndex}
                  src={personalInfo.photos[currentPhotoIndex]}
                  alt={`${personalInfo.name} - Photo ${currentPhotoIndex + 1}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            {personalInfo.photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 p-2 rounded-full shadow-md text-primary hover:bg-white hover:text-secondary transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Previous photo"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 p-2 rounded-full shadow-md text-primary hover:bg-white hover:text-secondary transition-all opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Next photo"
                >
                  <FaChevronRight />
                </button>
                
                {/* Indicators */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {personalInfo.photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentPhotoIndex ? 'bg-primary' : 'bg-slate-300'
                      }`}
                      aria-label={`Go to photo ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

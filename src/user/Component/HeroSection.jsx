import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Welcome to Infinex Technologies',
    headingWords: [
      'IT Solutions & Website Development',
      'Real-World Developer Experience',
      'Creating the Future, Together',
    ],
    text: 'We help businesses transform and thrive in the digital age with cutting-edge technology solutions and expert guidance.',
    image: '/assets/img/working-4.jpg',
  },
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-content">
              <motion.div
                className="hero-text"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h5>{slide.title}</h5>
                <h1 className="typewriter-text">
                  <Typewriter
                    words={slide.headingWords}
                    loop={true}
                    cursor
                    cursorStyle="❚"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </h1>
                <p>{slide.text}</p>

                {/*<div className="hero-buttons">
                  <motion.button className="btn-primary">🚀 Get Started</motion.button>
                  <motion.button className="btn-primary">🎬 Watch Now</motion.button>
                </div>*/}
              </motion.div>

              <motion.div
                className="hero-image-wrapper"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="image-circle">
                  <img src={slide.image} alt="Hero" className="hero-image" />
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;


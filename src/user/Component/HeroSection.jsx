//import React from 'react';
//import { Swiper, SwiperSlide } from 'swiper/react';
//import { Pagination, Autoplay } from 'swiper/modules';
//import { motion } from 'framer-motion';
//import { Typewriter } from 'react-simple-typewriter';
//import 'swiper/css';
//import 'swiper/css/pagination';
//
//const slides = [
//  {
//    title: 'Welcome to Infinex Technologies',
//    headingWords: [
//      'IT Solutions & Website Development',
//      'Real-World Developer Experience',
//      'Creating the Future, Together',
//    ],
//    text: 'We help businesses transform and thrive in the digital age with cutting-edge technology solutions and expert guidance.',
//    image: '/assets/img/working-4.jpg',
//  },
//];
//
//const HeroSection = () => {
//  return (
//    <section className="hero-section">
//      <Swiper
//        pagination={{ clickable: true }}
//        modules={[Pagination, Autoplay]}
//        loop={true}
//        autoplay={{
//          delay: 5000,
//          disableOnInteraction: false,
//          pauseOnMouseEnter: true,
//        }}
//        className="hero-swiper"
//      >
//        {slides.map((slide, index) => (
//          <SwiperSlide key={index}>
//            <div className="hero-content">
//              <motion.div
//                className="hero-text"
//                initial={{ opacity: 0, x: -60 }}
//                animate={{ opacity: 1, x: 0 }}
//                transition={{ duration: 0.8, delay: 0.3 }}
//              >
//                <h5>{slide.title}</h5>
//                <h1 className="typewriter-text">
//                  <Typewriter
//                    words={slide.headingWords}
//                    loop={true}
//                    cursor
//                    cursorStyle="❚"
//                    typeSpeed={70}
//                    deleteSpeed={50}
//                    delaySpeed={1500}
//                  />
//                </h1>
//                <p>{slide.text}</p>
//              </motion.div>
//
//              <motion.div
//                className="hero-image-wrapper"
//                initial={{ opacity: 0, y: 50 }}
//                animate={{ opacity: 1, y: 0 }}
//                transition={{ duration: 0.8, delay: 0.5 }}
//              >
//                <div className="image-circle">
//                  <img src={slide.image} alt="Hero" className="hero-image" />
//                </div>
//              </motion.div>
//            </div>
//          </SwiperSlide>
//        ))}
//      </Swiper>
//    </section>
//  );
//};
//
//export default HeroSection;
//










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
    <section className="home-page-hero-section">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="home-page-hero-section-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="home-page-hero-section-content">
              {/* Left Text Section */}
              <motion.div
                className="home-page-hero-section-text"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h5 className="home-page-hero-section-welcome">{slide.title}</h5>
                <h1 className="home-page-hero-section-typewriter">
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

                {/*<div className="home-page-hero-section-buttons">
                  <a href="#services" className="home-page-hero-section-btn home-page-hero-section-btn-primary">Explore Services</a>
                  <a href="#contact" className="home-page-hero-section-btn home-page-hero-section-btn-secondary">Contact Us</a>
                </div>*/}
              </motion.div>

              {/* Right Image Section */}
              <motion.div
                className="home-page-hero-section-image-wrapper"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="home-page-hero-section-image-background">
                  <svg className="home-page-hero-section-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#6c63ff22" d="M40.5,-69.4C51.7,-62.6,61.3,-52.1,67.4,-39.6C73.5,-27.1,76,-12.5,75.9,2.1C75.7,16.8,72.9,33.6,63.6,46.1C54.3,58.6,38.6,66.9,22.2,70.5C5.8,74.2,-11.4,73.2,-28.1,67.4C-44.7,61.6,-60.9,51.1,-70.2,36.5C-79.5,21.9,-82,3.2,-77.4,-13.2C-72.9,-29.6,-61.3,-43.7,-47.1,-51.2C-32.8,-58.8,-16.4,-59.8,-0.4,-59.4C15.7,-59,31.4,-57.1,40.5,-69.4Z" transform="translate(100 100)" />
                  </svg>
                  <div className="home-page-hero-section-image-circle">
                    <img src={slide.image} alt="Hero" className="home-page-hero-section-image" />
                  </div>
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

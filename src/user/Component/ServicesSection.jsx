//import React, { useState, useEffect } from 'react';
//import {
//  Code,
//  Smartphone,
//  Palette,
//  Megaphone,
//  Search,
//  Settings,
//  Video
//} from 'lucide-react';
//
//const HomeServices = () => {
//  const [currentSlide, setCurrentSlide] = useState(0);
//  const [expandedCard, setExpandedCard] = useState(null);
//
//const services = [
//  {
//    id: 1,
//    icon: <Code size={48} />,
//    title: "Software Development",
//    shortDescription: "Build scalable software solutions for your business using the latest technologies. Our experienced development team creates robust applications that grow with your business, ensuring long-term success and reliability.",
//    link: "/Software"
//  },
//  {
//    id: 2,
//    icon: <Smartphone size={48} />,
//    title: "Mobile Development",
//    shortDescription: "Create high-performance, cross-platform mobile applications for Android and iOS with seamless user experiences, ensuring optimal performance and user engagement across all devices without compromising quality.",
//    link: "/mobile"
//  },
//  {
//    id: 3,
//    icon: <Palette size={48} />,
//    title: "UI/UX Designing",
//    shortDescription: "Design intuitive and visually captivating interfaces that elevate user interaction and experience across all devices. Our team focuses on user-centered design principles to create interfaces that are both beautiful and functional.",
//    link: "/uiux"
//  },
//  {
//    id: 4,
//    icon: <Megaphone size={48} />,
//    title: "Social Media Marketing",
//    shortDescription: "Grow your brand awareness with social media marketing strategies and campaigns. Our experts create compelling content and manage your presence across all major platforms to maximize reach and engagement.",
//    link: "/social"
//  },
//  {
//    id: 5,
//    icon: <Search size={48} />,
//    title: "SEO Optimization",
//    shortDescription: "Boost your search engine rankings and drive more organic traffic with our proven SEO strategies. Our specialists use data-driven approaches to improve your visibility and attract qualified leads to your website.",
//    link: "/seo"
//  },
//  {
//    id: 6,
//    icon: <Settings size={48} />,
//    title: "Digital Marketing",
//    shortDescription: "Accelerate your online growth with data-driven digital marketing solutions tailored to your target audience. We focus on measurable outcomes by constantly analyzing user behavior and market trends for maximum ROI.",
//    link: "/digital"
//  },
//  {
//    id: 7,
//    icon: <Video size={48} />,
//    title: "Video Editing",
//    shortDescription: "Produce engaging, professional-quality videos with creative storytelling and top-tier editing tools. Our team creates compelling visual narratives that captivate your audience and effectively communicate your brand message.",
//    link: "/video"
//  }
//];
//
//
//  const settings = {
//    dots: false,
//    arrows: false,
//    infinite: true,
//    speed: 1000,
//    slidesToShow: 5,
//    slidesToScroll: 1,
//    autoplay: true,
//    autoplaySpeed: 3000,
//    pauseOnHover: false,
//    centerMode: true,
//    centerPadding: '0',
//    responsive: [
//      { breakpoint: 1280, settings: { slidesToShow: 3 } },
//      { breakpoint: 768, settings: { slidesToShow: 1 } }
//    ]
//  };
//
//  const getSlidesToShow = () => {
//    if (typeof window !== 'undefined') {
//      const width = window.innerWidth;
//      if (width <= 768) return 1;
//      if (width <= 1280) return 3;
//      return 5;
//    }
//    return 5;
//  };
//
//  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);
//
//  useEffect(() => {
//    const handleResize = () => {
//      setSlidesToShow(getSlidesToShow());
//    };
//
//    window.addEventListener('resize', handleResize);
//    return () => window.removeEventListener('resize', handleResize);
//  }, []);
//
//  // Auto-slide effect
//  useEffect(() => {
//    const interval = setInterval(() => {
//      setCurrentSlide(prev => prev + 1);
//    }, settings.autoplaySpeed);
//
//    return () => clearInterval(interval);
//  },  [settings.autoplaySpeed]);
//
//  const toggleReadMore = (serviceId) => {
//    setExpandedCard(expandedCard === serviceId ? null : serviceId);
//  };
//
//  const getVisibleSlides = () => {
//    const slides = [];
//    const totalSlides = Math.max(slidesToShow, services.length);
//
//    for (let i = 0; i < totalSlides; i++) {
//      const slideIndex = (currentSlide + i) % totalSlides;
//      const service = services[slideIndex % services.length];
//
//      // If we've cycled through all services and need blank slides
//      if (slideIndex >= services.length) {
//        slides.push({ id: `blank-${slideIndex}`, isBlank: true });
//      } else {
//        slides.push(service);
//      }
//    }
//
//    return slides;
//  };
//
//  return (
//    <div className="home-services-section">
//      <div className="home-services-container">
//        {/* Header */}
//        <div className="home-services-header">
//          <h2 className="home-services-title">
//            Our <span className="home-services-title-highlight">Services</span>
//          </h2>
//          <p className="home-services-subtitle">
//            Professional technology services to accelerate your digital transformation.
//            From development to marketing, we've got you covered.
//          </p>
//        </div>
//
//        {/* Slider Container */}
//        <div className="home-services-slider-wrapper">
//          <div className="home-services-slider-track">
//            <div className="home-services-slider-content">
//              {getVisibleSlides().map((slide, index) => (
//                <div
//                  key={slide.id}
//                  className={`home-services-card-wrapper ${index === Math.floor(slidesToShow / 2) ? 'center' : ''}`}
//                >
//                  {slide.isBlank ? (
//                    <div className="home-services-card-blank">
//                      <div className="home-services-blank-content">
//                        <div className="home-services-blank-dots">
//                          <span></span>
//                          <span></span>
//                          <span></span>
//                        </div>
//                      </div>
//                    </div>
//                  ) : (
//                    <div className="home-services-card">
//                      <div className="home-services-card-inner">
//                        {/* Decorative Elements */}
//                        <div className="home-services-card-decoration"></div>
//                        <div className="home-services-card-glow"></div>
//
//                        {/* Icon */}
//                        <div className="home-services-card-icon">
//                          <div className="home-services-icon-wrapper">
//                            {slide.icon}
//                          </div>
//                        </div>
//
//                        {/* Title */}
//                        <h3 className="home-services-card-title">
//                          {slide.title}
//                        </h3>
//
//                        {/* Description */}
//                        <div className="home-services-card-content">
//                          <p className="home-services-card-description">
//                            {expandedCard === slide.id ? slide.fullDescription : slide.shortDescription}
//                          </p>
//
//                          {/* Features (shown when expanded) */}
//                          {expandedCard === slide.id && (
//                            <div className="home-services-card-features">
//                              <h4 className="home-services-features-title">Key Features:</h4>
//                              <ul className="home-services-features-list">
//                                {slide.features.map((feature, featureIndex) => (
//                                  <li key={featureIndex} className="home-services-feature-item">
//                                    <div className="home-services-feature-bullet"></div>
//                                    {feature}
//                                  </li>
//                                ))}
//                              </ul>
//                            </div>
//                          )}
//                        </div>
//
//                        {/* Action Buttons */}
//                        <div className="home-services-card-actions">
//                          {expandedCard === slide.id ? (
//                            <button
//                              onClick={() => toggleReadMore(slide.id)}
//                              className="home-services-read-more-btn"
//                            >
//                              Show Less
//                            </button>
//                          ) : (
//                            <a
//                              href={slide.link}
//                              className="home-services-read-more-btn"
//                            >
//                              Read More
//                            </a>
//                          )}
//
//                        </div>
//                      </div>
//                    </div>
//                  )}
//                </div>
//              ))}
//            </div>
//          </div>
//        </div>
//
//        {/* Progress Bar */}
//        <div className="home-services-progress">
//          <div
//            className="home-services-progress-bar"
//            style={{
//              width: `${((currentSlide % services.length) / services.length) * 100}%`
//            }}
//          ></div>
//        </div>
//      </div>
//    </div>
//  );
//};
//
//export default HomeServices;



import React from 'react';
import { Code, Smartphone, Palette, Megaphone, Search, Settings, Video } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: <Code size={48} />,
    title: "Software Development",
    description: "Build scalable software solutions for your business using the latest technologies.\nOur experienced development team creates robust applications that grow with your business, ensuring long-term success and reliability.",
    link: "/Software"
  },
  {
    id: 2,
    icon: <Smartphone size={48} />,
    title: "Mobile Development",
    description: "Create high-performance, cross-platform mobile applications for Android and iOS with seamless user experiences.\nEnsuring optimal performance and user engagement across all devices without compromising quality.",
    link: "/mobile"
  },
  {
    id: 3,
    icon: <Palette size={48} />,
    title: "UI/UX Designing",
    description: "Design intuitive and visually captivating interfaces that elevate user interaction and experience across all devices.\nOur team focuses on user-centered design principles to create interfaces that are both beautiful and functional.",
    link: "/uiux"
  },
  {
    id: 4,
    icon: <Megaphone size={48} />,
    title: "Social Media Marketing",
    description: "Grow your brand awareness with social media marketing strategies and campaigns.\nOur experts create compelling content and manage your presence across all major platforms to maximize reach and engagement.",
    link: "/social"
  },
  {
    id: 5,
    icon: <Search size={48} />,
    title: "SEO Optimization",
    description: "Boost your search engine rankings and drive more organic traffic with our proven SEO strategies.\nOur specialists use data-driven approaches to improve your visibility and attract qualified leads to your website.",
    link: "/seo"
  },
  {
    id: 6,
    icon: <Settings size={48} />,
    title: "Digital Marketing",
    description: "Accelerate your online growth with data-driven digital marketing solutions tailored to your target audience.\nWe focus on measurable outcomes by constantly analyzing user behavior and market trends for maximum ROI.",
    link: "/digital"
  },
  {
    id: 7,
    icon: <Video size={48} />,
    title: "Video Editing",
    description: "Produce engaging, professional-quality videos with creative storytelling and top-tier editing tools.\nOur team creates compelling visual narratives that captivate your audience and effectively communicate your brand message.",
    link: "/video"
  }
];

const ServicesSection = () => {
  return (
    <section className="home-page-services">
      <style jsx>{`
        .home-page-services {
          width: 100%;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
        }

        .home-page-services::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 10% 20%, rgba(0, 115, 185, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(0, 115, 185, 0.02) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .home-page-services-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .home-page-services-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .home-page-services-subtitle {
          font-size: 1.1rem;
          color: #0073b9;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .home-page-services-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1a202c;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .home-page-services-description {
          font-size: 1.25rem;
          color: #4a5568;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .home-page-services-list {
          margin-top: 3rem;
        }

        .home-page-services-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3rem 2rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .home-page-services-item:not(:last-child) {
          border-bottom: 2px solid rgba(0, 115, 185, 0.1);
        }

        .home-page-services-item:not(:last-child)::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0073b9, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .home-page-services-item:hover:not(:last-child)::after {
          opacity: 1;
        }

        .home-page-services-item:hover {
          transform: translateY(-5px);
        }

        .home-page-services-icon {
          margin-bottom: 1.5rem;
          color: #0073b9;
          transition: all 0.3s ease;
          padding: 1.5rem;
          background: rgba(0, 115, 185, 0.1);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 115, 185, 0.2);
        }

        .home-page-services-item:hover .home-page-services-icon {
          transform: scale(1.1);
          color: #ffffff;
          background: #0073b9;
          box-shadow: 0 8px 25px rgba(0, 115, 185, 0.3);
        }

        .home-page-services-content {
          max-width: 600px;
        }

        .home-page-services-item-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .home-page-services-item-description {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 2rem;
          white-space: pre-line;
        }

        .home-page-services-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: #0073b9;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .home-page-services-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .home-page-services-link:hover::before {
          left: 100%;
        }

        .home-page-services-link:hover {
          background: #0056a3;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 115, 185, 0.3);
        }

        .home-page-services-arrow {
          transition: transform 0.3s ease;
        }

        .home-page-services-link:hover .home-page-services-arrow {
          transform: translateX(4px);
        }

        /* Responsive Design */

        /* Mobile Devices (320px to 768px) */
        @media (max-width: 768px) {
          .home-page-services {
            padding: 3rem 1rem;
          }

          .home-page-services-header {
            margin-bottom: 3rem;
          }

          .home-page-services-subtitle {
            font-size: 1rem;
          }

          .home-page-services-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .home-page-services-description {
            font-size: 1.1rem;
          }

          .home-page-services-item {
            padding: 2.5rem 1rem;
          }

          .home-page-services-icon {
            margin-bottom: 1rem;
            padding: 1.2rem;
          }

          .home-page-services-item-title {
            font-size: 1.5rem;
          }

          .home-page-services-item-description {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .home-page-services-link {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }

        /* Extra Small Mobile (320px to 480px) */
        @media (max-width: 480px) {
          .home-page-services {
            padding: 2.5rem 0.5rem;
          }

          .home-page-services-title {
            font-size: 1.8rem;
          }

          .home-page-services-description {
            font-size: 1rem;
          }

          .home-page-services-item {
            padding: 2rem 0.5rem;
          }

          .home-page-services-icon {
            padding: 1rem;
          }

          .home-page-services-item-title {
            font-size: 1.3rem;
          }

          .home-page-services-item-description {
            font-size: 0.95rem;
          }
        }

        /* Tablets (768px to 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .home-page-services-item {
            padding: 3rem 2rem;
          }

          .home-page-services-icon {
          }

          .home-page-services-item-title {
            font-size: 1.8rem;
          }
        }

        /* Large Desktop (1200px and up) */
        @media (min-width: 1200px) {
          .home-page-services {
            padding: 5rem 2rem;
          }

          .home-page-services-title {
            font-size: 3.5rem;
          }

          .home-page-services-description {
            font-size: 1.3rem;
          }

          .home-page-services-item {
            padding: 4rem 3rem;
          }

          .home-page-services-icon {
            margin-bottom: 2rem;
            padding: 1.8rem;
          }

          .home-page-services-item-title {
            font-size: 2.2rem;
            margin-bottom: 1.2rem;
          }

          .home-page-services-item-description {
            font-size: 1.15rem;
            margin-bottom: 2.5rem;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .home-page-services {
            background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%);
          }

          .home-page-services-title {
            background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e0 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .home-page-services-description {
            color: #a0aec0;
          }

          .home-page-services-item:not(:last-child) {
            border-bottom-color: rgba(255, 255, 255, 0.1);
          }

          .home-page-services-item-title {
            color: #f7fafc;
          }

          .home-page-services-item-description {
            color: #a0aec0;
          }
        }

        /* Reduced Motion Preference */
        @media (prefers-reduced-motion: reduce) {
          .home-page-services-item {
            transition: none;
          }

          .home-page-services-item:hover {
            transform: none;
          }

          .home-page-services-link::before {
            display: none;
          }

          .home-page-services-icon {
            transition: none;
          }

          .home-page-services-item:hover .home-page-services-icon {
            transform: none;
          }
        }
      `}</style>

      <div className="home-page-services-container">
        <div className="home-page-services-header">
          <p className="home-page-services-subtitle">What We Offer</p>
          <h2 className="home-page-services-title">Our Services</h2>
          <p className="home-page-services-description">
            We provide comprehensive IT solutions designed to transform your business and drive growth in the digital landscape.
          </p>
        </div>

        <div className="home-page-services-list">
          {servicesData.map((service) => (
            <div key={service.id} className="home-page-services-item">
              <div className="home-page-services-icon">
                {service.icon}
              </div>
              <div className="home-page-services-content">
                <h3 className="home-page-services-item-title">
                  {service.title}
                </h3>
                <p className="home-page-services-item-description">
                  {service.description}
                </p>
                <a 
                  href={service.link} 
                  className="home-page-services-link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <span className="home-page-services-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
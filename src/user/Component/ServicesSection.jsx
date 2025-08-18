import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Megaphone, 
  Search, 
  Settings, 
  Video
} from 'lucide-react';

const HomeServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

const services = [
  {
    id: 1,
    icon: <Code size={48} />,
    title: "Software Development",
    shortDescription: "Build scalable software solutions for your business using the latest technologies. Our experienced development team creates robust applications that grow with your business, ensuring long-term success and reliability.",
    link: "/Software"
  },
  {
    id: 2,
    icon: <Smartphone size={48} />,
    title: "Mobile Development",
    shortDescription: "Create high-performance, cross-platform mobile applications for Android and iOS with seamless user experiences, ensuring optimal performance and user engagement across all devices without compromising quality.",
    link: "/mobile"
  },
  {
    id: 3,
    icon: <Palette size={48} />,
    title: "UI/UX Designing",
    shortDescription: "Design intuitive and visually captivating interfaces that elevate user interaction and experience across all devices. Our team focuses on user-centered design principles to create interfaces that are both beautiful and functional.",
    link: "/uiux"
  },
  {
    id: 4,
    icon: <Megaphone size={48} />,
    title: "Social Media Marketing",
    shortDescription: "Grow your brand awareness with social media marketing strategies and campaigns. Our experts create compelling content and manage your presence across all major platforms to maximize reach and engagement.",
    link: "/social"
  },
  {
    id: 5,
    icon: <Search size={48} />,
    title: "SEO Optimization",
    shortDescription: "Boost your search engine rankings and drive more organic traffic with our proven SEO strategies. Our specialists use data-driven approaches to improve your visibility and attract qualified leads to your website.",
    link: "/seo"
  },
  {
    id: 6,
    icon: <Settings size={48} />,
    title: "Digital Marketing",
    shortDescription: "Accelerate your online growth with data-driven digital marketing solutions tailored to your target audience. We focus on measurable outcomes by constantly analyzing user behavior and market trends for maximum ROI.",
    link: "/digital"
  },
  {
    id: 7,
    icon: <Video size={48} />,
    title: "Video Editing",
    shortDescription: "Produce engaging, professional-quality videos with creative storytelling and top-tier editing tools. Our team creates compelling visual narratives that captivate your audience and effectively communicate your brand message.",
    link: "/video"
  }
];


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 768) return 1;
      if (width <= 1280) return 3;
      return 5;
    }
    return 5;
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev + 1);
    }, settings.autoplaySpeed);

    return () => clearInterval(interval);
  },  [settings.autoplaySpeed]);

  const toggleReadMore = (serviceId) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
  };

  const getVisibleSlides = () => {
    const slides = [];
    const totalSlides = Math.max(slidesToShow, services.length);
    
    for (let i = 0; i < totalSlides; i++) {
      const slideIndex = (currentSlide + i) % totalSlides;
      const service = services[slideIndex % services.length];
      
      // If we've cycled through all services and need blank slides
      if (slideIndex >= services.length) {
        slides.push({ id: `blank-${slideIndex}`, isBlank: true });
      } else {
        slides.push(service);
      }
    }
    
    return slides;
  };

  return (
    <div className="home-services-section">
      <div className="home-services-container">
        {/* Header */}
        <div className="home-services-header">
          <h2 className="home-services-title">
            Our <span className="home-services-title-highlight">Services</span>
          </h2>
          <p className="home-services-subtitle">
            Professional technology services to accelerate your digital transformation. 
            From development to marketing, we've got you covered.
          </p>
        </div>

        {/* Slider Container */}
        <div className="home-services-slider-wrapper">
          <div className="home-services-slider-track">
            <div className="home-services-slider-content">
              {getVisibleSlides().map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`home-services-card-wrapper ${index === Math.floor(slidesToShow / 2) ? 'center' : ''}`}
                >
                  {slide.isBlank ? (
                    <div className="home-services-card-blank">
                      <div className="home-services-blank-content">
                        <div className="home-services-blank-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="home-services-card">
                      <div className="home-services-card-inner">
                        {/* Decorative Elements */}
                        <div className="home-services-card-decoration"></div>
                        <div className="home-services-card-glow"></div>
                        
                        {/* Icon */}
                        <div className="home-services-card-icon">
                          <div className="home-services-icon-wrapper">
                            {slide.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="home-services-card-title">
                          {slide.title}
                        </h3>

                        {/* Description */}
                        <div className="home-services-card-content">
                          <p className="home-services-card-description">
                            {expandedCard === slide.id ? slide.fullDescription : slide.shortDescription}
                          </p>

                          {/* Features (shown when expanded) */}
                          {expandedCard === slide.id && (
                            <div className="home-services-card-features">
                              <h4 className="home-services-features-title">Key Features:</h4>
                              <ul className="home-services-features-list">
                                {slide.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="home-services-feature-item">
                                    <div className="home-services-feature-bullet"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="home-services-card-actions">
                          {expandedCard === slide.id ? (
                            <button 
                              onClick={() => toggleReadMore(slide.id)}
                              className="home-services-read-more-btn"
                            >
                              Show Less
                            </button>
                          ) : (
                            <a
                              href={slide.link}
                              className="home-services-read-more-btn"
                            >
                              Read More
                            </a>
                          )}
                          
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="home-services-progress">
          <div 
            className="home-services-progress-bar"
            style={{
              width: `${((currentSlide % services.length) / services.length) * 100}%`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
import React, { useState, useEffect } from 'react';
import { Star, Award, Users, Clock, CheckCircle, Code, Smartphone, Globe, Database, Shield, Zap, Palette, ArrowRight, ArrowDown, Target, Lightbulb, Rocket, TrendingUp, Video, Share2 } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
const services = [
  {
    id: 1,
    title: "Software Development",
    icon: <Code size={48} />,
    description: "Custom software applications built with modern technologies and best practices for optimal performance.",
    features: ["React.js", "Node.js Backend", "Responsive Design", "SEO Optimized"],
    color: "from-blue-500 to-cyan-500",
    link: "/Software"
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: <Smartphone size={48} />,
    description: "Native and cross-platform mobile apps for iOS and Android devices with seamless user experience.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deploy"],
    color: "from-purple-500 to-pink-500",
    link: "/mobile"
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: <Globe size={48} />,
    description: "Comprehensive digital marketing strategies to grow your online presence and drive conversions.",
    features: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics"],
    color: "from-green-500 to-emerald-500",
    link: "/digital"
  },
  {
    id: 4,
    title: "SEO & SMO",
    icon: <TrendingUp size={48} />,
    description: "Search Engine Optimization and Social Media Optimization to boost your online visibility and rankings.",
    features: ["Keyword Research", "On-page SEO", "Social Media Optimization", "Analytics Tracking"],
    color: "from-orange-500 to-red-500",
    link: "/seo"
  },
  {
    id: 5,
    title: "Video Editing",
    icon: <Video size={48} />,
    description: "Professional video editing services to create engaging content for your brand and marketing needs.",
    features: ["Motion Graphics", "Color Correction", "Audio Editing", "Multiple Formats"],
    color: "from-indigo-500 to-purple-600",
    link: "/video"
  },
  {
    id: 6,
    title: "Social Media Marketing",
    icon: <Share2 size={48} />,
    description: "Strategic social media campaigns to build brand awareness and engage with your target audience.",
    features: ["Content Creation", "Campaign Management", "Influencer Marketing", "Community Building"],
    color: "from-teal-500 to-blue-600",
    link: "/social"
  },
  {
    id: 7,
    title: "UI/UX Designing",
    icon: <Palette size={48} />,
    description: "Beautiful and intuitive user interfaces that enhance user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-pink-500 to-rose-500",
    link: "/uiux"
  }
];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Target size={32} /> },
    { number: "100+", label: "Happy Clients", icon: <Users size={32} /> },
    { number: "5+", label: "Years Experience", icon: <Award size={32} /> },
    { number: "24/7", label: "Support Available", icon: <Clock size={32} /> }
  ];

  const processSteps = [
    { 
      title: "Discovery", 
      description: "We understand your needs and goals",
      icon: <Lightbulb size={40} />,
      color: "from-yellow-400 to-orange-500"
    },
    { 
      title: "Strategy", 
      description: "Create a tailored solution plan",
      icon: <Target size={40} />,
      color: "from-blue-400 to-indigo-500"
    },
    { 
      title: "Development", 
      description: "Build with cutting-edge technology",
      icon: <Code size={40} />,
      color: "from-green-400 to-emerald-500"
    },
    { 
      title: "Launch", 
      description: "Deploy and scale your solution",
      icon: <Rocket size={40} />,
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="innerservicepage-container">
      {/* Floating Elements */}
      <div className="innerservicepage-floating-elements">
        <div className="innerservicepage-float-1"></div>
        <div className="innerservicepage-float-2"></div>
        <div className="innerservicepage-float-3"></div>
      </div>

      {/* Full Height Banner */}
      <section className="innerservicepage-banner">
        <div className="innerservicepage-banner-bg">
          <div className="innerservicepage-wave"></div>
          <div className="innerservicepage-particles">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="innerservicepage-particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}></div>
            ))}
          </div>
        </div>
        <div className="innerservicepage-banner-overlay">
          <div className="innerservicepage-banner-content">
            <div className="innerservicepage-banner-badge">
              <Star size={20} />
              <span>Premium Services</span>
            </div>
            <h1 className="innerservicepage-banner-title">
              Transform Your Business with
              <span className="innerservicepage-gradient-text"> Our Expert Services</span>
            </h1>
            <p className="innerservicepage-banner-subtitle">
              Delivering excellence through innovative solutions, cutting-edge technology, and personalized support that drives real results for your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flowchart */}
      <section className="innerservicepage-process" id="process">
        <div className="innerservicepage-container-width">
          <div className="innerservicepage-section-header">
            <h2 className="innerservicepage-section-title">Our Process</h2>
            <p className="innerservicepage-section-subtitle">
              A proven methodology that ensures success at every step
            </p>
          </div>
          <div className="innerservicepage-process-flowchart">
            {processSteps.map((step, index) => (
              <div key={index} className={`innerservicepage-process-step ${activeStep === index ? 'active' : ''}`}>
                <div className={`innerservicepage-process-icon bg-gradient-to-br ${step.color}`}>
                  {step.icon}
                </div>
                <h3 className="innerservicepage-process-title">{step.title}</h3>
                <p className="innerservicepage-process-desc">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="innerservicepage-process-arrow">
                    <ArrowRight size={24} />
                  </div>
                )}
                <div className="innerservicepage-process-number">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="innerservicepage-why-choose" id="why-choose">
        <div className="innerservicepage-container-width">
          <div className="innerservicepage-why-choose-content">
            <div className="innerservicepage-why-choose-visual">
              <div className="innerservicepage-choose-graphic">
                <div className="innerservicepage-main-circle">
                  <Award size={80} />
                </div>
                <div className="innerservicepage-orbit-circle innerservicepage-orbit-1">
                  <CheckCircle size={24} />
                </div>
                <div className="innerservicepage-orbit-circle innerservicepage-orbit-2">
                  <Star size={24} />
                </div>
                <div className="innerservicepage-orbit-circle innerservicepage-orbit-3">
                  <TrendingUp size={24} />
                </div>
                <div className="innerservicepage-orbit-circle innerservicepage-orbit-4">
                  <Zap size={24} />
                </div>
              </div>
            </div>
            <div className="innerservicepage-why-choose-text">
              <h2 className="innerservicepage-why-choose-title">
                Why Choose Our <span className="innerservicepage-gradient-text">Services?</span>
              </h2>
              <p className="innerservicepage-why-choose-description">
                We combine years of expertise with cutting-edge technology to deliver solutions that drive real business results. Our team of professionals is dedicated to understanding your unique needs and providing tailored services that exceed expectations.
              </p>
              <div className="innerservicepage-why-choose-features">
                <div className="innerservicepage-feature">
                  <div className="innerservicepage-feature-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4>Expert Team</h4>
                    <p>Industry veterans with proven track records</p>
                  </div>
                </div>
                <div className="innerservicepage-feature">
                  <div className="innerservicepage-feature-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4>Quality Assurance</h4>
                    <p>Rigorous testing and quality control processes</p>
                  </div>
                </div>
                <div className="innerservicepage-feature">
                  <div className="innerservicepage-feature-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4>Timely Delivery</h4>
                    <p>On-time project completion guaranteed</p>
                  </div>
                </div>
                <div className="innerservicepage-feature">
                  <div className="innerservicepage-feature-icon">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Round-the-clock assistance and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="innerservicepage-stats" id="stats">
        <div className="innerservicepage-container-width">
          <div className="innerservicepage-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`innerservicepage-stat-item ${isVisible.stats ? 'animate' : ''}`} 
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="innerservicepage-stat-icon">
                  {stat.icon}
                </div>
                <div className="innerservicepage-stat-number">{stat.number}</div>
                <div className="innerservicepage-stat-label">{stat.label}</div>
                <div className="innerservicepage-stat-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="innerservicepage-services" id="services">
        <div className="innerservicepage-container-width">
          <div className="innerservicepage-section-header">
            <h2 className="innerservicepage-section-title">Our <span className="innerservicepage-gradient-text">Services</span></h2>
            <p className="innerservicepage-section-subtitle">
              Comprehensive solutions tailored to meet your business needs and drive growth
            </p>
          </div>
          <div className="innerservicepage-services-grid">
            {services.map((service, index) => (
              <div key={service.id} className={`innerservicepage-service-card ${isVisible.services ? 'animate' : ''}`}
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`innerservicepage-service-header bg-gradient-to-br ${service.color}`}>
                  <div className="innerservicepage-service-icon">
                    {service.icon}
                  </div>
                </div>
                <div className="innerservicepage-service-content">
                  <h3 className="innerservicepage-service-title">{service.title}</h3>
                  <p className="innerservicepage-service-description">
                    {service.description}
                  </p>
                  <div className="innerservicepage-service-features">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="innerservicepage-service-feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a href={service.link} className="innerservicepage-service-link">
                    Learn More
                    <ArrowRight size={16} />
                  </a>
                </div>
                <div className="innerservicepage-service-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
import React, { useState, useEffect } from 'react';

const MobileDevelopment = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const subServices = [
    {
      title: 'Native iOS Development',
      description: 'High-performance native iOS apps built with Swift and SwiftUI for optimal user experience',
      icon: '📱'
    },
    {
      title: 'Native Android Development',
      description: 'Robust Android applications using Kotlin and Java with Material Design principles',
      icon: '🤖'
    },
    {
      title: 'Cross-Platform Development',
      description: 'Efficient app development using React Native and Flutter for multiple platforms',
      icon: '🔄'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and engaging mobile app interfaces designed for optimal user experience',
      icon: '🎨'
    },
    {
      title: 'App Store Optimization',
      description: 'Optimize your app listing for better visibility and downloads on app stores',
      icon: '⭐'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing app updates, bug fixes, and performance optimization services',
      icon: '🔧'
    }
  ];

  const marketingTypes = [
    {
      type: 'iOS Development',
      technologies: ['Swift', 'SwiftUI', 'Xcode', 'Core Data'],
      description: 'Native iOS apps with cutting-edge features and seamless performance'
    },
    {
      type: 'Android Development',
      technologies: ['Kotlin', 'Java', 'Android Studio', 'Firebase'],
      description: 'Robust Android applications with modern architecture and design'
    },
    {
      type: 'Cross-Platform',
      technologies: ['React Native', 'Flutter', 'Expo', 'Xamarin'],
      description: 'Build once, deploy everywhere with efficient cross-platform solutions'
    },
    {
      type: 'Backend & APIs',
      technologies: ['Node.js', 'Express', 'MongoDB', 'AWS'],
      description: 'Scalable backend infrastructure and API development for your mobile apps'
    }
  ];

  const benefits = [
    { title: 'Native Performance', description: 'Lightning-fast apps optimized for each platform\'s capabilities' },
    { title: 'User-Centric Design', description: 'Intuitive interfaces that provide exceptional user experiences' },
    { title: 'Scalable Architecture', description: 'Future-proof apps built with scalable and maintainable code' },
    { title: 'Expert Developers', description: 'Certified mobile developers with extensive platform experience' },
    { title: 'Quality Assurance', description: 'Rigorous testing across devices and operating systems' },
    { title: 'Ongoing Support', description: 'Continuous updates, maintenance, and feature enhancements' }
  ];

  const faqs = [
    {
      question: 'Which platforms do you develop mobile apps for?',
      answer: 'We develop for iOS, Android, and cross-platform solutions using React Native and Flutter. We can also create progressive web apps (PWAs) for broader accessibility.'
    },
    {
      question: 'How long does mobile app development take?',
      answer: 'Development timeline varies based on complexity. Simple apps take 2-3 months, while complex apps with advanced features can take 4-8 months. We provide detailed timelines during planning.'
    },
    {
      question: 'Do you provide app store submission support?',
      answer: 'Yes, we handle the entire app store submission process including Apple App Store and Google Play Store guidelines compliance, optimization, and launch support.'
    },
    {
      question: 'Can you integrate third-party services and APIs?',
      answer: 'Absolutely! We integrate payment gateways, social login, push notifications, analytics, maps, and any other third-party services your app requires.'
    },
    {
      question: 'Do you offer post-launch support and maintenance?',
      answer: 'Yes, we provide comprehensive post-launch support including bug fixes, OS updates, security patches, feature enhancements, and performance optimization.'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      company: 'Fitness Startup',
      text: 'Infinex built our fitness app that now has over 50K downloads. The user experience is phenomenal!',
      rating: 5
    },
    {
      name: 'Robert Wilson',
      company: 'Food Delivery Service',
      text: 'Our food delivery app runs flawlessly on both iOS and Android. Customer satisfaction has skyrocketed!',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'Educational Platform',
      text: 'The mobile learning app they developed for us increased student engagement by 300%. Incredible work!',
      rating: 5
    }
  ];

  return (
    <div className="service-detail-container">
      {/* Hero Section */}
      <section className="service-detail-hero" id="hero">
        <div className="service-detail-hero-content">
          <div className="service-detail-hero-text">
            <h1 className="service-detail-hero-title">
              Mobile App Development Services
            </h1>
            <p className="service-detail-hero-subtitle">
              Transform your ideas into powerful mobile applications that engage users and drive business growth.
            </p>
            <button className="service-detail-hero-button">
              Build Your App
            </button>
          </div>
          <div className="service-detail-hero-icon">
            <div className="service-detail-mobile-dev">
              <div className="mobile-devices">
                <div className="phone-container">
                  <div className="phone-frame"></div>
                  <div className="phone-screen">
                    <div className="app-icon app-1"></div>
                    <div className="app-icon app-2"></div>
                    <div className="app-icon app-3"></div>
                    <div className="app-icon app-4"></div>
                  </div>
                  <div className="phone-button"></div>
                </div>
                <div className="tablet-container">
                  <div className="tablet-frame"></div>
                  <div className="tablet-screen">
                    <div className="code-lines">
                      <div className="code-line line-1"></div>
                      <div className="code-line line-2"></div>
                      <div className="code-line line-3"></div>
                    </div>
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="gear gear-1"></div>
                  <div className="gear gear-2"></div>
                  <div className="download-arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`service-detail-section ${isVisible.introduction ? 'service-detail-fade-in' : ''}`} id="introduction">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Transform Ideas into Mobile Reality</h2>
          <p className="service-detail-intro-text">
            At Infinex, we specialize in creating innovative mobile applications that deliver exceptional user 
            experiences across iOS and Android platforms. Our team of expert developers combines cutting-edge 
            technology with creative design to build apps that not only look stunning but also perform flawlessly.
          </p>
          <p className="service-detail-intro-text">
            From concept to deployment, we handle every aspect of mobile app development including UI/UX design, 
            native and cross-platform development, backend integration, testing, and ongoing maintenance. We ensure 
            your app stands out in the competitive app marketplace and drives real business results.
          </p>
        </div>
      </section>

      {/* Sub Services */}
      <section className={`service-detail-section ${isVisible.services ? 'service-detail-fade-in' : ''}`} id="services">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Our Mobile Development Services</h2>
          <div className="service-detail-services-grid">
            {subServices.map((service, index) => (
              <div 
                key={index}
                className={`service-detail-service-card ${activeService === index ? 'service-detail-active' : ''}`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="service-detail-service-icon">{service.icon}</div>
                <h3 className="service-detail-service-title">{service.title}</h3>
                <p className="service-detail-service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editing Types */}
      <section className={`service-detail-section ${isVisible.types ? 'service-detail-fade-in' : ''}`} id="types">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Dvelopment Expertise</h2>
          <div className="service-detail-types-container">
            {marketingTypes.map((type, index) => (
              <div key={index} className="service-detail-type-card">
                <h3 className="service-detail-type-title">{type.type}</h3>
                <p className="service-detail-type-description">{type.description}</p>
                <div className="service-detail-tech-tags">
                  {type.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="service-detail-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={`service-detail-section ${isVisible.benefits ? 'service-detail-fade-in' : ''}`} id="benefits">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Why Choose Mobile Development Services?</h2>
          <div className="service-detail-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="service-detail-benefit-card">
                <h3 className="service-detail-benefit-title">{benefit.title}</h3>
                <p className="service-detail-benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Infinex */}
      <section className={`service-detail-section ${isVisible.choose ? 'service-detail-fade-in' : ''}`} id="choose">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Why Choose Infinex for Mobile Development?</h2>
          <div className="service-detail-choose-content">
            <div className="service-detail-choose-text">
              <div className="service-detail-choose-item">
                <h3>📱 Platform Expertise</h3>
                <p>Our developers are certified experts in iOS, Android, and cross-platform technologies with years of hands-on experience.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🚀 Agile Development</h3>
                <p>We use agile methodologies to deliver high-quality apps faster while maintaining flexibility for changes and improvements.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🔒 Security First</h3>
                <p>We implement robust security measures and follow industry best practices to protect user data and ensure app integrity.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>💡 Innovation Focus</h3>
                <p>We leverage the latest mobile technologies including AI, AR/VR, IoT integration, and emerging frameworks to create cutting-edge apps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className={`service-detail-section ${isVisible.faqs ? 'service-detail-fade-in' : ''}`} id="faqs">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Frequently Asked Questions</h2>
          <div className="service-detail-faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="service-detail-faq-item">
                <button 
                  className={`service-detail-faq-question ${activeFaq === index ? 'service-detail-active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {faq.question}
                  <span className="service-detail-faq-icon">{activeFaq === index ? '−' : '+'}</span>
                </button>
                <div className={`service-detail-faq-answer ${activeFaq === index ? 'service-detail-open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`service-detail-section ${isVisible.testimonials ? 'service-detail-fade-in' : ''}`} id="testimonials">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">What Our Clients Say</h2>
          <div className="service-detail-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="service-detail-testimonial-card">
                <div className="service-detail-testimonial-text">"{testimonial.text}"</div>
                <div className="service-detail-testimonial-author">
                  <div className="service-detail-testimonial-name">{testimonial.name}</div>
                  <div className="service-detail-testimonial-company">{testimonial.company}</div>
                  <div className="service-detail-testimonial-rating">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-detail-cta">
        <div className="service-detail-content">
          <h2>Ready to Dominate Search Results?</h2>
          <p>Let's boost your search rankings and social media presence with our proven SEO & SMO strategies.</p>
          <button className="service-detail-cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopment; 
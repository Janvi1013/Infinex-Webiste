import React, { useState, useEffect } from 'react';

const SoftwareDevelopmentPage = () => {
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
      title: 'Web Application Development',
      description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js',
      icon: '🌐'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: '📱'
    },
    {
      title: 'API Development',
      description: 'Robust RESTful and GraphQL APIs for seamless data integration',
      icon: '🔗'
    },
    {
      title: 'Database Design',
      description: 'Optimized database architecture and management solutions',
      icon: '🗄️'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies',
      icon: '☁️'
    },
    {
      title: 'E-commerce Development',
      description: 'Complete e-commerce platforms with payment integration',
      icon: '🛒'
    }
  ];

  const developmentTypes = [
    {
      type: 'Frontend Development',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript'],
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      type: 'Backend Development',
      technologies: ['Node.js', 'Python', 'Java', 'Express'],
      description: 'Building robust server-side applications and APIs'
    },
    {
      type: 'Full-Stack Development',
      technologies: ['MERN', 'MEAN', 'Django', 'Laravel'],
      description: 'End-to-end development solutions'
    },
    {
      type: 'DevOps & Deployment',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      description: 'Infrastructure management and deployment automation'
    }
  ];

  const benefits = [
    { title: 'Faster Time to Market', description: 'Accelerate your product launch with our streamlined development process' },
    { title: 'Scalable Solutions', description: 'Build applications that grow with your business needs' },
    { title: 'Cost-Effective', description: 'Reduce development costs while maintaining high quality standards' },
    { title: 'Expert Team', description: 'Access to skilled developers with extensive industry experience' },
    { title: '24/7 Support', description: 'Round-the-clock technical support and maintenance' },
    { title: 'Quality Assurance', description: 'Rigorous testing ensures bug-free, reliable software' }
  ];

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Node.js, Python, TypeScript, and cloud platforms like AWS and Azure.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most projects range from 4-16 weeks. We provide detailed timelines during the planning phase.'
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance to ensure your application runs smoothly.'
    },
    {
      question: 'Can you work with existing codebases?',
      answer: 'Absolutely! We can enhance, optimize, or migrate existing applications while maintaining functionality and improving performance.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular sprints, client feedback loops, and continuous integration to ensure quality delivery.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Infinex delivered our web application ahead of schedule. The quality exceeded our expectations!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Solutions Ltd.',
      text: 'Outstanding technical expertise and communication throughout the project. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      company: 'E-commerce Pro',
      text: 'The team transformed our outdated system into a modern, efficient platform. Excellent work!',
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
              Software Development Services
            </h1>
            <p className="service-detail-hero-subtitle">
              Crafting digital solutions with React, Node.js, and modern web technologies.
            </p>
            <button className="service-detail-hero-button">
              Let's Develop
            </button>
          </div>
          <div className="service-detail-hero-icon">
            <div className="service-detail-rocket">
              <div className="service-detail-rocket-body"></div>
              <div className="service-detail-rocket-window"></div>
              <div className="service-detail-rocket-fin service-detail-rocket-fin-left"></div>
              <div className="service-detail-rocket-fin service-detail-rocket-fin-right"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`service-detail-section ${isVisible.introduction ? 'service-detail-fade-in' : ''}`} id="introduction">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Transform Your Ideas Into Reality</h2>
          <p className="service-detail-intro-text">
            At Infinex, we specialize in creating innovative software solutions that drive business growth. 
            Our team of expert developers leverages cutting-edge technologies to build scalable, efficient, 
            and user-friendly applications tailored to your unique requirements.
          </p>
          <p className="service-detail-intro-text">
            From concept to deployment, we ensure every line of code serves a purpose in achieving your 
            business objectives. Our agile development approach guarantees transparency, flexibility, 
            and timely delivery of high-quality software solutions.
          </p>
        </div>
      </section>

      {/* Sub Services */}
      <section className={`service-detail-section ${isVisible.services ? 'service-detail-fade-in' : ''}`} id="services">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Our Development Services</h2>
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

      {/* Development Types */}
      <section className={`service-detail-section ${isVisible.types ? 'service-detail-fade-in' : ''}`} id="types">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Development Expertise</h2>
          <div className="service-detail-types-container">
            {developmentTypes.map((type, index) => (
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
          <h2 className="service-detail-section-title">Why Choose Our Development Services?</h2>
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
          <h2 className="service-detail-section-title">Why Choose Infinex for Software Development?</h2>
          <div className="service-detail-choose-content">
            <div className="service-detail-choose-text">
              <div className="service-detail-choose-item">
                <h3>🚀 Innovation-Driven Approach</h3>
                <p>We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>👥 Dedicated Team</h3>
                <p>Our experienced developers work as an extension of your team, ensuring seamless collaboration and communication.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>⚡ Agile Methodology</h3>
                <p>Iterative development with regular feedback ensures your project stays on track and meets your evolving needs.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🔒 Security First</h3>
                <p>We implement robust security measures and best practices to protect your data and applications.</p>
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
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your software development needs and create something amazing together.</p>
          <button className="service-detail-cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
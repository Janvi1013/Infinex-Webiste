//import React, { useState, useEffect } from 'react';
//
//const SoftwareDevelopmentPage = () => {
//  const [activeService, setActiveService] = useState(0);
//  const [activeFaq, setActiveFaq] = useState(null);
//  const [isVisible, setIsVisible] = useState({});
//
//  useEffect(() => {
//    const observer = new IntersectionObserver(
//      (entries) => {
//        entries.forEach(entry => {
//          if (entry.isIntersecting) {
//            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//          }
//        });
//      },
//      { threshold: 0.1 }
//    );
//
//    document.querySelectorAll('[id]').forEach(el => observer.observe(el));
//
//    return () => observer.disconnect();
//  }, []);
//
//  const subServices = [
//    {
//      title: 'User Research & Analysis',
//      description: 'Understanding your users through surveys, interviews, and data-driven insights',
//      icon: '🔍'
//    },
//    {
//      title: 'Wireframing & Prototyping',
//      description: 'Creating low and high-fidelity prototypes to visualize user journeys',
//      icon: '📝'
//    },
//    {
//      title: 'UI Design',
//      description: 'Crafting visually stunning interfaces that align with your brand identity',
//      icon: '🎨'
//    },
//    {
//      title: 'UX Strategy',
//      description: 'Designing experiences that improve usability and customer satisfaction',
//      icon: '🧩'
//    },
//    {
//      title: 'Interaction Design',
//      description: 'Defining micro-interactions and animations for a delightful experience',
//      icon: '✨'
//    },
//    {
//      title: 'Usability Testing',
//      description: 'Conducting real-user testing to validate design decisions and improve workflows',
//      icon: '✅'
//    }
//  ];
//
//  const developmentTypes = [
//    {
//      type: 'User Experience (UX) Design',
//      technologies: ['User Research', 'Persona Creation', 'Journey Mapping', 'Usability Testing'],
//      description: 'Designing seamless user flows and intuitive navigation paths'
//    },
//    {
//      type: 'User Interface (UI) Design',
//      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
//      description: 'Creating beautiful, consistent, and responsive visual layouts'
//    },
//    {
//      type: 'Interaction & Motion Design',
//      technologies: ['Lottie', 'Framer Motion', 'After Effects'],
//      description: 'Adding motion, feedback, and animation to enhance user delight'
//    },
//    {
//      type: 'Accessibility & Inclusive Design',
//      technologies: ['WCAG Standards', 'ARIA Labels', 'Keyboard Navigation'],
//      description: 'Ensuring designs are usable by everyone, regardless of ability'
//    }
//  ];
//
//  const benefits = [
//    { title: 'Improved User Satisfaction', description: 'Designs that prioritize user comfort and efficiency' },
//    { title: 'Higher Conversion Rates', description: 'Optimized design leads to better engagement and sales' },
//    { title: 'Consistent Branding', description: 'Unified visual identity across all platforms' },
//    { title: 'Faster Product Adoption', description: 'Easy-to-use interfaces shorten learning curves' },
//    { title: 'Accessibility Compliance', description: 'Meeting accessibility standards for all users' },
//    { title: 'Reduced Development Costs', description: 'Identifying design flaws early saves time and money' }
//  ];
//
//  const faqs = [
//    {
//      question: 'What tools do you use for UI/UX design?',
//      answer: 'We primarily use Figma, Adobe XD, Sketch, and InVision for creating and prototyping designs.'
//    },
//    {
//      question: 'Do you conduct user research?',
//      answer: 'Yes, we perform user interviews, surveys, and usability testing to ensure designs meet real user needs.'
//    },
//    {
//      question: 'Can you redesign an existing interface?',
//      answer: 'Absolutely! We can refresh your current design to improve usability and visual appeal.'
//    },
//    {
//      question: 'Do you provide clickable prototypes?',
//      answer: 'Yes, we deliver interactive prototypes that simulate the final experience before development begins.'
//    },
//    {
//      question: 'How do you ensure accessibility?',
//      answer: 'We follow WCAG guidelines, use semantic structures, and test with assistive technologies to ensure accessibility.'
//    }
//  ];
//
//  const testimonials = [
//    {
//      name: 'Liam Anderson',
//      company: 'CreativeTech',
//      text: 'Their UI/UX team completely transformed our app. User engagement skyrocketed within weeks!',
//      rating: 5
//    },
//    {
//      name: 'Sophia Lee',
//      company: 'Visionary Designs',
//      text: 'The research and design quality were outstanding. They really understood our users.',
//      rating: 5
//    },
//    {
//      name: 'David Kim',
//      company: 'FlowCommerce',
//      text: 'Our e-commerce platform is now so easy to use, and sales have increased by 30%.',
//      rating: 5
//    }
//  ];
//
//  return (
//    <div className="service-detail-container">
//      {/* Hero Section */}
//      <section className="service-detail-hero" id="hero">
//        <div className="service-detail-hero-content">
//          <div className="service-detail-hero-text">
//            <h1 className="service-detail-hero-title">
//              UI/UX Design Services
//            </h1>
//            <p className="service-detail-hero-subtitle">
//              Creating human-centered digital experiences that captivate and convert.
//            </p>
//            <button className="service-detail-hero-button">
//              Design With Us
//            </button>
//          </div>
//          <div className="service-detail-hero-icon">
//          <div className="service-detail-design-icon">
//        🎨✏️
//      </div>
//          </div>
//        </div>
//      </section>
//
//      {/* Introduction */}
//      <section className={`service-detail-section ${isVisible.introduction ? 'service-detail-fade-in' : ''}`} id="introduction">
//        <div className="service-detail-content">
//          <h2 className="service-detail-section-title">Design Experiences That Inspire</h2>
//          <p className="service-detail-intro-text">
//            At Infinex, our UI/UX design services focus on blending creativity with functionality.
//            We craft digital products that not only look beautiful but also deliver exceptional usability.
//          </p>
//          <p className="service-detail-intro-text">
//            From research and wireframes to polished designs and prototypes, our process ensures your
//            product engages users, strengthens your brand, and achieves measurable results.
//          </p>
//        </div>
//      </section>
//
//      {/* The rest of the component remains unchanged */}
//      {/* Sub Services */}
//      <section className={`service-detail-section ${isVisible.services ? 'service-detail-fade-in' : ''}`} id="services">
//        <div className="service-detail-content">
//          <h2 className="service-detail-section-title">Our UI/UX Services</h2>
//          <div className="service-detail-services-grid">
//            {subServices.map((service, index) => (
//              <div
//                key={index}
//                className={`service-detail-service-card ${activeService === index ? 'service-detail-active' : ''}`}
//                onMouseEnter={() => setActiveService(index)}
//              >
//                <div className="service-detail-service-icon">{service.icon}</div>
//                <h3 className="service-detail-service-title">{service.title}</h3>
//                <p className="service-detail-service-description">{service.description}</p>
//              </div>
//            ))}
//          </div>
//        </div>
//      </section>
//
//      {/* Development Types */}
//      <section className={`service-detail-section ${isVisible.types ? 'service-detail-fade-in' : ''}`} id="types">
//        <div className="service-detail-content">
//          <h2 className="service-detail-section-title">Design Expertise</h2>
//          <div className="service-detail-types-container">
//            {developmentTypes.map((type, index) => (
//              <div key={index} className="service-detail-type-card">
//                <h3 className="service-detail-type-title">{type.type}</h3>
//                <p className="service-detail-type-description">{type.description}</p>
//                <div className="service-detail-tech-tags">
//                  {type.technologies.map((tech, techIndex) => (
//                    <span key={techIndex} className="service-detail-tech-tag">{tech}</span>
//                  ))}
//                </div>
//              </div>
//            ))}
//          </div>
//        </div>
//      </section>
//
//      {/* Benefits */}
//      <section className={`service-detail-section ${isVisible.benefits ? 'service-detail-fade-in' : ''}`} id="benefits">
//        <div className="service-detail-content">
//          <h2 className="service-detail-section-title">Why Choose Our UI/UX Design?</h2>
//          <div className="service-detail-benefits-grid">
//            {benefits.map((benefit, index) => (
//              <div key={index} className="service-detail-benefit-card">
//                <h3 className="service-detail-benefit-title">{benefit.title}</h3>
//                <p className="service-detail-benefit-description">{benefit.description}</p>
//              </div>
//            ))}
//          </div>
//        </div>
//		  </section>
//
//		  {/* Why Choose Infinex */}
//<section className={`service-detail-section ${isVisible.choose ? 'service-detail-fade-in' : ''}`} id="choose">
//  <div className="service-detail-content">
//    <h2 className="service-detail-section-title">Why Choose Infinex for Software Development?</h2>
//    <div className="service-detail-choose-content">
//      <div className="service-detail-choose-text">
//        <div className="service-detail-choose-item">
//          <h3>🎨 User-Centered Design</h3>
//          <p>We focus on your users’ needs to craft intuitive, engaging, and delightful experiences.</p>
//        </div>
//        <div className="service-detail-choose-item">
//          <h3>🔍 Research-Driven Approach</h3>
//          <p>Our designs are based on in-depth user research and data-backed insights.</p>
//        </div>
//        <div className="service-detail-choose-item">
//          <h3>⚡ Rapid Prototyping</h3>
//          <p>We create interactive prototypes quickly, enabling faster feedback and iteration.</p>
//        </div>
//        <div className="service-detail-choose-item">
//          <h3>♿ Accessibility First</h3>
//          <p>We ensure your product is usable and enjoyable for everyone, including people with disabilities.</p>
//        </div>
//      </div>
//    </div>
//  </div>
//</section>
//
//
//      {/* FAQs */}
//      <section className={`service-detail-section ${isVisible.faqs ? 'service-detail-fade-in' : ''}`} id="faqs">
//        <div className="service-detail-content">
//          <h2 className="service-detail-section-title">Frequently Asked Questions</h2>
//          <div className="service-detail-faq-container">
//            {faqs.map((faq, index) => (
//              <div key={index} className="service-detail-faq-item">
//                <button
//                  className={`service-detail-faq-question ${activeFaq === index ? 'service-detail-active' : ''}`}
//                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
//                >
//                  {faq.question}
//                  <span className="service-detail-faq-icon">{activeFaq === index ? '−' : '+'}</span>
//                </button>
//                <div className={`service-detail-faq-answer ${activeFaq === index ? 'service-detail-open' : ''}`}>
//                  <p>{faq.answer}</p>
//                </div>
//              </div>
//            ))}
//          </div>
//        </div>
//      </section>
//
//      {/* Testimonials */}
//      <section className={`service-detail-section ${isVisible.testimonials ? 'service-detail-fade-in' : ''}`} id="testimonials">
//        <div className="service-detail-content">
//          <h2 className="service-detail-section-title">What Our Clients Say</h2>
//          <div className="service-detail-testimonials-grid">
//            {testimonials.map((testimonial, index) => (
//              <div key={index} className="service-detail-testimonial-card">
//                <div className="service-detail-testimonial-text">"{testimonial.text}"</div>
//                <div className="service-detail-testimonial-author">
//                  <div className="service-detail-testimonial-name">{testimonial.name}</div>
//                  <div className="service-detail-testimonial-company">{testimonial.company}</div>
//                  <div className="service-detail-testimonial-rating">
//                    {'★'.repeat(testimonial.rating)}
//                  </div>
//                </div>
//              </div>
//            ))}
//          </div>
//        </div>
//      </section>
//
//      {/* CTA Section */}
//      <section className="service-detail-cta">
//        <div className="service-detail-content">
//          <h2>Ready to Create Stunning Experiences?</h2>
//          <p>Let’s collaborate to design products your users will love.</p>
//          <button className="service-detail-cta-button">Start Designing</button>
//        </div>
//      </section>
//    </div>
//  );
//};
//
//export default SoftwareDevelopmentPage;






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
      title: 'UI/UX Strategy',
      description: 'Comprehensive design planning to align visuals with business goals',
      icon: '🧭'
    },
    {
      title: 'Wireframing & Prototyping',
      description: 'Low and high-fidelity prototypes to visualize user flows',
      icon: '📐'
    },
    {
      title: 'Visual Design',
      description: 'Pixel-perfect layouts with typography, colors, and imagery',
      icon: '🎨'
    },
    {
      title: 'Interaction Design',
      description: 'Engaging animations and micro-interactions for better UX',
      icon: '✨'
    },
    {
      title: 'Usability Testing',
      description: 'Testing with real users to validate and improve experiences',
      icon: '🧪'
    },
    {
      title: 'Design Systems',
      description: 'Reusable component libraries for brand consistency',
      icon: '📦'
    }
  ];

  const developmentTypes = [
    {
      type: 'Research & Discovery',
      technologies: ['User Interviews', 'Surveys', 'Analytics'],
      description: 'Understanding users and defining project direction'
    },
    {
      type: 'Wireframes & Prototypes',
      technologies: ['Figma', 'Sketch', 'Adobe XD'],
      description: 'Rapid prototyping for faster iteration'
    },
    {
      type: 'Visual & Interaction Design',
      technologies: ['Illustrator', 'Photoshop', 'Framer'],
      description: 'High-quality UI with smooth, intuitive interactions'
    },
    {
      type: 'Design System Creation',
      technologies: ['Storybook', 'Zeroheight', 'Figma Libraries'],
      description: 'Consistent and scalable design guidelines'
    }
  ];

  const benefits = [
    { title: 'User-Centered Approach', description: 'Designs built for real people, not just aesthetics' },
    { title: 'Data-Driven Decisions', description: 'Every design choice is backed by research' },
    { title: 'Faster Iterations', description: 'Quick feedback loops for better results' },
    { title: 'Consistent Branding', description: 'Maintain your brand identity across platforms' },
    { title: 'Accessibility Focus', description: 'Inclusive design for all users' },
    { title: 'Scalable Design Systems', description: 'Future-proof your product with reusable components' }
  ];

  const faqs = [
    {
      question: 'What design tools do you use?',
      answer: 'We primarily use Figma, Adobe XD, and Sketch for UI/UX design, along with Illustrator and Photoshop for graphics.'
    },
    {
      question: 'Do you offer responsive design?',
      answer: 'Yes, all our designs are optimized for mobile, tablet, and desktop.'
    },
    {
      question: 'Can you redesign an existing product?',
      answer: 'Absolutely! We specialize in UX audits and redesigns to improve existing experiences.'
    },
    {
      question: 'Do you provide prototypes?',
      answer: 'Yes, we deliver clickable prototypes for stakeholder feedback before development.'
    },
    {
      question: 'How do you handle feedback?',
      answer: 'We work in iterative cycles, incorporating your feedback at each stage for optimal results.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'CreativeFlow',
      text: 'Infinex transformed our product into a visually stunning and highly usable platform.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'PixelWorks',
      text: 'The new design increased user engagement by over 40%. Truly outstanding!',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      company: 'UXStudio',
      text: 'Their UX research insights were game-changing for our product.',
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
              UI/UX Design Services
            </h1>
            <p className="service-detail-hero-subtitle">
              Creating exceptional user experiences through research-driven design and beautiful interfaces.
            </p>
            <button className="service-detail-hero-button">
              Let's Design
            </button>
          </div>
          <div className="service-detail-hero-icon">
            <div className="service-detail-design-tool">
              <div className="service-detail-tool-body"></div>
              <div className="service-detail-tool-screen"></div>
              <div className="service-detail-tool-cursor"></div>
              <div className="service-detail-tool-elements">
                <div className="service-detail-element service-detail-element-1"></div>
                <div className="service-detail-element service-detail-element-2"></div>
                <div className="service-detail-element service-detail-element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Introduction */}
      <section className={`service-detail-section ${isVisible.introduction ? 'service-detail-fade-in' : ''}`} id="introduction">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Design That Works</h2>
          <p className="service-detail-intro-text">
            At Infinex, we design experiences that are as functional as they are beautiful. Our process blends creativity, usability, and research to produce designs that delight users and meet business goals.
          </p>
          <p className="service-detail-intro-text">
            From concept to final handoff, we ensure every pixel serves a purpose, making your digital presence memorable and impactful.
          </p>
        </div>
      </section>

      {/* Sub Services */}
      <section className={`service-detail-section ${isVisible.services ? 'service-detail-fade-in' : ''}`} id="services">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Our Design Services</h2>
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
          <h2 className="service-detail-section-title">Our Design Process</h2>
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
          <h2 className="service-detail-section-title">Why Choose Our Design Services?</h2>
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
                <h3>🎨 User-Centered Design</h3>
                <p>We focus on your users’ needs to craft intuitive, engaging, and delightful experiences.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🔍 Research-Driven Approach</h3>
                <p>Our designs are based on in-depth user research and data-backed insights.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>⚡ Rapid Prototyping</h3>
                <p>We create interactive prototypes quickly, enabling faster feedback and iteration.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>♿ Accessibility First</h3>
                <p>We ensure your product is usable and enjoyable for everyone, including people with disabilities.</p>
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
          <p>Let's discuss your design needs and create something amazing together.</p>
          <button className="service-detail-cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;

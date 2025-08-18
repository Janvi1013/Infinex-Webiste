import React, { useState, useEffect } from 'react';

const SocialMediaMarketing = () => {
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
      title: 'Social Media Strategy',
      description: 'Comprehensive social media strategies tailored to your brand and target audience',
      icon: '📋'
    },
    {
      title: 'Content Creation',
      description: 'Engaging posts, graphics, videos, and stories that resonate with your audience',
      icon: '🎨'
    },
    {
      title: 'Community Management',
      description: 'Active community engagement, responding to comments, and building relationships',
      icon: '👥'
    },
    {
      title: 'Paid Social Advertising',
      description: 'Targeted ad campaigns on Facebook, Instagram, LinkedIn, and other platforms',
      icon: '🎯'
    },
    {
      title: 'Influencer Marketing',
      description: 'Partner with relevant influencers to expand your reach and credibility',
      icon: '⭐'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Detailed performance tracking and insights to optimize your social media ROI',
      icon: '📊'
    }
  ];

  const marketingTypes = [
    {
      type: 'Platform Management',
      technologies: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter/X'],
      description: 'Complete management across all major social platforms'
    },
    {
      type: 'Content Strategy',
      technologies: ['Canva', 'Adobe Creative', 'Figma', 'Video Tools'],
      description: 'Strategic content planning and creation for maximum engagement'
    },
    {
      type: 'Paid Advertising',
      technologies: ['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'TikTok Ads'],
      description: 'Targeted advertising campaigns with optimized ROI'
    },
    {
      type: 'Analytics & Insights',
      technologies: ['Google Analytics', 'Meta Insights', 'Hootsuite', 'Sprout Social'],
      description: 'Data-driven insights and performance optimization'
    }
  ];

  const benefits = [
    { title: 'Increased Brand Awareness', description: 'Expand your reach and build recognition across social platforms' },
    { title: 'Higher Engagement Rates', description: 'Create content that sparks conversations and builds community' },
    { title: 'Cost-Effective Marketing', description: 'Maximize your marketing budget with targeted social media strategies' },
    { title: 'Expert Team', description: 'Certified social media specialists with proven track records' },
    { title: 'Real-Time Monitoring', description: 'Continuous monitoring and quick response to trends and opportunities' },
    { title: 'Measurable Results', description: 'Clear metrics and ROI tracking for all social media activities' }
  ];

  const faqs = [
    {
      question: 'Which social media platforms do you manage?',
      answer: 'We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter/X, TikTok, YouTube, and emerging platforms based on your target audience.'
    },
    {
      question: 'How often do you post content?',
      answer: 'Posting frequency varies by platform and strategy, typically ranging from daily posts to 3-5 times per week, optimized for each platform\'s best practices.'
    },
    {
      question: 'Do you create original content?',
      answer: 'Yes, we create original graphics, videos, captions, and other content tailored to your brand voice and visual identity.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We track key metrics like engagement rates, reach, follower growth, website traffic, lead generation, and conversion rates specific to your goals.'
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Absolutely! We work within your brand guidelines and can help refine them for social media while maintaining brand consistency.'
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'Fashion Forward',
      text: 'Infinex doubled our Instagram engagement in just 3 months. Our follower growth has been incredible!',
      rating: 5
    },
    {
      name: 'Alex Rodriguez',
      company: 'Local Restaurant Group',
      text: 'Their social media strategy helped us increase foot traffic by 40%. Amazing results!',
      rating: 5
    },
    {
      name: 'Jennifer Kim',
      company: 'Tech Startup',
      text: 'Professional, creative, and data-driven. Our LinkedIn presence has never been stronger!',
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
              Social Media Marketing Services
            </h1>
            <p className="service-detail-hero-subtitle">
              Amplify your brand presence and engage your audience across all social media platforms.
            </p>
            <button className="service-detail-hero-button">
              Boost Your Presence
            </button>
          </div>
          <div className="service-detail-hero-icon">
            <div className="service-detail-social-media">
              <div className="service-detail-phone-body"></div>
              <div className="service-detail-phone-screen"></div>
              <div className="service-detail-notification service-detail-notification-1"></div>
              <div className="service-detail-notification service-detail-notification-2"></div>
              <div className="service-detail-notification service-detail-notification-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`service-detail-section ${isVisible.introduction ? 'service-detail-fade-in' : ''}`} id="introduction">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Amplify Your Digital Presence</h2>
          <p className="service-detail-intro-text">
            At Infinex, we specialize in creating powerful social media strategies that build brand awareness, 
            drive engagement, and convert followers into customers. Our team of social media experts understands 
            the nuances of each platform and creates content that resonates with your target audience.
          </p>
          <p className="service-detail-intro-text">
            From content creation to community management, paid advertising to analytics, we provide comprehensive 
            social media marketing solutions that deliver measurable results and help your business thrive in 
            the digital landscape.
          </p>
        </div>
      </section>

      {/* Sub Services */}
      <section className={`service-detail-section ${isVisible.services ? 'service-detail-fade-in' : ''}`} id="services">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Our Social Media Services</h2>
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
          <h2 className="service-detail-section-title">Our Marketing Expertise</h2>
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
          <h2 className="service-detail-section-title">Why Choose Our Social Media Marketing?</h2>
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
          <h2 className="service-detail-section-title">Why Choose Infinex for Social Media Marketing?</h2>
          <div className="service-detail-choose-content">
            <div className="service-detail-choose-text">
              <div className="service-detail-choose-item">
                <h3>📈 Data-Driven Strategies</h3>
                <p>We use analytics and insights to create strategies that deliver measurable results and maximize your ROI.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🎯 Targeted Approach</h3>
                <p>Our team creates content and campaigns specifically designed for your target audience and business goals.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>⚡ Trend Awareness</h3>
                <p>We stay ahead of social media trends and platform updates to keep your brand relevant and engaging.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🤝 Brand Consistency</h3>
                <p>We maintain your brand voice and visual identity across all platforms while adapting to each platform's unique style.</p>
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
          <h2>Ready to Grow Your Social Media?</h2>
          <p>Let's create a social media strategy that builds your brand and drives real business results.</p>
          <button className="service-detail-cta-button">Get Started Today</button>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
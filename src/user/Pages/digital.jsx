import React, { useState, useEffect } from 'react';

const DigitalMarketing = () => {
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
      title: 'Search Engine Optimization',
      description: 'Boost your website visibility and organic traffic with proven SEO strategies',
      icon: '🔍'
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience across platforms like Facebook, Instagram, LinkedIn, and Twitter',
      icon: '📱'
    },
    {
      title: 'Pay-Per-Click Advertising',
      description: 'Targeted Google Ads and social media campaigns for maximum ROI',
      icon: '💰'
    },
    {
      title: 'Content Marketing',
      description: 'Create compelling content that drives engagement and conversions',
      icon: '📝'
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns',
      icon: '📧'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing performance',
      icon: '📊'
    }
  ];

  const developmentTypes = [
    {
      type: 'Search Marketing',
      technologies: ['Google Ads', 'Bing Ads', 'SEO Tools', 'Keyword Research'],
      description: 'Dominate search results and drive qualified traffic'
    },
    {
      type: 'Social Media Strategy',
      technologies: ['Facebook Ads', 'Instagram', 'LinkedIn', 'TikTok'],
      description: 'Build brand awareness and community engagement'
    },
    {
      type: 'Content Creation',
      technologies: ['Copywriting', 'Video Production', 'Graphic Design', 'Blogging'],
      description: 'Create compelling content that converts'
    },
    {
      type: 'Marketing Automation',
      technologies: ['HubSpot', 'Mailchimp', 'Salesforce', 'Zapier'],
      description: 'Streamline your marketing processes and workflows'
    }
  ];

  const benefits = [
    { title: 'Increased Brand Visibility', description: 'Expand your reach and get discovered by your target audience' },
    { title: 'Higher Conversion Rates', description: 'Turn more visitors into customers with optimized campaigns' },
    { title: 'Cost-Effective Growth', description: 'Maximize your marketing budget with data-driven strategies' },
    { title: 'Expert Marketing Team', description: 'Access certified specialists across all digital channels' },
    { title: 'Real-Time Optimization', description: 'Continuous campaign monitoring and performance improvements' },
    { title: 'Detailed Analytics', description: 'Transparent reporting on all marketing metrics and ROI' }
  ];

  const faqs = [
    {
      question: 'Which digital marketing channels do you focus on?',
      answer: 'We cover all major channels including Google Ads, social media advertising, SEO, email marketing, content marketing, and influencer partnerships.'
    },
    {
      question: 'How quickly can I see results from digital marketing?',
      answer: 'Results vary by channel. PPC ads can show immediate results, while SEO typically takes 3-6 months. Social media and content marketing show gradual improvement over 2-4 months.'
    },
    {
      question: 'Do you provide monthly performance reports?',
      answer: 'Yes, we provide comprehensive monthly reports with key metrics, insights, and recommendations for optimization across all your marketing channels.'
    },
    {
      question: 'Can you work with my existing marketing team?',
      answer: 'Absolutely! We can complement your internal team or take full ownership of your digital marketing efforts, depending on your needs and preferences.'
    },
    {
      question: 'What makes your digital marketing approach different?',
      answer: 'We focus on data-driven strategies, personalized customer journeys, and integrated multi-channel campaigns that work together to maximize your ROI.'
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'Retail Plus',
      text: 'Our online sales increased by 250% within 6 months. Their digital marketing strategy is phenomenal!',
      rating: 5
    },
    {
      name: 'Lisa Parker',
      company: 'Healthcare Solutions',
      text: 'Infinex transformed our digital presence. We now lead our industry in online visibility and engagement.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Local Restaurant Group',
      text: 'Their social media campaigns brought in more customers than we ever imagined. ROI exceeded expectations!',
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
              Digital Marketing Services
            </h1>
            <p className="service-detail-hero-subtitle">
              Accelerate your growth with data-driven digital marketing strategies that deliver results.
            </p>
            <button className="service-detail-hero-button">
              Boost Your Brand
            </button>
          </div>
          <div className="service-detail-hero-icon">
         <div className="service-detail-megaphone">
  <div className="service-detail-megaphone-body"></div>
  <div className="service-detail-megaphone-window"></div>
  <div className="service-detail-megaphone-fin service-detail-megaphone-fin-left"></div>
  <div className="service-detail-megaphone-fin service-detail-megaphone-fin-right"></div>
</div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`service-detail-section ${isVisible.introduction ? 'service-detail-fade-in' : ''}`} id="introduction">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Amplify Your Digital Presence</h2>
          <p className="service-detail-intro-text">
            At Infinex, we craft comprehensive digital marketing strategies that connect your brand with the right 
            audience at the right time. Our data-driven approach combines creativity with analytics to deliver 
            measurable results across all digital channels.
          </p>
          <p className="service-detail-intro-text">
            From search engine optimization to social media advertising, we create integrated campaigns that 
            maximize your online visibility, engage your target audience, and drive sustainable business growth. 
            Every strategy is tailored to your unique brand voice and business objectives.
          </p>
        </div>
      </section>

      {/* Sub Services */}
      <section className={`service-detail-section ${isVisible.services ? 'service-detail-fade-in' : ''}`} id="services">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Our Marketing Services</h2>
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
          <h2 className="service-detail-section-title">Marketing Specializations</h2>
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
          <h2 className="service-detail-section-title">Why Choose Our Marketing Services?</h2>
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
          <h2 className="service-detail-section-title">Why Choose Infinex for Digital Marketing?</h2>
          <div className="service-detail-choose-content">
            <div className="service-detail-choose-text">
              <div className="service-detail-choose-item">
                <h3>📈 Results-Driven Strategy</h3>
                <p>We focus on metrics that matter to your business, delivering campaigns that generate real ROI and measurable growth.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🎯 Targeted Campaigns</h3>
                <p>Our precision targeting ensures your message reaches the right audience, maximizing engagement and conversion rates.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🔄 Continuous Optimization</h3>
                <p>We constantly test, analyze, and refine your campaigns to improve performance and stay ahead of market changes.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>📊 Transparent Reporting</h3>
                <p>Clear, detailed reports keep you informed about campaign performance, spend, and opportunities for growth.</p>
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
          <h2>Ready to Grow Your Business?</h2>
          <p>Let's create a digital marketing strategy that drives real results for your brand.</p>
          <button className="service-detail-cta-button">Start Your Campaign</button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
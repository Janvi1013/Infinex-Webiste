import React, { useState, useEffect } from 'react';

const SEOSMOServices = () => {
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
      title: 'Search Engine Optimization (SEO)',
      description: 'Comprehensive SEO strategies to improve your website rankings and organic visibility',
      icon: '🔍'
    },
    {
      title: 'Social Media Optimization (SMO)',
      description: 'Optimize your social profiles and content for maximum reach and engagement',
      icon: '📱'
    },
    {
      title: 'Keyword Research & Analysis',
      description: 'In-depth keyword research to target the right search terms for your business',
      icon: '🎯'
    },
    {
      title: 'Content Optimization',
      description: 'SEO-optimized content creation that ranks well and engages your audience',
      icon: '✍️'
    },
    {
      title: 'Technical SEO',
      description: 'Website optimization for speed, mobile-friendliness, and search engine crawlability',
      icon: '⚙️'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Detailed SEO and SMO performance tracking with actionable insights',
      icon: '📊'
    }
  ];

  const marketingTypes = [
    {
      type: 'On-Page SEO',
      technologies: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog'],
      description: 'Optimize your website structure, content, and meta elements for better rankings'
    },
    {
      type: 'Off-Page SEO',
      technologies: ['Link Building', 'Guest Posting', 'Directory Submissions', 'PR Outreach'],
      description: 'Build domain authority through quality backlinks and brand mentions'
    },
    {
      type: 'Social Media Optimization',
      technologies: ['Facebook Business', 'Instagram Creator', 'LinkedIn Pages', 'Twitter Analytics'],
      description: 'Optimize social profiles and content for maximum visibility and engagement'
    },
    {
      type: 'Local SEO & SMO',
      technologies: ['Google My Business', 'Local Citations', 'Location Tags', 'Review Management'],
      description: 'Dominate local search results and social presence in your area'
    }
  ];

  const benefits = [
    { title: 'Higher Search Rankings', description: 'Improve your visibility on Google and other search engines' },
    { title: 'Increased Organic Traffic', description: 'Drive more qualified visitors to your website naturally' },
    { title: 'Enhanced Social Visibility', description: 'Boost your reach and engagement across social platforms' },
    { title: 'Better ROI', description: 'Long-term sustainable results with cost-effective strategies' },
    { title: 'Expert Analysis', description: 'Certified SEO and SMO specialists with proven methodologies' },
    { title: 'Comprehensive Reporting', description: 'Track rankings, traffic, and social metrics with detailed insights' }
  ];

  const faqs = [
    {
      question: 'How long does it take to see SEO results?',
      answer: 'SEO typically takes 3-6 months to show significant results, while SMO can show improvements within weeks. We provide monthly reports to track progress.'
    },
    {
      question: 'What\'s the difference between SEO and SMO?',
      answer: 'SEO focuses on optimizing your website for search engines, while SMO optimizes your social media presence. Both work together to improve your overall online visibility.'
    },
    {
      question: 'Do you guarantee first page rankings?',
      answer: 'We don\'t guarantee specific rankings as search algorithms constantly change, but we use proven strategies to significantly improve your search visibility and traffic.'
    },
    {
      question: 'How do you choose keywords for our business?',
      answer: 'We conduct thorough keyword research analyzing search volume, competition, and relevance to your business to target the most valuable terms for your industry.'
    },
    {
      question: 'Can you help with local SEO?',
      answer: 'Yes! We specialize in local SEO optimization including Google My Business, local citations, and location-based social media strategies.'
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'Local Law Firm',
      text: 'Our website now ranks #1 for key legal terms in our city. Client inquiries have increased by 60%!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Store',
      text: 'Infinex improved our organic traffic by 200% and our social engagement tripled. Outstanding results!',
      rating: 5
    },
    {
      name: 'Michael Brown',
      company: 'Healthcare Practice',
      text: 'Their SEO and SMO strategies helped us become the top-rated practice in our area. Highly recommended!',
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
              SEO & SMO Services
            </h1>
            <p className="service-detail-hero-subtitle">
              Dominate search results and social media with our comprehensive SEO and SMO optimization strategies.
            </p>
            <button className="service-detail-hero-button">
              Boost Your Rankings
            </button>
          </div>
          <div className="service-detail-hero-icon">
            <div className="service-detail-seo-smo">
              <div className="search-graph">
                <div className="search-bar"></div>
                <div className="graph-container">
                  <div className="graph-bar bar-1"></div>
                  <div className="graph-bar bar-2"></div>
                  <div className="graph-bar bar-3"></div>
                  <div className="graph-bar bar-4"></div>
                  <div className="graph-bar bar-5"></div>
                </div>
                <div className="trending-arrow"></div>
                <div className="social-icons">
                  <div className="social-icon icon-1"></div>
                  <div className="social-icon icon-2"></div>
                  <div className="social-icon icon-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`service-detail-section ${isVisible.introduction ? 'service-detail-fade-in' : ''}`} id="introduction">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Maximize Your Online Visibility</h2>
          <p className="service-detail-intro-text">
            At Infinex, we combine the power of Search Engine Optimization (SEO) and Social Media Optimization (SMO) 
            to create a comprehensive digital marketing strategy. Our expert team helps your business rank higher in 
            search results while building a strong, engaging social media presence that drives traffic and conversions.
          </p>
          <p className="service-detail-intro-text">
            From technical SEO audits to social media profile optimization, keyword research to content strategy, 
            we provide end-to-end solutions that boost your online visibility, drive organic traffic, and establish 
            your brand as an authority in your industry.
          </p>
        </div>
      </section>

      {/* Sub Services */}
      <section className={`service-detail-section ${isVisible.services ? 'service-detail-fade-in' : ''}`} id="services">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Our SEO & SMO Services</h2>
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
          <h2 className="service-detail-section-title">Our Optimization Expertise</h2>
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
          <h2 className="service-detail-section-title">Why Choose Our SEO & SMO Services?</h2>
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
          <h2 className="service-detail-section-title">Why Choose Infinex for SEO & SMO?</h2>
          <div className="service-detail-choose-content">
            <div className="service-detail-choose-text">
              <div className="service-detail-choose-item">
                <h3>🔬 Advanced Analytics</h3>
                <p>We use cutting-edge SEO tools and social analytics to identify opportunities and track performance with precision.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🎯 Strategic Approach</h3>
                <p>Our integrated SEO and SMO strategies work together to maximize your online presence and drive qualified traffic.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>⚡ Algorithm Expertise</h3>
                <p>We stay updated with the latest search engine and social media algorithm changes to keep your rankings strong.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🎨 Content Excellence</h3>
                <p>Our content team creates SEO-optimized, engaging content that ranks well and resonates with your audience.</p>
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

export default SEOSMOServices;
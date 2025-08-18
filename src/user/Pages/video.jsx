import React, { useState, useEffect } from 'react';

const VideoEditing = () => {
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
      title: 'Corporate Video Editing',
      description: 'Professional corporate videos, presentations, and promotional content for businesses',
      icon: '🏢'
    },
    {
      title: 'Social Media Content',
      description: 'Short-form videos optimized for Instagram, TikTok, YouTube Shorts, and other platforms',
      icon: '📱'
    },
    {
      title: 'Wedding & Event Videos',
      description: 'Beautiful wedding films and event highlights that capture your special moments',
      icon: '💒'
    },
    {
      title: 'YouTube Channel Management',
      description: 'Complete YouTube video editing with thumbnails, intros, outros, and optimization',
      icon: '📺'
    },
    {
      title: 'Documentary & Storytelling',
      description: 'Compelling documentaries and narrative videos with professional storytelling techniques',
      icon: '🎬'
    },
    {
      title: 'Motion Graphics & Animation',
      description: 'Custom animations, motion graphics, and visual effects to enhance your content',
      icon: '✨'
    }
  ];

  const editingTypes = [
    {
      type: 'Color Grading & Correction',
      technologies: ['DaVinci Resolve', 'Adobe Premiere', 'Final Cut Pro', 'LUTs'],
      description: 'Professional color correction and grading for cinematic looks'
    },
    {
      type: 'Audio Post-Production',
      technologies: ['Adobe Audition', 'Pro Tools', 'Logic Pro', 'Noise Reduction'],
      description: 'Crystal clear audio mixing, noise reduction, and sound design'
    },
    {
      type: 'Visual Effects & Graphics',
      technologies: ['After Effects', 'Cinema 4D', 'Blender', 'Photoshop'],
      description: 'Advanced VFX, motion graphics, and animated elements'
    },
    {
      type: 'Multi-Camera Editing',
      technologies: ['Premiere Pro', 'Final Cut Pro', 'Sync Tools', 'Multicam'],
      description: 'Professional multi-camera synchronization and editing'
    }
  ];

  const benefits = [
    { title: 'Quick Turnaround', description: 'Fast delivery without compromising on quality, meeting your deadlines' },
    { title: 'Professional Quality', description: 'Broadcast-quality editing with attention to every detail' },
    { title: 'Cost-Effective', description: 'Professional video editing at competitive rates for all budgets' },
    { title: 'Creative Expertise', description: 'Experienced editors who understand storytelling and visual impact' },
    { title: 'Unlimited Revisions', description: 'We work with you until you\'re completely satisfied with the result' },
    { title: 'Format Optimization', description: 'Videos optimized for any platform - web, social media, or broadcast' }
  ];

  const faqs = [
    {
      question: 'What video formats do you work with?',
      answer: 'We work with all major video formats including MP4, MOV, AVI, MKV, and can deliver in any format you need for your specific platform or use case.'
    },
    {
      question: 'How long does video editing take?',
      answer: 'Turnaround time depends on video length and complexity. Simple edits take 1-3 days, while complex projects with effects may take 1-2 weeks.'
    },
    {
      question: 'Do you provide raw footage backup?',
      answer: 'Yes, we securely store your raw footage during the project and can provide organized backup files upon request.'
    },
    {
      question: 'Can you match a specific style or brand?',
      answer: 'Absolutely! We can match your brand guidelines, color schemes, and preferred editing style to maintain consistency with your content.'
    },
    {
      question: 'What\'s included in your editing service?',
      answer: 'Our service includes cutting, color correction, audio mixing, basic graphics, transitions, and up to 3 rounds of revisions.'
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'Creative Studios',
      text: 'Infinex transformed our raw footage into a stunning promotional video. The attention to detail was exceptional!',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Wedding Bliss Co.',
      text: 'They captured the emotion of our wedding perfectly. The final video brought tears to our eyes!',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Tech Innovators',
      text: 'Professional, creative, and delivered ahead of schedule. Our YouTube channel has never looked better!',
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
              Professional Video Editing Services
            </h1>
            <p className="service-detail-hero-subtitle">
              Transform your raw footage into compelling stories with professional editing, color grading, and post-production.
            </p>
            <button className="service-detail-hero-button">
              Start Editing
            </button>
          </div>
          <div className="service-detail-hero-icon">
           <div className="service-detail-hero-icon">
  <div className="service-detail-video-camera">
    <div className="service-detail-camera-body"></div>
    <div className="service-detail-camera-lens"></div>
    <div className="service-detail-camera-handle"></div>
    <div className="service-detail-camera-recording"></div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`service-detail-section ${isVisible.introduction ? 'service-detail-fade-in' : ''}`} id="introduction">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Bring Your Vision to Life</h2>
          <p className="service-detail-intro-text">
            At Infinex, we specialize in transforming raw footage into captivating visual stories. 
            Our team of skilled video editors combines technical expertise with creative vision to 
            produce videos that engage, inspire, and deliver results for your brand or personal projects.
          </p>
          <p className="service-detail-intro-text">
            From corporate presentations to social media content, wedding films to documentaries, 
            we handle every aspect of post-production with meticulous attention to detail and 
            a deep understanding of what makes great video content.
          </p>
        </div>
      </section>

      {/* Sub Services */}
      <section className={`service-detail-section ${isVisible.services ? 'service-detail-fade-in' : ''}`} id="services">
        <div className="service-detail-content">
          <h2 className="service-detail-section-title">Our Video Editing Services</h2>
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
          <h2 className="service-detail-section-title">Our Editing Expertise</h2>
          <div className="service-detail-types-container">
            {editingTypes.map((type, index) => (
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
          <h2 className="service-detail-section-title">Why Choose Our Video Editing Services?</h2>
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
          <h2 className="service-detail-section-title">Why Choose Infinex for Video Editing?</h2>
          <div className="service-detail-choose-content">
            <div className="service-detail-choose-text">
              <div className="service-detail-choose-item">
                <h3>🎨 Creative Excellence</h3>
                <p>Our editors combine technical skills with artistic vision to create videos that stand out and tell compelling stories.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>⚡ Fast Delivery</h3>
                <p>We understand deadlines matter. Our streamlined workflow ensures quick turnaround without sacrificing quality.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>💡 Latest Technology</h3>
                <p>We use industry-standard software and cutting-edge techniques to deliver professional-grade results.</p>
              </div>
              <div className="service-detail-choose-item">
                <h3>🤝 Collaborative Process</h3>
                <p>We work closely with you throughout the editing process, ensuring your vision is perfectly realized.</p>
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
          <h2>Ready to Edit Your Video?</h2>
          <p>Let's transform your raw footage into a masterpiece that captivates your audience.</p>
          <button className="service-detail-cta-button">Start Your Project</button>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;